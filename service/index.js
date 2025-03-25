// require('dotenv').config({path: './service/api.env'});

require('dotenv').config({ path: './api.env' });

const apiKey = process.env.API_KEY;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require('express');
const uuid = require("uuid");
const app = express();
const DB = require('./database.js');

const CookieName = "token";

const posts = [];

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post("/auth/create", async (req, res) => {
    if(await findUser("username", req.body.username)){
        res.status(409).send({msg: "Existing User"});
    }else{
        const user = await createUser(req.body.username, req.body.password);
        setAuthCookie(res, user.token);
        res.send({username: user.username});
    }
})

apiRouter.post("/auth/login", async (req, res) => {
    const user = await findUser("username", req.body.username);
    if(user){
        if(await bcrypt.compare(req.body.password, user.password)){
            token = uuid.v4();
            DB.updateUser(user, token);
            setAuthCookie(res, token);
            res.send({ username: user.username });
        }
    }else{
        res.status(401).send({msg: "Unauthorized"});
    }
})

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[CookieName]);
    if (user) {
      DB.updateUser(user);
    }
    res.clearCookie(CookieName);
    res.status(204).end();
  });

const verifyAuth = async (req, res, next) => {
const user = await findUser('token', req.cookies[CookieName]);
if (user) {
    next();
} else {
    res.status(401).send({ msg: 'Unauthorized' });
}
};

apiRouter.get('/posts', verifyAuth, async (req, res) => {
    res.send(posts);
})

apiRouter.post('/post', verifyAuth, async (req, res) => {
    const {title, content, username} = req.body;
    if(!title || !content || !username){
        res.status(400).send('Empty fields are not allowed');
    }else{
        posts.unshift(req.body);
        res.send(req.body);
    }
})

apiRouter.get('/location', async (req, res) => {
    try{
        const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        const response = await fetch(`http://ip-api.com/json/${ip}`);
        const data = await response.json();
        res.send({city: data.city});
        // const response = {city: "Provo"};
        // res.send(response);
    }catch(error){
        res.status(500).send({ msg: "Could not fetch location"});
    }
})

app.get('/api/weather/:city', async (req, res) => {
    try{
        const location = req.params;
        const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location.city}&aqi=no`;
        const response = await fetch(url);
        const weather = await response.json();
        res.send(weather);
    }catch(error){
        res.status(500).send({ msg: error});
    }
})


function setAuthCookie(res, authToken){
    res.cookie(CookieName, authToken, {
        secure: true,
        httpOnly: true,
        sameSite: 'strict'
    });
}

async function createUser(username, password){
    const passHash = await bcrypt.hash(password, 10);
    const newUser = {
        username: username,
        password: passHash,
        token: uuid.v4()
    };
    await DB.addUser(newUser);
    return newUser;
}

async function findUser(field, value) {
    if (!value) return null;
  
    if (field === 'token') {
      return DB.getUserByToken(value);
    }
    return DB.getUser(value);
  }



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require('express');
const uuid = require("uuid");
const app = express();

const users = [];
const posts = []

const CookieName = "token";

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
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({username: user.username});
        }
    }else{
        res.status(401).send({msg: "Unauthorized"});
    }
})

apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[CookieName]);
    if (user) {
      delete user.token;
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
        posts.push(req.body);
        res.send(req.body);
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
    users.push(newUser);
    return newUser;
}

function findUser(field, value){
    if(!value) return null;
    return users.find((u) => u[field] === value)
}



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
const cookieParser = requier("cookie-parser");
const bcrypt = require("bcryptjs");
const express = require('express');
const uuid = require("uuid");
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

app.post("/auth/create", async (req, res) => {
    if(await findUser("username", req.body.username)){
        res.status(409).send({msg: "Existing User"});
    }else{
        const user = await createUser(req.body.username, req.body.password);
        setAuthCookie(res, user.token);
        res.send({username: user.username});
    }
})


function setAuthCookie(res, authToken){

}



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
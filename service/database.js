const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;

const client = new MongoClient(url);
const db = client.db('keepmeposted');
const userCollection = db.collection('users');
const postCollection = db.collection('posts');

(async function testConnection(){
    try{
        await db.command({ping: 1});
        consol.log("Connected to database");
    }catch(e){
        console.log(`Unable to connect to database with ${url} because ${e.message}`);
        process.exit(1);
    }
})


function getUser(username) {
    return userCollection.findOne({ username: username });
}

function getUserByToken(token){
    return userCollection.findOne({ token: token});
}

async function addUser(user){
    await userCollection.insertOne(user);
}

async function updateUser(user, uuid = null){
    if(uuid === null){
        await userCollection.updateOne({ username: user.username}, { $unset: {token: ""} });
    }else{
        await userCollection.updateOne({ username: user.username}, { $set: { token: uuid} });
    }
}

async function getPosts(){
    const posts = postCollection.find();
    return await posts.toArray();
}

async function addPost(post){
    await postCollection.insertOne(post);
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    getPosts,
    addPost
};
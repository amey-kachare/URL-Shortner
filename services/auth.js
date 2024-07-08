// const sessionIdToUserMap=new Map();
const jwt=require('jsonwebtoken')
require('dotenv/config')
const secret=process.env.SECRET_KEY;

//sends tocken as response
function setUser(user){
    if(user)
    return jwt.sign({
        id:user.id,
        email:user.email,
        role:user.role
    },secret);
}

//sends the json as response
function getUser(tocken){
    if(!tocken) return null;
    return jwt.verify(tocken,secret)
}

module.exports={
    setUser,
    getUser
}
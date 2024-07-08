const USER=require('../model/user')
const URL=require('../model/url')
// const {v4:uuidv4} =require('uuid')
const {setUser,getUser} = require('../services/auth');
const mongoose = require('mongoose');

async function handleCreateUser(req,res){
    const{name,email,password}=req.body;
    const result=await USER.create({
        name:name,
        email:email,
        password:password
    })
    return res.redirect('/');
}

async function handleGetUser(req,res){
    const{email,password}=req.body;
    // const sessionId=uuidv4()
    const user=await USER.findOne({ email , password })
    if(!user) (
        res.render('login',{
            error:"Invalid Username or Password"
        })
    )
    const token=setUser(user)
    res.cookie('token',token);
    return res.redirect('/');
}

module.exports={
    handleCreateUser,
    handleGetUser
}
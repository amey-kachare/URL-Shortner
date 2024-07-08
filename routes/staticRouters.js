const express=require('express')
const {restrictTo} = require('../middleware/auth')
const URL=require('../model/url')
const router=express.Router()

router.get('/',restrictTo(["NORMAL"]),async(req,res)=>{
    // if(!req.user) return res.redirect('/login')
    const userUrl=await URL.find({createdBy: req.user._id});
    return res.render('home',{
                name:req.user.name,
                urlcss:req.protocol+"://"+req.headers.host,
                urls:userUrl,
})
})
router.get('/signup',async(req,res)=>{
    return res.render('signup')
})
router.get('/login',async(req,res)=>{
    return res.render('login')
})

module.exports=router
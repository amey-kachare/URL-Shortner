const URL = require('../model/url');
const shortid = require('shortid');

async function handleCreateUrl(req,res){
    const body=req.body;
    const allUrls=await URL.find({});
    if(!body || !body.url) return res.status(400).json({"msg":"URL field is empty!"})
        const shortId=shortid()
    URL.create({
        shortId: shortId,
        redirectUrl: body.url,
        visitHistory:[],
        createdBy:req.user._id
    })
    return res.render('home',{id: shortId});
    // return res.status(201).json({id: shortId});
}

async function handleUrlAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId})
    return res.json({
        totalClicks:result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports={
    handleCreateUrl,
    handleUrlAnalytics
}
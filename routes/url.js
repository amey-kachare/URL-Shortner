const express=require('express')
const router=express.Router()
const {
    handleCreateUrl,
    handleUrlAnalytics
}=require('../controller/url')

router.post('/',handleCreateUrl)
router.get('/analytics/:shortId',handleUrlAnalytics)

module.exports=router
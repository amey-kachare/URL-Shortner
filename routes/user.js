const express=require('express')
const{handleCreateUser,handleGetUser}=require('../controller/user')
const router=express.Router()

router.post('/',handleCreateUser)
router.post('/login',handleGetUser)

module.exports=router
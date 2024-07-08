const mongoose=require('mongoose')

function connectDB(url){
    return mongoose.connect(url).then(()=>console.log("MongoDb connected"))
}

module.exports={connectDB}
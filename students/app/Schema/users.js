const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({//数据库数据格式
    username:String,
    password:String,
    age:Number
})

module.exports = mongoose.model("users",userSchema)
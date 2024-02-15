const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    dob: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    course: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
})

const users = mongoose.model("users",userSchema)

module.exports = users
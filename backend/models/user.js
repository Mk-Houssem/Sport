// import express module
const mongoose =require("mongoose");

//create User schema
const userSchema = mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    pwd:String,
    role:String,
    avatar:String
});

// Affect User Schema to Model Name User
const user=mongoose.model("User",userSchema);

// Make match exportable
module.exports=user;
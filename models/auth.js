const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name:String,
    cin:String,
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    pic:String,
    nomSalle:String,
    role:{type:String,enum:["admin","user","userApp"] ,default:"user"},
    
})

module.exports=mongoose.model("User",userSchema);
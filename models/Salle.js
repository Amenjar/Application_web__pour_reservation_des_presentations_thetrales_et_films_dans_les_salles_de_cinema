const mongoose = require("mongoose");


const SalleSchema = new mongoose.Schema({
    name:{type:String,required:true},
    desc:String,
    lieu:{type:String,required:'type'},
    pic:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema",required:true
    }
})
module.exports = mongoose.model("Salle",SalleSchema);
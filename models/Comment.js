const mongoose = require("mongoose");



const CommentSchema = new mongoose.Schema({
    body:String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userSchema",required:true
    },
    PubId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"PublicationSchema"
    }

})

module.exports = mongoose.model("Comment",CommentSchema);
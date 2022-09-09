

const CommentSchema = require("../models/Comment")


exports.addComment = async (req,res)=>{
    const {id} = req.params
    try {
        const Comment = new CommentSchema({...req.body,userId:req.user._id,PubId:req.params.id})
        res.status(200).send({msg:"comment added",Comment})
    } catch (error) {
        res.status(500).send('could not add comment')
    }
}
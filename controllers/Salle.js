
const userSchema = require("../models/auth");
const SalleSchema = require("../models/Salle")




exports.addSalle = async(req,res)=>{
    try {
        const Salle = new SalleSchema({...req.body,userId:req.user._id});
        await Salle.save();
        res.status(200).send({msg:"Salle added",Salle})
    } catch (error) {
        res.status(500).send('could not add Salle');
    }
}
exports.deleteSalle = async(req,res)=>{
    const {id} = req.params
    try {
        const SalleDeleted = await SalleSchema.findByIdAndDelete(id);
        res.status(200).send({msg:"salle deleted",SalleDeleted});
    } catch (error) {
        res.status(500).send('could not delete salle')
    }
}
exports.getSalle = async(req,res)=>{
    try {
        const listOfSalle = await SalleSchema.find();
        res.status(200).send({msg:"list of Salle",listOfSalle});
    } catch (error) {
        res.status(500).send('could not get Salle');
    }
}
exports.getOneSalle = async(req,res)=>{
    const {id}=req.params
    try {
        const salle = await SalleSchema.findById(id);
        res.status(200).send({msg:"get salle",salle});
    } catch (error) {
        res.status(500).send('could not get salle');
    }
}
exports.editSalle = async(req,res)=>{
    const {id} = req.params
    try {
        const useradmin = await userSchema.findById(req.user._id)
        if(useradmin.role==="admin"){
            const SalleUpdated = await SalleSchema.findByIdAndUpdate(id,{$set:{...req.body}});
            res.status(200).send({msg:"Salle Updated",SalleUpdated})
        }
        res.status(400).send('you are not authorizded to update Salle')
    } catch (error) {
        res.status(500).send('could not update Salle')
    }
}
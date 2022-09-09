const userSchema = require("../models/auth");
const PublicationSchema = require("../models/Publication");

exports.addPub = async (req, res) => {
  const { id } = req.params;
  try {
    const userapp = await userSchema.findById(req.user._id);

    if (userapp.role === "userApp") {
      const Pub = new PublicationSchema({
        ...req.body,
        userId: req.user._id,
        SalleId: req.params.id,
      });

      await Pub.save();
      res.status(200).send({ msg: "pub added", Pub });
    }
    res.status(400).send("you are not authorized to add pub");
  } catch (error) {
    res.status(500).send("could not add pub");
  }
};
exports.getPub = async (req, res) => {
  try {
    const listOfPublication = await PublicationSchema.find();
    res.status(200).send({ msg: "list of pub", listOfPublication });
  } catch (error) {
    res.status(500).send("could not get publication");
  }
};

exports.deletePub = async (req, res) => {
  const { id } = req.params;
  try {
    const pubdeleted = await PublicationSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "pub deleted", pubdeleted });
  } catch (error) {
    res.status(500).send("could not delete pub");
  }
};
exports.editPub = async (req, res) => {
  const { id } = req.params;
  try {
    const pubupdated = await PublicationSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "pub updated", pubupdated });
  } catch (error) {
    res.status(500).send("could not update Pub");
  }
};
exports.getonePub = async (req, res) => {
  const { id } = req.params;
  try {
    const onePub = await PublicationSchema.findById(id);
    res.status(200).send({ msg: "one pub", onePub });
  } catch (error) {
    res.status(500).send("could not get one pub");
  }
};

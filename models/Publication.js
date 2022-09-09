const mongoose = require("mongoose");

const PublicationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: String,
  picture: String,
  rate: String,
  nomSalle: String,
  nb_place: Number,
  date: { type: Date, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
  },
  SalleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SalleSchema",
  },
});
module.exports = mongoose.model("Publication", PublicationSchema);

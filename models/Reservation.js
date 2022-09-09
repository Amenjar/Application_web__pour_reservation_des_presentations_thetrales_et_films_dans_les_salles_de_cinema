const mongoose = require("mongoose");

const ResvSchema = new mongoose.Schema({
  nom: { type: String },
  num_cin: { type: String },
  etat: {
    type: String,
    enum: ["validé", "en attente", "non validé"],
    default: "en attente",
  },
  nameOfSalle: String,
  nomPost: String,
  mode_payement: { type: String, enum: ["en ligne", "en present"] },
  date: { type: Date },
  image: String,
  Prix: String,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userSchema",
    required: true,
  },
  PublicationId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PublicationSchema",
  },
});
module.exports = mongoose.model("Reservation", ResvSchema);

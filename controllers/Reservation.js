const ResvSchema = require("../models/Reservation");

exports.AddReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const newReservation = new ResvSchema({
      ...req.body,
      userId: req.user._id,
      PubId: req.params.id,
    });
    await newReservation.save();
    res.status(200).send({ msg: "add reservation", newReservation });
  } catch (error) {
    res.status(500).send("could not add reservation");
  }
};

exports.GetReservation = async (req, res) => {
  try {
    const Reservations = await ResvSchema.find();
    res.status(200).send({ msg: "list of reservations", Reservations });
  } catch (error) {
    res.status(500).send({ msg: "could not get reservations" });
  }
};
exports.editReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const ReservationUpdated = await ResvSchema.findByIdAndUpdate(id, {
      $set: { ...req.body },
    });
    res.status(200).send({ msg: "reservation updated", ReservationUpdated });
  } catch (error) {
    res.status(500).send("could not update reservation");
  }
};
exports.deletReservation = async (req, res) => {
  const { id } = req.params;
  try {
    const ReservationDeleted = await ResvSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "reservation deleted", ReservationDeleted });
  } catch (error) {
    res.status(500).send("could not delete reservation");
  }
};

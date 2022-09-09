const express = require("express");
const {
  AddReservation,
  editReservation,
  GetReservation,
  deletReservation,
} = require("../controllers/Reservation");
const { isAuth } = require("../middlewares/isAuth");
// const { ResvSchema } = require("../models/auth");

const ResvRoute = express.Router();

const stripe = require("stripe")(
  "sk_test_51KP35WGRHI01kI33YU2VdVYt8ECkYGIfnI3eB5AcBaz9ebNKCDeMEqIcJtEFSkiiugibvlJEuHpDVBdQE0urfgxV003oVR7BJi"
);

// const calculateOrderAmount = (items) => {
//   return 2000;
// };

ResvRoute.post("/create-payment-intent", async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1000,
    currency: "eur",

    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

ResvRoute.post("/addReservation/:id", isAuth, AddReservation);
ResvRoute.get("/", isAuth, GetReservation); // id mte3 post
ResvRoute.put("/updateReservation/:id", isAuth, editReservation);
ResvRoute.delete("/deleteReservation/:id", isAuth, deletReservation);

module.exports = ResvRoute;

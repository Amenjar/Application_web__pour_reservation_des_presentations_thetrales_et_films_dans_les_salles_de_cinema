const express = require("express");
const {
  addPub,
  getPub,
  deletePub,
  editPub,
  getonePub,
} = require("../controllers/Publication");
const { isAuth } = require("../middlewares/isAuth");

const PublicationRoute = express.Router();

PublicationRoute.post("/addPub/:id", isAuth, addPub);
PublicationRoute.get("/", getPub);
PublicationRoute.delete("/deletePub/:id", isAuth, deletePub);
PublicationRoute.put("/updatePub/:id", isAuth, editPub);
PublicationRoute.get("/:id", getonePub);

module.exports = PublicationRoute;

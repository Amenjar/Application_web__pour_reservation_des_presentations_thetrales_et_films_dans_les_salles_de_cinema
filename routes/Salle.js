const express = require("express");
const { addSalle, getSalle, deleteSalle, editSalle, getOneSalle } = require("../controllers/Salle");
const { isAuth } = require("../middlewares/isAuth");

const SalleRoute = express.Router();

SalleRoute.post("/addSalle",isAuth,addSalle);
SalleRoute.get("/getSalle",isAuth,getSalle);
SalleRoute.get("/:id",isAuth,getOneSalle);
SalleRoute.delete("/:id",isAuth,deleteSalle);
SalleRoute.put("/updateSalle/:id",isAuth,editSalle);







module.exports = SalleRoute;
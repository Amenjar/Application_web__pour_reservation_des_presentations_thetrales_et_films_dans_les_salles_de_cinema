const express = require("express");
const { SignUp, SignIn, AddUser, GetUser, deleteUser, GetOneUser, editUserApp } = require("../controllers/auth");
const { isAuth } = require("../middlewares/isAuth");
const { RegisterValidation, Validation, LoginValidation } = require("../middlewares/Register");

const authRoute = express.Router();

authRoute.post("/signUp",RegisterValidation,Validation,SignUp);
authRoute.post("/signIn",LoginValidation,Validation,SignIn);
authRoute.post("/adduserApp",RegisterValidation,Validation,AddUser);
authRoute.get("/userApp",isAuth,GetUser);
authRoute.get("/current", isAuth, (req, res) => res.send(req.user));
authRoute.delete("/deleteuser/:id",isAuth,deleteUser);
authRoute.put("/edituserApp/:id",isAuth,editUserApp)
authRoute.get("/userApp/:id",isAuth,GetOneUser);

module.exports=authRoute;
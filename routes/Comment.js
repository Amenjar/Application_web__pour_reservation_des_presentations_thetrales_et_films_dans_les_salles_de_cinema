const express = require("express");
const { addComment } = require("../controllers/comment");
const { isAuth } = require("../middlewares/isAuth");

const CommentRoute = express.Router();




CommentRoute.post("/addComment/:id",isAuth,addComment);





module.exports = CommentRoute;
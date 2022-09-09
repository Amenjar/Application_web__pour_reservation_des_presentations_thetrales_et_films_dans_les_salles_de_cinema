const express = require("express");
const ConnectDb = require("./config/ConnectDb");
const authRoute = require("./routes/auth");
const CommentRoute = require("./routes/Comment");
const PublicationRoute = require("./routes/Publication");
const ResvRoute = require("./routes/Reservation");

const SalleRoute = require("./routes/Salle");

require("dotenv").config();
const app= express();

app.use(express.json());
ConnectDb();
app.use("/api/User",authRoute);
app.use("/api/Salle",SalleRoute);
app.use("/api/Publication",PublicationRoute);
app.use("/api/Reservation",ResvRoute);
app.use("/api/Comment",CommentRoute);

app.listen(process.env.port,()=>console.log(`server is running on port:${process.env.port}`))
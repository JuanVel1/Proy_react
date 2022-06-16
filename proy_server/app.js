const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const { API_VERSION } = require("./config");
const userRoutes = require("./src/routes/user");
const cors = require("cors");
const  AuthRoutes  = require("./src/routes/user");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type,Accept,Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Method", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT,DELETE");
  next()
});
app.use(`/api/${API_VERSION}`, userRoutes);
app.use(`/api/${API_VERSION}`, AuthRoutes);

module.exports = app;

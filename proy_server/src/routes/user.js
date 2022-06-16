const express = require("express");
const UserController = require("../controllers/user");
const api = express.Router();
const middleware_user_authenticated = require("../middleware/authenticated_user");

api.post("/signUp", UserController.signUp);
api.post("/signIn", UserController.signIn);
api.get(
  "/users",
  [middleware_user_authenticated.ensureAuth],
  UserController.getUsers
);
api.get(
    "/active-users",
    [middleware_user_authenticated.ensureAuth],
    UserController.getActiveUsers
  );
  
module.exports = api;

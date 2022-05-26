const  express = require("express")
const UserController  = require("../controllers/user")
const api = express.Router()

api.post("/signUp",UserController.signUp)
api.post("/signIn",UserController.signIn)

module.exports = api
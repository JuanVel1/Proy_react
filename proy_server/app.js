const express = require("express")
const bodyparser  = require("body-parser")
const app= express()
const {API_VERSION}=require("./config")
const userRoutes = require("./src/routes/user")
const cors = require("cors")
const { AuthContext } = require("../proy_client/src/providers/authProvider")


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(`/api/${API_VERSION}`, userRoutes)
app.use(`/api/${API_VERSION}`, AuthContext)
app.use(cors)
app.use

module.exports = app
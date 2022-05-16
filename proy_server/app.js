const express = require("express")
const bodyparser  = require("body-parser")
const app= express()
const {API_VERSION}=require("./config")
const userRoutes = require("./src/routes/user")


app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(`/api/${API_VERSION}`, userRoutes)
module.exports = app
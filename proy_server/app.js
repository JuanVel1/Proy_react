const express = require("express")
const bodyparser  = require("body-parser")
const app= express()
const {API_VERSION}=require("./config")

app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())

module.exports = app
const express = require('express')
const router = express.Router()
const subjectsRouter = require('./subject')

const useApp = (app)=>{
    app.use('/api/v1', router)
    router.use('/subjects', subjectsRouter)
}

module.exports = useApp
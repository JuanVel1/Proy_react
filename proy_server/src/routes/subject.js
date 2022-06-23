const express = require("express");
const SubjectsController = require("../controllers/subjects");
const api = express.Router();

api.post('/createSubject', SubjectsController.createSubject)
api.get('/getSubject', SubjectsController.getSubject)
api.get('/filterNumPiaa/:numPiaa', SubjectsController.filterNumPiaa)
api.put('/updateSubject/:activitCyode', SubjectsController.updateSubject)
api.delete('/deleteSubject/:idSubject', SubjectsController.deleteSubject)
module.exports = api 
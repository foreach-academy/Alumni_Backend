const TypeCompetenceController = require('../Controllers/TypeCompetenceController');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => TypeCompetenceController.getAllTypeCompetence(req,res));

module.exports = router;
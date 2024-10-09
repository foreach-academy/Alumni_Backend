const CompetenceController = require('../Controllers/CompetenceController');
const express = require('express');
const router = express.Router();

router.get("/", (req,res) => CompetenceController.getAllCompetence(req,res));

module.exports = router;
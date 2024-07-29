const express = require('express');
const router = express.Router();
const CompteController = require('../Controllers/CompteControllers');


router.post('/create', (req, res) => CompteController.createAccountRequest(req, res));

module.exports = router;
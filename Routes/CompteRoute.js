const express = require('express');
const router = express.Router();
const CompteController = require('../Controllers/CompteControllers');


router.post('/', (req, res) => CompteController.createAccountRequest(req, res));

module.exports = router;
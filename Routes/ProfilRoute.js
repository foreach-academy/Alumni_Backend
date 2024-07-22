const express = require('express');
const router = express.Router();
const ProfilController = require('../Controllers/ProfilController');

router.post('/create', (req, res) => ProfilController.addProfil(req, res));

module.exports = router;

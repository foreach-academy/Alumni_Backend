const express = require('express');
const router = express.Router();
const UtilisateurController = require('../Controllers/UtilisateurController');

router.post('/create', (req, res) => UtilisateurController.addUtilisateur(req, res));

module.exports = router;
const express = require('express');
const router = express.Router();
const UtilisateurController = require('../Controllers/UtilisateurController');

router.post('/create', (req, res) => UtilisateurController.addUtilisateur(req, res));

router.patch('/validate/:id' ,(request, result) => UtilisateurController.validateUser(request,result));

module.exports = router;
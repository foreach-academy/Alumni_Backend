const express = require('express');
const router = express.Router();
const UtilisateurController = require('../Controllers/UtilisateurController');

router.post('/', (req, res) => UtilisateurController.addUtilisateur(req, res));
router.get('/pending', (req, res) => UtilisateurController.getPendingInscriptions(req, res));
router.patch('/validate/:id' ,(request, result) => UtilisateurController.validateUser(request,result));
router.delete('/refuse/:id', (request, result) => UtilisateurController.refuseUser(request, result));

module.exports = router;


module.exports = router;
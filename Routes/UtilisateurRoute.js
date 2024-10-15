const express = require('express');
const router = express.Router();
const UtilisateurController = require('../Controllers/UtilisateurController');

router.post('/', (req, res) => UtilisateurController.addUtilisateur(req, res));

router.get('/pending', (req, res) => UtilisateurController.getPendingInscriptions(req, res));

router.patch('/validate/:id' ,(request, result) => UtilisateurController.validateUser(request,result));

router.delete('/refuse/:id', (request, result) => UtilisateurController.refuseUser(request, result));

router.get('/:id', (req, res) => UtilisateurController.getUtilisateurByID(req, res));

router.get('/', (req, res) => UtilisateurController.getAllUtilisateur(req, res));

router.get('/:id/profil', (req, res) => UtilisateurController.getProfilByUtilisateur(req, res));

router.get('/profil/:id_profil', UtilisateurController.getUtilisateurByProfilId);

router.patch('/:id', UtilisateurController.updateUtilisateur);

module.exports = router;
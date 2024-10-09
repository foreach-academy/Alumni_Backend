const express = require('express');
const LiensController = require('../Controllers/LiensController');
const router = express.Router();

router.get('/profils/:id_profil/liens', LiensController.getAllLiensByProfil);

router.get('/profils/:id_profil/liens/:id', LiensController.getLienByProfilAndId);

router.post('/profils/:id_profil/liens', LiensController.createLien);

router.patch('/profils/:id_profil/liens/:id', LiensController.updateLien);

router.delete('/profils/:id_profil/liens/:id', LiensController.deleteLien);

module.exports = router;

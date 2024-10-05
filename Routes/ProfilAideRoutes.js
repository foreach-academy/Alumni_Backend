const express = require('express');
const router = express.Router();
const ProfilAideController = require('../Controllers/ProfilAideController');

router.get('/profil_aide', ProfilAideController.getAllProfilAide);

router.get('/profil_aide/:id_profil_aide', ProfilAideController.getProfilAideById);

router.post('/', ProfilAideController.addProfilAide);

router.put('/profil_aide/:id_profil_aide', ProfilAideController.updateProfilAide);

router.delete('/profil_aide/:id_profil_aide', ProfilAideController.deleteProfilAide);

router.get('/profils/:id_profil/profil_aide', ProfilAideController.getProfilAideByProfilId);


module.exports = router;

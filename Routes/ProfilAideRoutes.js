const express = require('express');
const router = express.Router();
const ProfilAideController = require('../Controllers/ProfilAideController');

// Route pour récupérer toutes les associations Profil-Aide
router.get('/profil_aide', ProfilAideController.getAllProfilAide);

// Route pour récupérer une association Profil-Aide par ID
router.get('/profil_aide/:id_profil_aide', ProfilAideController.getProfilAideById);

// Route pour ajouter une nouvelle association Profil-Aide
router.post('/', ProfilAideController.addProfilAide);

// Route pour mettre à jour une association Profil-Aide
router.put('/profil_aide/:id_profil_aide', ProfilAideController.updateProfilAide);

// Route pour supprimer une association Profil-Aide
router.delete('/profil_aide/:id_profil_aide', ProfilAideController.deleteProfilAide);

// Route pour récupérer toutes les aides d'un profil spécifique
router.get('/profils/:id_profil/profil_aide', ProfilAideController.getProfilAideByProfilId);


module.exports = router;

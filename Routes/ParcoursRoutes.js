const express = require('express');
const router = express.Router();
const ParcoursController = require('../Controllers/ParcoursController');

// // Route pour créer un parcours
// router.post('/parcours', ParcoursController.createParcours);

// Route pour récupérer un parcours par id_profil
router.get('/parcours/profil/:id_profil', ParcoursController.getParcoursByProfilId);

// Route pour mettre à jour un parcours
router.patch('/parcours/:id_parcours', ParcoursController.updateParcours);

module.exports = router;

const express = require('express');
const router = express.Router();
const ProfilCompetenceController = require('../Controllers/ProfilCompetenceController');

// Route pour récupérer toutes les compétences
router.get('/profil_competence', ProfilCompetenceController.getAllProfilCompetences);

// Route pour récupérer une compétence spécifique par l'ID du profil
router.get('/profil_competence/:id_profil', ProfilCompetenceController.getProfilCompetenceById);

// Route pour ajouter une nouvelle compétence à un profil
router.post('/profil_competence', ProfilCompetenceController.addProfilCompetence);

// Route pour mettre à jour une compétence spécifique par l'ID de la compétence
router.patch('/profil_competence/:id_profil_competence', ProfilCompetenceController.updateProfilCompetence);

// Route pour supprimer une compétence par l'ID de la compétence
// router.delete('/profil_competence/:id_competence', ProfilCompetenceController.deleteProfilCompetence);
router.delete('/profil/:id_profil/profil_competence/:id_profil_competence', ProfilCompetenceController.deleteProfilCompetence);

// Route pour récupérer toutes les compétences d'un profil spécifique
router.get('/profil/:id_profil/profil_competence', ProfilCompetenceController.getProfilCompetenceByProfilId);

module.exports = router;

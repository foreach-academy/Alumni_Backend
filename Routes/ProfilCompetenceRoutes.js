const express = require('express');
const router = express.Router();
const ProfilCompetenceController = require('../Controllers/ProfilCompetenceController');

// Route pour récupérer toutes les compétences
router.get('/profil_competences', ProfilCompetenceController.getAllCompetences);

// Route pour récupérer une compétence spécifique par l'ID du profil
router.get('/profil_competence/:id_profil', ProfilCompetenceController.getCompetenceById);

// Route pour ajouter une nouvelle compétence à un profil
router.post('/profil_competence', ProfilCompetenceController.addCompetence);

// Route pour mettre à jour une compétence spécifique par l'ID de la compétence
router.put('/profil_competence/:id_competence', ProfilCompetenceController.updateCompetence);

// Route pour supprimer une compétence par l'ID de la compétence
router.delete('/profil_competence/:id_competence', ProfilCompetenceController.deleteCompetence);

// Route pour récupérer toutes les compétences d'un profil spécifique
router.get('/profil/:id_profil/profil_competences', ProfilCompetenceController.getProfilAideByProfilId);

module.exports = router;

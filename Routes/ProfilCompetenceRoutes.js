const express = require('express');
const router = express.Router();
const ProfilCompetenceController = require('../Controllers/ProfilCompetenceController');

// Route pour récupérer toutes les compétences
router.get('/', ProfilCompetenceController.getAllProfilCompetences);

// Route pour récupérer une compétence spécifique par l'ID du profil
router.get('/:id_profil', ProfilCompetenceController.getProfilCompetenceById);

// Route pour ajouter une nouvelle compétence à un profil
router.post('/', ProfilCompetenceController.addProfilCompetence);

// Route pour mettre à jour une compétence spécifique par l'ID de la compétence
router.patch('/:id_competence', ProfilCompetenceController.updateProfilCompetence);

// Route pour supprimer une compétence par l'ID de la compétence
router.delete('/:id_competence', ProfilCompetenceController.deleteProfilCompetence);

// Route pour récupérer toutes les compétences d'un profil spécifique
router.get('/profil/:id_profil/profil_competences', ProfilCompetenceController.getProfilCompetenceByProfilId);

module.exports = router;

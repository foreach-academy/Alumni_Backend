const  ProfilCompetenceService = require('../Services/ProfilCompetenceService.js');

class ProfilCompetenceController {

    // Récupérer toutes les compétences
    async getAllCompetences(req, res) {
        try {
            const competences = await ProfilCompetenceService.getAllCompetence();
            res.status(200).json(competences);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Récupérer une compétence spécifique par l'ID du profil
    async getCompetenceById(req, res) {
        try {
            const { id_profil } = req.params;
            const competence = await ProfilCompetenceService.getCompetenceById(id_profil);
            if (!competence) {
                return res.status(404).json({ message: 'Compétence non trouvée' });
            }
            res.status(200).json(competence);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Ajouter une nouvelle compétence à un profil
    async addCompetence(req, res) {
        try {
            const { id_profil, id_competence } = req.body;
            const newCompetence = await ProfilCompetenceService.addCompetence(id_profil, id_competence);
            res.status(201).json(newCompetence);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Mettre à jour une compétence pour un profil
    async updateCompetence(req, res) {
        try {
            const { id_competence } = req.params;
            const updateData = req.body;
            const updatedCompetence = await ProfilCompetenceService.updateCompetence(id_competence, updateData);
            if (updatedCompetence[0] === 0) { // Aucun enregistrement mis à jour
                return res.status(404).json({ message: 'Compétence non trouvée ou non mise à jour' });
            }
            res.status(200).json({ message: 'Compétence mise à jour avec succès' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Supprimer une compétence par son ID
    async deleteCompetence(req, res) {
        try {
            const { id_competence } = req.params;
            const deleted = await ProfilCompetenceService.deleteProfilAide(id_competence);
            if (deleted) {
                res.status(200).json({ message: 'Compétence supprimée avec succès' });
            } else {
                res.status(404).json({ message: 'Compétence non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Récupérer les compétences d'un profil spécifique
    async getProfilAideByProfilId(req, res) {
        try {
            const { id_profil } = req.params;
            const profilAides = await ProfilCompetenceService.getProfilAideByProfilId(id_profil);
            res.status(200).json(profilAides);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProfilCompetenceController();

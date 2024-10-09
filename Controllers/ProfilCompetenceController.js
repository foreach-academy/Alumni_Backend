const  ProfilCompetenceService = require('../Services/ProfilCompetenceService');

class ProfilCompetenceController {

    // Récupérer toutes les compétences
    async getAllProfilCompetences(req, res) {
        try {
            const ProfilCompetences = await ProfilCompetenceService.getAllProfilCompetence();
            res.status(200).json(ProfilCompetences);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Récupérer une compétence spécifique par l'ID du profil
    async getProfilCompetenceById(req, res) {
        try {
            const { id_profil } = req.params;
            const ProfilCompetences = await ProfilCompetenceService.getProfilCompetenceById(id_profil);
            if (!ProfilCompetences) {
                return res.status(404).json({ message: 'Compétence non trouvée' });
            }
            res.status(200).json(ProfilCompetences);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Ajouter une nouvelle compétence à un profil
    async addProfilCompetence(req, res) {
        try {
            const { id_profil, id_competence } = req.body;
            console.log("Data received - id_profil:", id_profil, "id_competence:", id_competence);
            const newProfilCompetence = await ProfilCompetenceService.addProfilCompetence(id_profil, id_competence);
            res.status(201).json(newProfilCompetence);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    

    // Mettre à jour une compétence pour un profil
    async updateProfilCompetence(req, res) {
        try {
            const { id_competence } = req.params;
            const updateData = req.body;
            const updatedCompetence = await ProfilCompetenceService.updateProfilCompetence(id_competence, updateData);
            if (updatedCompetence[0] === 0) { // Aucun enregistrement mis à jour
                return res.status(404).json({ message: 'Compétence non trouvée ou non mise à jour' });
            }
            res.status(200).json({ message: 'Compétence mise à jour avec succès' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Supprimer une compétence par son ID
    async deleteProfilCompetence(req, res) {
        try {
            const { id_competence } = req.params;
            const deleted = await ProfilCompetenceService.deleteProfilCompetence(id_competence);
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
    async getProfilCompetenceByProfilId(req, res) {
        try {
            const { id_profil } = req.params;
            const profilCompetences = await ProfilCompetenceService.getProfilCompetenceByProfilId(id_profil);
            res.status(200).json(profilCompetences);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProfilCompetenceController();

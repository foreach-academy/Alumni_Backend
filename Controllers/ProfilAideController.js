const ProfilAideService = require('../Services/ProfilAideService');

class ProfilAideController {
    // Récupérer toutes les associations Profil-Aide
    async getAllProfilAide(req, res) {
        try {
            const profilAides = await ProfilAideService.getAllProfilAide();
            res.status(200).json(profilAides);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Récupérer une association Profil-Aide par son ID
    async getProfilAideById(req, res) {
        try {
            const { id_profil_aide, id_profil } = req.params;
            const profilAide = await ProfilAideService.getProfilAideById(id_profil_aide, id_profil);
            if (profilAide) {
                res.status(200).json(profilAide);
            } else {
                res.status(404).json({ message: 'Association Profil-Aide non trouvée' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Ajouter une nouvelle association Profil-Aide
    async addProfilAide(req, res) {
        try {
            const { id_profil, id_typeaide } = req.body;
            const newProfilAide = await ProfilAideService.addProfilAide(id_profil, id_typeaide);
            res.status(201).json(newProfilAide);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Mettre à jour une association Profil-Aide
    async updateProfilAide(req, res) {
        try {
            const { id_profil_aide } = req.params; // Récupère l'ID du paramètre d'URL
            const { id_typeaide } = req.body; // Récupère le champ à mettre à jour depuis le corps de la requête
    
            const profilAide = await ProfilAideService.findOne({
                where: { id_profil_aide: id_profil_aide }
            });
    
            if (!profilAide) {
                return res.status(404).json({ message: 'Profil aide non trouvé' });
            }
    
            const updatedProfilAide = await ProfilAideService.updateProfilAide(id_profil_aide, { id_typeaide });
    
            res.status(200).json(updatedProfilAide);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    

    async deleteProfilAide(req, res) {
        try {
            const { id_profil_aide } = req.params;
            await ProfilAideService.deleteProfilAide(id_profil_aide);
            res.status(200).json({ message: 'Association supprimée avec succès' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

     // Récupérer toutes les aides d'un profil spécifique
     async getProfilAideByProfilId(req, res) {
        try {
            const { id_profil } = req.params;
            const profilAide = await ProfilAideService.getProfilAideByProfilId(id_profil);
            if (profilAide) {
                res.status(200).json(profilAide);
            } else {
                res.status(404).json({ message: 'Aucune aide trouvée pour ce profil' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

module.exports = new ProfilAideController();

const ProfilService = require('../Services/ProfilService');
const path = require('path');

class ProfilController {
    
    async addProfil(req, res) {
        const { id_utilisateur, pr_nom, pr_prenom } = req.body;
        try {
            const newProfile = await ProfilService.addProfil({
                id_utilisateur,
                pr_nom,
                pr_prenom
            });
            return res.status(201).json(newProfile);
        } catch (error) {
            console.error('Erreur lors de la création du profil:', error);
            return res.status(500).json({ message: "Erreur lors de la création du profil" });
        }
    }

    async getAllProfils(req, res) {
        try {
            const profils = await ProfilService.getAllProfils();
            
            return res.status(200).json(profils);
            // return res.status(201).json(profils);
        } catch (error) {
            console.error('Erreur de récupération des profils:', error);
            return res.status(500).json({ message: "Erreur de récupération des profils" });
        }
    }

    async getProfilById(req, res) {
        const { id } = req.params;
        try {
            const profil = await ProfilService.getProfilById(id);

            if (!profil) {
                return res.status(404).json({ message: 'Profil non trouvé' });
            }

            return res.status(200).json(profil);
        } catch (error) {
            console.error('Erreur lors de la récupération du profil:', error);
            return res.status(500).json({ message: 'Erreur lors de la récupération du profil' });
        }
    }

    async uploadProfileImage(req, res) {
        try {
            const id_profil = req.params.id;
            const imagePath = req.file.path; // Chemin de l'image uploadée

            // Mettre à jour le profil avec le chemin de l'image
            const profil = await ProfilService.updateProfil(id_profil, { pr_imgprofil: imagePath });

            return res.status(200).json({ message: 'Image de profil mise à jour', profil });
        } catch (error) {
            console.error('Erreur lors du téléchargement de l\'image de profil:', error);
            return res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image de profil' });
        }
    }

    async updateProfil(req, res) {
        const { id } = req.params; // Récupérer l'ID du profil depuis les paramètres de la route
        console.log("Requête pour mise à jour du profil reçue", req.params.id);  
        
        const updateData = req.body; // Les nouvelles données envoyées dans la requête
        // console.log(req.body)

        try {
            // Appel du service pour mettre à jour le profil
            const updatedProfil = await ProfilService.updateProfil(id, updateData);

            // Si le profil n'est pas trouvé
            if (!updatedProfil) {
                return res.status(404).json({ message: 'Profil non trouvé' });
            }

            // Réponse avec les informations mises à jour
            return res.status(200).json({ message: 'Profil mis à jour avec succès', profil: updatedProfil });
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            return res.status(500).json({ message: 'Erreur lors de la mise à jour du profil' });
        }
    }
}

module.exports = new ProfilController();
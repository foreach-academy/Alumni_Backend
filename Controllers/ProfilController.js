<<<<<<< HEAD
const ProfilService = require('../Services/ProfilService');
const path = require('path');
=======
const ProfilService = require("../Services/ProfilService");
>>>>>>> d30078b (en cours)

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
<<<<<<< HEAD

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
=======
    
    async getAllProfil(request, result) {
        try {
            const profil = await ProfilService.getAllProfil(request, result);
            result.json(profil)
        } catch (error) {
            result.status(500)
            result.json({message : "Erreur lors de la récupération des profils"})
>>>>>>> d30078b (en cours)
        }
    }
}

module.exports = new ProfilController();



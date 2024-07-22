const ProfilService = require('../Services/ProfilService');

class ProfilController {
    
    async addProfil (req, res){
        const { id_utilisateur, pr_nom, pr_prenom } = req.body;
        try {
            const newProfile = await ProfilService.addProfil({
                id_utilisateur,
                pr_nom,
                pr_prenom
            });
            return res.status(201).json(newProfile);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la création du profil" });
        }
    }
}

module.exports = new ProfilController();

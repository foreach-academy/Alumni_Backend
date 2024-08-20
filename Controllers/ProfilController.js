class ProfilController {
    
    async addProfil (req, res) {
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

    async getProfilById(req, res) {
        const { id } = req.params;
        try {
            const profil = await ProfilService.getProfilById(id);

            if (!profil) {
                return res.status(404).json({ message: 'Profil non trouvé' });
            }

            return res.status(200).json(profil);
        } catch (error) {
            return res.status(500).json({ message: 'Erreur lors de la récupération du profil' });
        }
    }
}

module.exports = new ProfilController();

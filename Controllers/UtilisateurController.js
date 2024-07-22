const UtilisateurService = require('../Services/UtilisateurService');

class UtilisateurController {
    async addUtilisateur (req, res) {
        const { ut_email, ut_motdepasse, id_role } = req.body;
        try {
            const newUser = await UtilisateurService.addUtilisateur({
                ut_email,
                ut_motdepasse,
                ut_actif: false,
                ut_valide: false,
                id_role
            });
            return res.status(201).json(newUser);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
        }
    }
}

module.exports = new UtilisateurController();
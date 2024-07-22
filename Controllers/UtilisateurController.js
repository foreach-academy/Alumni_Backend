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

    async validateUser (request, result) {
        try {
            const user = UtilisateurService.updateUtilisateur(request.params.id, request.id)
            result.json(user)
            result.status(200)
            result.json({message : "Utilisateur/ice validé·e !"})
        } catch (error) {
            result.status(404)
            result.json({error : "Utilisateur/ice non trouvé·e"})
        }
    }
}

module.exports = new UtilisateurController();
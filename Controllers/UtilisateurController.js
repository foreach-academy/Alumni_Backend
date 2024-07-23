const UtilisateurService = require('../Services/UtilisateurService');

class UtilisateurController {
    async addUtilisateur(req, res) {
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

    async validateUser(request, result) {
        try {
            const user = await UtilisateurService.getUtilisateurByID(request.params.id);
            
            if (!user) {
                return result.status(404).json({ message: "Utilisateur/ice non trouvé·e !" });
            }

            if (user.ut_valide) {
                return result.status(400).json({ message: "Utilisateur/ice déjà validé·e !" });
            }

            const updatedUser = await UtilisateurService.updateUtilisateur(request.params.id, {
                ut_valide: true,
                ut_actif: true
            });

            return result.status(200).json({ message: "Utilisateur/ice validé·e !", user: updatedUser });
        } catch (error) {
            return result.status(500).json({ message: "Erreur lors de la validation de l'utilisateur/ice" });
        }
    }
}

module.exports = new UtilisateurController();

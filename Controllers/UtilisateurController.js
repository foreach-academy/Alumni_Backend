const { sendInscriptionValide } = require('../Services/MailerService'); // Importation de la fonction

class UtilisateurController {
    async addUtilisateur(request, result) {
        const { ut_email, ut_motdepasse, id_role, pr_prenom, pr_nom, type_formation, nom_promotion, en_nom_contact, en_fonction_contact } = request.body;
        try {
            const newUser = await UtilisateurService.addUtilisateur({
                ut_email,
                ut_motdepasse,
                ut_actif: false,
                ut_valide: false,
                id_role
            });

            const userDetails = {
                id_role,
                pr_prenom,
                pr_nom,
                ut_email,
                type_formation,
                nom_promotion,
                en_nom_contact,
                en_fonction_contact
            };
            
            return result.status(201).json(newUser);
        } catch (error) {
            return result.status(500).json({ message: "Erreur lors de la création de l'utilisateur" });
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

            await sendInscriptionValide(user.ut_email);

            return result.status(200).json({ message: "Utilisateur/ice validé·e !", user: updatedUser });
        } catch (error) {
            return result.status(500).json({ message: "Erreur lors de la validation de l'utilisateur/ice" });
        }
    }
}

module.exports = new UtilisateurController();

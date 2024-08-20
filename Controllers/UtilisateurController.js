const { sendInscriptionValide } = require('../Services/MailerService'); //
const UtilisateurService = require('../Services/UtilisateurService'); //

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
            const userId = request.params.id;

            const user = await UtilisateurService.getUtilisateurByID(userId);

            if (!user) {
                return result.status(404).json({ message: "Utilisateur/ice non trouvé·e !" });
            }

            if (user.ut_valide) {
                return result.status(400).json({ message: "Utilisateur/ice déjà validé·e !" });
            }

            const updatedUser = await UtilisateurService.updateUtilisateur(userId, {
                ut_valide: true,
                ut_actif: true
            });
            console.log('Utilisateur mis à jour:', updatedUser);

            await sendInscriptionValide(user.ut_email);

            return result.status(200).json({ message: "Utilisateur/ice validé·e !", user: updatedUser });
        } catch (error) {
            return result.status(500).json({ message: "Erreur lors de la validation de l'utilisateur/ice" });
        }
    }

    async refuseUser(request, result) {
        try {
            const userId = request.params.id;
            const { reason } = request.body;
    
            const user = await UtilisateurService.getUtilisateurByID(userId);
    
            if (!user) {
                return result.status(404).json({ message: "Utilisateur/ice non trouvé·e !" });
            }
    
            if (user.ut_valide) {
                return result.status(400).json({ message: "Impossible de refuser un compte déjà validé !" });
            }
    
            // Supprimer l'utilisateur ou mettre à jour son statut
            await UtilisateurService.deleteUtilisateur(userId);
    
            console.log(`Utilisateur refusé: ${user.ut_email} avec la raison: ${reason}`);
    
            // Optionnel : Envoi d'un email à l'utilisateur
            await sendInscriptionRefuse(user.ut_email, reason);
    
            return result.status(200).json({ message: "Utilisateur/ice refusé·e !" });
        } catch (error) {
            console.error("Erreur lors du refus de l'utilisateur :", error);
            return result.status(500).json({ message: "Erreur lors du refus de l'utilisateur/ice" });
        }
    }
    

    async getPendingInscriptions(req, res) {
        try {
            const pendingUsers = await UtilisateurService.getPendingUsers();
            return res.status(200).json(pendingUsers);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la récupération des inscriptions en attente." });
        }
    }
    
}

module.exports = new UtilisateurController();


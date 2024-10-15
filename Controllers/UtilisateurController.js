const { sendInscriptionValide } = require('../Services/MailerService');
const UtilisateurService = require('../Services/UtilisateurService');

class UtilisateurController {
    async addUtilisateur(request, result) {
        const { ut_email, ut_motdepasse, id_role } = request.body;
        try {
            const newUser = await UtilisateurService.addUtilisateur({
                ut_email,
                ut_motdepasse,
                ut_actif: false,
                ut_valide: false,
                id_role
            });

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
    
            await UtilisateurService.deleteUtilisateur(userId);
    
    
            await sendInscriptionRefuse(user.ut_email, reason);
    
            return result.status(200).json({ message: "Utilisateur/ice refusé·e !" });
        } catch (error) {
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
   
    async getUtilisateurByID(req, res) {
        try {
            const utilisateur = await UtilisateurService.getUtilisateurByID(req.params.id);
            if (!utilisateur) {
                return res.status(404).json({ message: "Utilisateur non trouvé" });
            }
            return res.status(200).json(utilisateur);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la récupération de l'utilisateur" });
        }
    }

    async getAllUtilisateur(req, res) {
        try {
            const utilisateurs = await UtilisateurService.getAllUtilisateur();
            return res.status(200).json(utilisateurs);
        } catch (error) {
            return res.status(500).json({ message: "Erreur lors de la récupération des utilisateurs" });
        }
    }

    async getProfilByUtilisateur(request, result) {
        const utilisateurID = request.params.id; // Récupérer l'ID de l'utilisateur à partir des paramètres de la requête
        
        try {
            // Appel du service pour obtenir l'utilisateur avec le profil associé
            const utilisateur = await UtilisateurService.getProfilByUtilisateurId(utilisateurID);
            if (!utilisateur || !utilisateur.profil) {
                return result.status(404).json({ message: "Utilisateur ou profil non trouvé" });
            }
            
            // Renvoie l'ID du profil
            return result.status(200).json({ id_profil: utilisateur.profil });
        } catch (error) {
            return result.status(500).json({ message: "Erreur lors de la récupération du profil de l'utilisateur" });
        }
    }

    async getUtilisateurByProfilId(req, res) {
        try {
            const { id_profil } = req.params;
            const utilisateur = await UtilisateurService.getUtilisateurByProfilId(id_profil);
            if (utilisateur) {
                res.status(200).json(utilisateur);
            } else {
                res.status(404).json({ message: 'Aucun utilisateur trouvé pour ce profil' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération des infos utilisateur', error });
        }
    };
    
    async updateUtilisateur(req, res) {
        const utilisateurID = req.params.id; // On récupère l'ID de l'utilisateur depuis les paramètres de la requête
        const utilisateurData = req.body; // On récupère les données de l'utilisateur depuis le corps de la requête
    
        try {
        // Appel au service pour mettre à jour l'utilisateur
        const updatedUtilisateur = await UtilisateurService.updateUtilisateur(utilisateurID, utilisateurData);
    
        // Vérifie si l'utilisateur a bien été mis à jour
        if (updatedUtilisateur[0] === 1) {
            return res.status(200).json({ message: "Utilisateur mis à jour avec succès" });
        } else {
            return res.status(404).json({ message: "Utilisateur non trouvé ou aucune modification détectée" });
        }
        } catch (error) {
        console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
        return res.status(500).json({ message: "Erreur serveur lors de la mise à jour de l'utilisateur" });
        }
    }

}

module.exports = new UtilisateurController();


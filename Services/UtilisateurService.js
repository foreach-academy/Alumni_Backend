const Utilisateur = require("../Models/Utilisateur");
const Profil = require("../Models/Profil")

class UtilisateurService {
    async addUtilisateur(utilisateur, options) {
        return await Utilisateur.create(utilisateur, options);
    }

    async getUtilisateurByID(utilisateurID) {
        try {
            return await Utilisateur.findByPk(utilisateurID);
        } catch (error) {
            console.error('Erreur dans getUtilisateurByID:', error);
            throw error;
        }
    }

    async getAllUtilisateur() {
        try {
            return await Utilisateur.findAll();
        } catch (error) {
            console.error('Erreur dans getAllUtilisateur:', error);
            throw error;
        }
    }
    async getProfilByUtilisateurId(utilisateurID) {
        try {
            const utilisateur = await Utilisateur.findByPk(utilisateurID, {
                include: {
                    model: Profil,
                    as : "profil"
                }
            });

            if (!utilisateur) {
                throw new Error('Utilisateur non trouvé');
            }

            return utilisateur;
        } catch (error) {
            console.error('Erreur dans getProfilByUtilisateurId:', error);
            throw error;
        }
    }
    async updateUtilisateur(utilisateurId, utilisateurData) {
        return await Utilisateur.update(utilisateurData, {
            where : {
                id_utilisateur : utilisateurId
            },
            individualHooks : true
        })
    }

    async getPendingUsers() {
        return await Utilisateur.findAll({
            where: {
                ut_valide: false
            }
        });
    }
    
    async deleteUtilisateur(utilisateurID) {
        return await Utilisateur.destroy({
            where: {
                id_utilisateur: utilisateurID
            }
        });
    }

    async getUtilisateurByProfilId(id_profil) {
        return await Utilisateur.findOne({ 
            where: { id_profil: id_profil }
         });
    }
}

    

module.exports = new UtilisateurService();
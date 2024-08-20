const Utilisateur = require("../Models/Utilisateur");

class UtilisateurService {
    async addUtilisateur(utilisateur, options) {
        return await Utilisateur.create(utilisateur, options);
    }

    async getUtilisateurByID(utilisateurID) {
        return await Utilisateur.findByPk(utilisateurID);
    }

    async updateUtilisateur(utilisateurID, utilisateur) {
        return await Utilisateur.update(utilisateur, {
            where : {
                id_utilisateur : utilisateurID
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
}

    

module.exports = new UtilisateurService();
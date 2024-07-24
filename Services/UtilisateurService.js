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
                utilisateurid : utilisateurID
            },
            individualHooks : true
        })
    }
}
    

module.exports = new UtilisateurService();
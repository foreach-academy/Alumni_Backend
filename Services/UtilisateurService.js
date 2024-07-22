const Utilisateur = require("../Models/Utilisateur");

class UtilisateurService {
    async addUtilisateur(utilisateur, options) {
        return await Utilisateur.create(utilisateur, options);
    }
}

module.exports = new UtilisateurService();
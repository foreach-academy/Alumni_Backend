const Utilisateur = require('../Models/Utilisateur');

class AuthenticateService {
    async login(ut_email, ut_motdepasse) {
        const utilisateur = await Utilisateur.findOne({ where: { ut_email } });

        if (!utilisateur || !await utilisateur.validatePassword(ut_motdepasse)) {
            throw new Error("Mauvais email ou mot de passe");
        }

        if (!utilisateur.valide) {
            throw new Error("Le compte doit être validé par un administrateur");
        }

        return utilisateur;
    }
}

module.exports = new AuthenticateService();
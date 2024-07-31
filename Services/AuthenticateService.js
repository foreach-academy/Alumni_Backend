const Utilisateur = require('../Models/Utilisateur');
const jwt = require('jsonwebtoken');
const config = require('../Config/Config.json');

class AuthenticateService {
    async login(ut_email, ut_motdepasse) {
        const utilisateur = await Utilisateur.findOne({ where: { ut_email } });

        if (!utilisateur || !await utilisateur.validatePassword(ut_motdepasse)) {
            throw new Error("Mauvais email ou mot de passe");
        }

        if (!utilisateur.ut_valide) {
            throw new Error("Le compte doit être validé par un administrateur");
        }

        const token = this.generateToken(utilisateur);
        return { utilisateur, token };
    }

    generateToken(utilisateur) {
        const payload = {
            id: utilisateur.id_utilisateur,
            email: utilisateur.ut_email
        };
        return jwt.sign(payload, config.SECRET, { expiresIn: '30d' });
    }

        
}

module.exports = new AuthenticateService();
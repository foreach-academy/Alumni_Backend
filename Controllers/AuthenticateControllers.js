const AuthenticateService = require("../Services/AuthenticateService");
const jwt = require('jsonwebtoken');
const config = require('../Config/Config.json');

class AuthenticateController {
    async login(request, result) {
        try {
            const { ut_email, ut_motdepasse } = request.body;

            if (!ut_email || !ut_motdepasse) {
                return result.status(401).json({ message: "Erreur d'authentification" });
            }
            const utilisateur = await AuthenticateService.login(ut_email, ut_motdepasse);
            result.json({token : AuthenticateService.generateToken(utilisateur)})
        } catch (error) {
            console.error("Erreur lors de la connexion :", error.message);
            result.status(500).json({ message: error.message });        }
    }

    authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Vous n'avez pas accès à cette route" });
        }

        jwt.verify(token, config.SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Votre token n'est pas valide" });
            }

            req.user = user;
            next();
        });
    }
}

module.exports = new AuthenticateController();
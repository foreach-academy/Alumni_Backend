const AuthenticateService = require("../Services/AuthenticateService");

class AuthenticateController {
    async login(request, result) {
        try {
            const { ut_email, ut_motdepasse } = request.body;

            if (!ut_email || !ut_motdepasse) {
                return result.status(401).json({ message: "Erreur d'authentification" });
            }

            const utilisateur = await AuthenticateService.login(ut_email, ut_motdepasse);
            result.status(200).json({ message: "Connexion réussie"});
        } catch (error) {
            result.status(401).json({ message: error.message });
        }
    }
}

module.exports = new AuthenticateController();
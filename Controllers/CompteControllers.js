const bcrypt = require('bcrypt');
const Utilisateur = require('../Models/Utilisateur');
const Formation = require('../Models/Formation');
const Promotion = require('../Models/Promotion');
const sequelize = require('../Config/Sequelize');
const UtilisateurService = require('../Services/UtilisateurService');
const ProfilService = require('../Services/ProfilService');
const ParcoursService = require('../Services/ParcoursService');
const mailer = require ('../Services/MailerService')



class CompteController {
    async createAccountRequest(req, res) {
        const { id_role, nom, prenom, email, motdepasse, id_formation, id_promotion } = req.body;

        try {
            if (id_role == 1) {
                return res.status(401).json({ message: "Vous ne pouvez pas demander ce rôle" });
            }

            const utilisateurExistant = await Utilisateur.findOne({ where: { ut_email: email } });

            if (utilisateurExistant) {
                return res.status(401).json({ message: utilisateurExistant.ut_valide ? "L'utilisateur existe déjà !" : "Requête déjà en attente" });
            }

            const formation = await Formation.findByPk(id_formation);
            const promotion = await Promotion.findByPk(id_promotion);

            if (!formation || !promotion) {
                return res.status(401).json({ message: "La promotion n'existe pas !" });
            }

            const hashedPassword = await bcrypt.hash(motdepasse, 10);
            
            const t = await sequelize.transaction();

            try {
                const newUser = await UtilisateurService.addUtilisateur({
                    ut_email: email,
                    ut_motdepasse: hashedPassword,
                    ut_actif: false,
                    ut_valide: false,
                    id_role
                }, { transaction: t });

                const newProfile = await ProfilService.addProfil({
                    id_utilisateur: newUser.id_utilisateur,
                    pr_nom: nom,
                    pr_prenom: prenom
                }, { transaction: t });

                await ParcoursService.addParcours({
                    id_profil: newProfile.id_profil,
                    id_promotion,
                    id_formation
                }, { transaction: t });
                await sendDemandeInscription(userDetails);
                await t.commit();
                return res.status(200).json({ message: "Requête envoyée !" });
                
            } catch (error) {
                console.log(error);
                await t.rollback();
                return res.status(500).json({ message: "Erreur lors de la création du compte !" });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: "Erreur lors de la création du compte eee" });
        }
    }
}

module.exports = new CompteController();
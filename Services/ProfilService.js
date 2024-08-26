const Profil = require('../Models/Profil');
const Utilisateur = require('../Models/Utilisateur');
const Liens = require('../Models/Liens');
const Competence = require('../Models/Competence');

class ProfilService {
    async getProfilById(id) {
        try {
            const profil = await Profil.findOne({
                where: { id_profil: id },
                include: [
                    {
                        model: Utilisateur,
                        attributes: ['ut_email', 'id_role']
                    },
                    {
                        model: Liens,
                        attributes: ['li_linkedin', 'li_github', 'li_perso']
                    },
                    {
                        model: Competence,
                        attributes: ['nom_competence'],
                        through: { attributes: [] }
                    }
                ]
            });
            return profil;
        } catch (error) {
            throw error; 
        }
    }

    async getAllProfil() {
        try {
            const profils = await Profil.findAll({
                include: [
                    {
                        model: Utilisateur,
                        attributes: ['ut_email', 'id_role']
                    },
                    {
                        model: Liens,
                        attributes: ['li_linkedin', 'li_github', 'li_perso']
                    },
                    {
                        model: Competence,
                        attributes: ['nom_competence'],
                        through: { attributes: [] }
                    }
                ]
            });
            return profils;
        } catch (error) {
            throw error;
        }
    }
    
    async addProfil(profilData, options = {}) {
        try {
            const newProfil = await Profil.create(profilData, options);
            return newProfil;
        } catch (error) {
            throw error;
        }
    }

    async updateProfil(id, updateData) {
        try {
            // Trouver le profil par son ID
            const profil = await this.getProfilById(id);
            if (!profil) {
                throw new Error('Profil non trouvé');
            }

            // Mettre à jour le profil avec les nouvelles données
            Object.assign(profil, updateData);
            await profil.save();

            return profil;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProfilService();


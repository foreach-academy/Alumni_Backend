const Profil = require('../Models/Profil');
const Utilisateur = require('../Models/Utilisateur');
const liens = require('../Models/Liens');
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
                        model: liens,
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

    async getAllProfils() {
        try {
            const profils = await Profil.findAll({
                include: [
                    {
                        model: Utilisateur,
                        attributes: ['ut_email', 'id_role']
                    },
                    {
                        model: liens,
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
            const profil = await Profil.findByPk(id);
            if (!profil) {
                throw new Error('Profil non trouvé');
            }
    
            await profil.update(updateData);
    
            return profil;
        } catch (error) {
            console.error('Erreur lors de la mise à jour du profil:', error);
            throw error; 
        }
    }

}

module.exports = new ProfilService();


const Competence = require('../Models/Competence');
const ProfilCompetence = require('../Models/ProfilCompetence');

class ProfilCompetenceService {
    async getAllProfilCompetence() {
        return await ProfilCompetence.findAll();
    }

    async getProfilCompetenceById(id_profil_competence) {
        return await ProfilCompetence.findByPk(id_profil_competence);
    }

    async addProfilCompetence(id_profil, id_competence, ) {
        return await ProfilCompetence.create({
            id_competence: id_competence,
            id_profil: id_profil
        });
    }
    

    async updateProfilCompetence(id_profil_competence, updateData) {
        return await ProfilCompetence.update(updateData, {
            where: { id_profil_competence: id_profil_competence }
        });
    }

    async deleteProfilCompetence(id_profil, id_profil_competence) {
        return await ProfilCompetence.destroy({
            where: { 
                id_profil: id_profil, 
                id_profil_competence: id_profil_competence 
            }
        });
    }
    

    // Récupérer une association Profil-competence par ID de profil
    async getProfilCompetenceByProfilId(id_profil) {
        return await ProfilCompetence.findAll({
            where: { id_profil: id_profil },
            include: [{ model: Competence }]
        });
}

}

module.exports = new ProfilCompetenceService();

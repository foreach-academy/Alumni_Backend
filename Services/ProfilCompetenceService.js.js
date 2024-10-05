const Competence = require('../Models/Competence');

class CompetenceService {
    async getAllCompetence() {
        return await Competence.findAll();
    }

    async getCompetenceById(id_profil_competence) {
        return await Competence.findByPk(id_profil_competence);
    }

    async addCompetence(id_competence, id_profil ) {
        return await Competence.create({
            id_competence: id_competence,
            id_profil: id_profil
        });
    }

    async updateCompetence(id_competence, updateData) {
        return await ProfilAide.update(updateData, {
            where: { id_competence: id_competence }
        });
    }

    async deleteProfilAide(id_competence) {
            return await Competence.destroy(id_competence);
    }

    // Récupérer une association Profil-Aide par ID de profil
    async getProfilAideByProfilId(id_profil) {
        return await Competence.findAll({
            where: { id_profil: id_profil }
        });
}

}

module.exports = new CompetenceService();

const Formation = require ('../Models/Formation');

class FormationService {

    async getAllFormation(){
        return await Formation.findAll();
    }

    async getFormationByID(formationID){
        return await Formation.findByPk(formationID)
    }

    async addFormation(formationData) {
        return await Formation.create(formationData);
    }

    async updateFormation(formationID, formationData) {
        return await Formation.update(formationData, {
            where: { id_formation: formationID }
        });
    }
}

module.exports = new FormationService();
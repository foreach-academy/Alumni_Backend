const Formation = require ('../Models/Formation');

class FormationService {

    async getAllFormation(){
        return await Formation.findAll();
    }

    async getFormationByID(formationID){
        return await Formation.findByPk(formationID)
    }
}

module.exports = new FormationService();
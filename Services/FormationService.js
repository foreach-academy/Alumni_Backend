const Formation = require ('../Models/Formation');

class FormationService {

    async getAllFormation(){
        return await Formation.findAll();
    }
}

module.exports = new FormationService();
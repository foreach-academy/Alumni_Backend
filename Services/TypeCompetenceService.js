const TypeCompetence = require('../Models/TypeCompetence');

class TypeCompetenceService{
    async getAllTypeCompetence(){
        return await TypeCompetence.findAll()
    }
}

module.exports= new TypeCompetenceService();
const Competence = require('../Models/Competence');

class CompetenceService{
    async getAllCompetence(){
        return await Competence.findAll()
    }
}

module.exports= new CompetenceService();
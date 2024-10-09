const CompetenceService = require('../Services/CompetenceService');

class CompetenceController{
    async getAllCompetence(request,result){
        try {
            const Competence = await CompetenceService.getAllCompetence()
            result.json(Competence)
        } catch (error) {
            result.statut(500)
            result.json({ error : "Une erreur est survenue lors de la récupération des compétences."})
        }
    }
}
module.exports= new CompetenceController();
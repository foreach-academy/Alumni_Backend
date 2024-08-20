const TypeCompetenceService = require('../Services/TypeCompetenceService');

class TypeCompetenceController{
    async getAllTypeCompetence(request,result){
        try {
            const typeCompetence = await TypeCompetenceService.getAllTypeCompetence()
            result.json(typeCompetence)
        } catch (error) {
            result.statut(500)
            result.json({ error : "Une erreur est survenue lors de la récupération des compétences."})
        }
    }
}
module.exports= new TypeCompetenceController();
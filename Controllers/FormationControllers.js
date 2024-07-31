const FormationService = require ('../Services/FormationService');

class FormationController{
    async getAllFormation(request, result){
    try {
        const formation = await FormationService.getAllFormation()
        result.json(formation)
    } catch (error) {
        result.status(500)
        result.json({ error : "Une erreur est survenue lors de la récupération des formations."})
    }
}

    async getFormationByID(request, result){
        try {
            const formation = await FormationService.getFormationByID(request.params.id)
            result.json(formation)
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la recupération de la formation"})
        }
    }
}
module.exports = new FormationController();
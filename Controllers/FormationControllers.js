const FormationService = require ('../Services/FormationService');

class FormationController{
    async getAllFormation(request, result){
    try {
        const formation = await FormationService.getAllFormation()
        result.json(formation)
    } catch (error) {
        result.status(500)
        result.json({ error : "Une erreur est survenue lors de la récupération de formation."})
    }
}
}
module.exports = new FormationController();
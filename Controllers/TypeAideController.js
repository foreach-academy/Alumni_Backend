const TypeAideService = require('../Services/TypeAideService');

class TypeAideController{
    async getAllTypeAide(request,result){
        try {
          const typeAide = await TypeAideService.getAllTypeAide()
          result.json(typeAide)
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la récupération du type aide."})
        }
    }
}
module.exports = new TypeAideController();
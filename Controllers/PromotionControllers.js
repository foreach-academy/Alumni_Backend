const PromotionService = require('../Services/PromotionService')

class PromotionController{
    async getAllPromotion(request, result){
        try {
            const promotion = await PromotionService.getAllPromotion()
            result.json(promotion);
        } catch (error) {
            result.status(500)
            result.json({ error : "Une erreur est survenue lors de la récupération de promotion."});
        }
    }
}
module.exports= new PromotionController();
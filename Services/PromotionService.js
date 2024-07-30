const Promotion = require('../Models/Promotion');

class PromotionService {
    async getAllPromotion() {
        return await Promotion.findAll()
    }

    async getPromotionByID(promotionID){
        return await Promotion.findByPk(promotionID)
    }
}

module.exports= new PromotionService();
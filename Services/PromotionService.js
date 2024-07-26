const Promotion = require('../Models/Promotion');

class PromotionService {
    async getAllPromotion() {
        return await Promotion.findAll()
    }
}

module.exports= new PromotionService();
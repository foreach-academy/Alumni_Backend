const TypeAide = require('../Models/TypeAide');

class TypeAideService{

    async getAllTypeAide(){
        return await TypeAide.findAll();
    }
}

module.exports = new TypeAideService();
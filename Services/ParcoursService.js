const Parcours = require("../Models/Parcours");

class ParcoursService {
    async addParcours(parcours, options) {
        return await Parcours.create(parcours, options);
    }
}

module.exports = new ParcoursService();
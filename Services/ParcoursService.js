const Formation = require("../Models/Formation");
const Parcours = require("../Models/Parcours");

class ParcoursService {
    async addParcours(parcours, options) {
        return await Parcours.create(parcours, options);
    }

    async getParcoursByProfilId(id_profil) {
        return await Parcours.findOne({ 
            where: { id_profil },
            include: [{ model: Formation }]
         });
    }

    async updateParcours(id_parcours, updatedData) {
        return await Parcours.update(updatedData, { where: { id_parcours : id_parcours } });
    }
}

module.exports = new ParcoursService();
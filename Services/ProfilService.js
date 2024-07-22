const Profil = require("../Models/Profil");

class ProfilService {
    async addProfil(profil, options) {
        return await Profil.create(profil, options);
    }
}

module.exports = new ProfilService();
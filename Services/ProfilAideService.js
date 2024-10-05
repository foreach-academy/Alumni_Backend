const ProfilAide = require('../Models/ProfilAide');

class ProfilAideService {
    // Récupérer toutes les associations Profil-Aide
    async getAllProfilAide() {
        return await ProfilAide.findAll();
    }

    // Récupérer une association Profil-Aide par son ID
    async getProfilAideById(id_profil_aide, id_profil) {
        return await ProfilAide.findByPk(id_profil_aide, id_profil);
    }

    // Ajouter une association Profil-Aide
    async addProfilAide(id_profil, id_typeaide) {
        return await ProfilAide.create({
            id_profil: id_profil,
            id_typeaide: id_typeaide
        });
    }

    async updateProfilAide(id_profil_aide, updateData) {
        return await ProfilAide.update(updateData, {
            where: { id_profil_aide: id_profil_aide }
        });
    }

    // Supprimer une association Profil-Aide par son ID
    async deleteProfilAide(id_profil_aide) {
        const profilAide = await ProfilAide.findByPk(id_profil_aide);
        if (profilAide) {
            await profilAide.destroy();
            return { message: 'Association supprimée avec succès' };
        }
        throw new Error('Association Profil-Aide non trouvée');
    }
    // Récupérer une association Profil-Aide par ID de profil
    async getProfilAideByProfilId(id_profil) {
        return await ProfilAide.findAll({
            where: { id_profil: id_profil }
        });
}

}

module.exports = new ProfilAideService();

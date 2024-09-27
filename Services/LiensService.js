const Liens = require('../Models/Liens');

const LiensService = {
    // Récupérer tous les liens d'un profil spécifique
    async getAllLiensByProfil(id_profil){
        return await Liens.findAll({
            where: { id_profil }  // Récupérer les liens pour un profil donné
        });
    },

    // Récupérer un lien spécifique par son ID et son profil
    async getLienByProfilAndId(id, id_profil){
        return await Liens.findOne({
            where: {
                id_lien: id,
                id_profil: id_profil  // Vérifier que le lien appartient bien à ce profil
            }
        });
    },

    // Créer un nouveau lien pour un profil spécifique
    async createLien(data, id_profil){
        return await Liens.create({
            ...data,       // Inclure les données du lien (li_linkedin, li_github, etc.)
            id_profil      // Associer l'ID du profil au nouveau lien
        });
    },

    // Mettre à jour un lien existant d'un profil spécifique
    async updateLien(id, data, id_profil){
        return await Liens.update(data, {
            where: {
                id_lien: id,
                id_profil: id_profil   // Vérifier que le lien appartient bien à ce profil
            }
        });
    },
    

    // Supprimer un lien d'un profil spécifique
    async deleteLien(id, id_profil){
        return await Liens.destroy({
            where: {
                id_lien: id,
                id_profil: id_profil  // Vérifier que le lien appartient bien à ce profil
            }
        });
    },
};

module.exports = LiensService;

const Utilisateur = require('../Models/Utilisateur');
const Profil = require('../Models/Profil');

Utilisateur.hasOne(Profil, { foreignKey: 'id_utilisateur' });
Profil.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' });

module.exports = {
    Utilisateur,
    Profil,
};
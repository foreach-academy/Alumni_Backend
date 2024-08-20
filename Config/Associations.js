const Utilisateur = require('../Models/Utilisateur');
const Profil = require('../Models/Profil');
const Liens = require('../Models/Liens');
const Competences = require('../Models/Competence');

// Association entre Utilisateur et Profil
Utilisateur.hasOne(Profil, { foreignKey: 'id_utilisateur' });
Profil.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' });

// Association entre Profil et Liens
Profil.belongsTo(Liens, { foreignKey: 'id_lien' });
Liens.hasOne(Profil, { foreignKey: 'id_lien' });

// Association many-to-many entre Profil et Competences
Profil.belongsToMany(Competences, { through: 'Profil_Competence', foreignKey: 'id_profil' });
Competences.belongsToMany(Profil, { through: 'Profil_Competence', foreignKey: 'id_competence' });

module.exports = {
    Utilisateur,
    Profil,
    Liens,
    Competences,
};



const Utilisateur = require('../Models/Utilisateur');
const Profil = require('../Models/Profil');
const Liens = require('../Models/Liens');
const Competences = require('../Models/Competence');
const TypeAide = require('../Models/TypeAide');
const ProfilAide = require('../Models/ProfilAide');

// Association entre Utilisateur et Profil
Utilisateur.belongsTo(Profil, { foreignKey: 'id_profil', as: 'profil' });
Profil.hasOne(Utilisateur, { foreignKey: 'id_profil' });

// Association entre Profil et Liens
Profil.belongsTo(Liens, { foreignKey: 'id_lien' });
Liens.hasOne(Profil, { foreignKey: 'id_lien' });
// Profil.hasMany(Liens, { foreignKey: 'id_profil' });
// Liens.belongsTo(Profil, { foreignKey: 'id_profil' });


// Association many-to-many entre Profil et Competences
Profil.belongsToMany(Competences, { through: 'Profil_Competence', foreignKey: 'id_profil' });
Competences.belongsToMany(Profil, { through: 'Profil_Competence', foreignKey: 'id_competence' });

// Association many-to-many entre Profil et TypeAide via ProfilAide
Profil.belongsToMany(TypeAide, { through: ProfilAide, foreignKey: 'id_profil' });
TypeAide.belongsToMany(Profil, { through: ProfilAide, foreignKey: 'id_typeaide' });

module.exports = {
    Utilisateur,
    Profil,
    Liens,
    Competences,
    TypeAide,
    ProfilAide
};



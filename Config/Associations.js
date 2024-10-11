const Utilisateur = require('../Models/Utilisateur');
const Profil = require('../Models/Profil');
const Liens = require('../Models/Liens');
const Competence = require('../Models/Competence');
const TypeAide = require('../Models/TypeAide');
const ProfilAide = require('../Models/ProfilAide');
const ProfilCompetence = require('../Models/ProfilCompetence');

// Association entre Utilisateur et Profil
Utilisateur.belongsTo(Profil, { foreignKey: 'id_profil', as: 'profil' });
Profil.hasOne(Utilisateur, { foreignKey: 'id_profil' });

// Association entre Profil et Liens
Profil.belongsTo(Liens, { foreignKey: 'id_lien' });
Liens.hasOne(Profil, { foreignKey: 'id_lien' });
// Profil.hasMany(Liens, { foreignKey: 'id_profil' });
// Liens.belongsTo(Profil, { foreignKey: 'id_profil' });


// Association many-to-many entre Profil et Competences
Profil.belongsToMany(Competence, { through: 'Profil_Competence', foreignKey: 'id_profil' });
Competence.belongsToMany(Profil, { through: 'Profil_Competence', foreignKey: 'id_competence' });

// Association many-to-many entre Profil et TypeAide
Profil.belongsToMany(TypeAide, { through: ProfilAide, foreignKey: 'id_profil' });
TypeAide.belongsToMany(Profil, { through: ProfilAide, foreignKey: 'id_typeaide' });



module.exports = {
    Utilisateur,
    Profil,
    Liens,
    Competence,
    TypeAide,
    ProfilAide,
    ProfilCompetence
    
};



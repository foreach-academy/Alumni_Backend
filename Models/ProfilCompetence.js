const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Profil = require('./Profil');
const Competence = require('./Competence');

class ProfilCompetence extends Model {}

ProfilCompetence.init({
    id_profil_competence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Profil,
            key: 'id_profil'
        }
    },
    id_competence: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Competence,
            key: 'id_competence'
        }
    }
}, {
    sequelize,
    modelName: 'ProfilCompetence',
    tableName: 'profil_competence',
    timestamps: false,
});


// Association Profil-Competence via ProfilCompetence (Many-to-Many)
Profil.belongsToMany(Competence, { through: "ProfilCompetence", foreignKey: 'id_profil'});
Competence.belongsToMany(Profil, { through: "ProfilCompetence", foreignKey: 'id_competence'});

// Relations one-to-many entre Profil et ProfilCompetence
Profil.hasMany(ProfilCompetence, { foreignKey: 'id_profil' });
ProfilCompetence.belongsTo(Profil, { foreignKey: 'id_profil' });

// Relations one-to-many entre Competence et ProfilCompetence
Competence.hasMany(ProfilCompetence, { foreignKey: 'id_competence'});
ProfilCompetence.belongsTo(Competence, { foreignKey: 'id_competence' });


module.exports = ProfilCompetence;

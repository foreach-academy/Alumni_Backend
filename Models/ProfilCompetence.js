const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class ProfilCompetence extends Model{

}

ProfilCompetence.init({
    id_profil_competence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_competence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profil: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ProfilCompetence',
    tableName: 'profil_competence',
    timestamps: false,
});

module.exports= ProfilCompetence;
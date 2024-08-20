const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const TypeCompetence = require('./TypeCompetence');

class Competence extends Model {}

Competence.init({
    id_competence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_competence: {
        type: DataTypes.STRING,
        allowNull: false
    },
    id_type_competence: {
        type: DataTypes.INTEGER,
        references: {
            model: TypeCompetence, 
            key: 'id_typecom'
        },
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Competence',
    tableName: 'competence',
    timestamps: false
});

module.exports = Competence;

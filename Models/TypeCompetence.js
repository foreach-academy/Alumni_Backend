const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class TypeCompetence extends Model {}

TypeCompetence.init({
    id_type_competence: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type_competence: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'TypeCompetence',
    tableName: 'type_competence',
    timestamps: false
});


module.exports = TypeCompetence;

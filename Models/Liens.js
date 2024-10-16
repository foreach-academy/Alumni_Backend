const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Liens extends Model {}

Liens.init({
    id_lien: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    li_linkedin: {
        type: DataTypes.STRING,
        allowNull: true
    },
    li_github: {
        type: DataTypes.STRING,
        allowNull: true
    },
    li_perso: {
        type: DataTypes.STRING,
        allowNull: true
    },
    id_profil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'Liens',
    tableName: 'liens',
    timestamps: false
});


module.exports = Liens;
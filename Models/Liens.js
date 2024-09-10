const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Lien extends Model {}

Lien.init({
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
    }
}, {
    sequelize,
    modelName: 'lien',
    tableName: 'lien',
    timestamps: false
});


module.exports = Lien;
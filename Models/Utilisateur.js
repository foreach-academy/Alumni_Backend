const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');


class Utilisateur extends Model {}

Utilisateur.init({
    id_utilisateur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ut_email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ut_motdepasse: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ut_actif: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ut_valide: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    id_role: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'utilisateur',
    tableName: 'utilisateur',
    timestamps: false,
});

module.exports = Utilisateur;

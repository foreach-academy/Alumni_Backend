const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Utilisateur = require('./Utilisateur');

class Profil extends Model {}

Profil.init({
    id_profil: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_utilisateur: {
        type: DataTypes.INTEGER,
        references: {
            model: Utilisateur,
            key: 'id_utilisateur'
        },
        allowNull: false
    },
    id_imgprofil: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pr_entreprise: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pr_liens: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pr_tel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pr_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    pr_nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pr_prenom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    recherche: {
        type: DataTypes.ENUM('stage', 'alternance', 'premier emploi', 'emploi'),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'profil',
    tableName: 'profil',
    timestamps: false,
});


Profil.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' });

module.exports = Profil;

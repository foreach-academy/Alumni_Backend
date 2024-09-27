const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Utilisateur = require('./Utilisateur');
const liens = require('./Liens');

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
    id_lien: {
        type: DataTypes.INTEGER,
        references: {
            model: liens,
            key: 'id_lien'
        },
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
    pr_description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    pr_tel: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pr_entreprise: {
        type: DataTypes.STRING,
        allowNull: true
    },
    recherche: {
        type: DataTypes.ENUM('stage', 'alternance', 'premier emploi', 'emploi'),
        allowNull: true
    },
    pr_imgprofil: { 
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Profil',
    tableName: 'profil',
    timestamps: false
});


Profil.belongsTo(Utilisateur, { foreignKey: 'id_utilisateur' });
Profil.belongsTo(liens, { foreignKey: 'id_lien' });

module.exports = Profil;

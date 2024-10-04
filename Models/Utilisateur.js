const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const bcrypt = require('bcrypt');


class Utilisateur extends Model {

    async validatePassword(password) {
        try {
            const isMatch = await bcrypt.compare(password.trim(), this.ut_motdepasse.trim());
            console.log(`is match : ${isMatch}`); // Affiche le résultat de la comparaison`
            return isMatch;
        } catch (error) {
            console.error("Erreur lors de la validation du mot de passe :", error);
            throw new Error("Erreur de validation du mot de passe");
        }
    }
}

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
    modelName: 'Utilisateur',
    tableName: 'utilisateur',
    timestamps: false
});

module.exports = Utilisateur;

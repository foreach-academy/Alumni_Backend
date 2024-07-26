const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const bcrypt = require('bcrypt');


class Utilisateur extends Model {

    async validatePassword(password) {
        return await bcrypt.compare(password, this.ut_motdepasse);
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
    modelName: 'utilisateur',
    tableName: 'utilisateur',
    timestamps: false,
    hooks: {
        beforeCreate: async (utilisateur) => {
            utilisateur.ut_motdepasse = await bcrypt.hash(utilisateur.ut_motdepasse, 10);
        },
        beforeUpdate: async (utilisateur) => {
            if (utilisateur.changed('ut_motdepasse')) {
                utilisateur.ut_motdepasse = await bcrypt.hash(utilisateur.ut_motdepasse, 10);
            }
        }
    }
});

module.exports = Utilisateur;

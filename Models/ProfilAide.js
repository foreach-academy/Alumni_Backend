const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Profil = require('./Profil');
const TypeAide = require('./TypeAide');

class ProfilAide extends Model{

}

ProfilAide.init({
    id_profil_aide: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_profil: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_typeaide: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'ProfilAide',
    tableName: 'profil_aide',
    timestamps: false,
});

// Relations one-to-many entre Profil et ProfilAide
Profil.hasMany(ProfilAide, { foreignKey: 'id_profil' });
ProfilAide.belongsTo(Profil, { foreignKey: 'id_profil' });

// Relations one-to-many entre TypeAide et ProfilAide
TypeAide.hasMany(ProfilAide, { foreignKey: 'id_typeaide' });
ProfilAide.belongsTo(TypeAide, { foreignKey: 'id_typeaide' });

module.exports= ProfilAide;
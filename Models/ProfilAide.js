const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

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

module.exports= ProfilAide;
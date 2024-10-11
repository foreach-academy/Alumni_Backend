const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Profil = require('./Profil');
const Formation = require('./Formation');
const Promotion = require('./Promotion');

class Parcours extends Model {}

Parcours.init({
    id_parcours: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_formation: {
        type: DataTypes.INTEGER,
        references: {
            model: Formation,
            key: 'id_formation'
        },
        allowNull: true
    },
    id_promotion: {
        type: DataTypes.INTEGER,
        references: {
            model: Promotion,
            key: 'id_promotion'
        },
        allowNull: true
    },
    id_profil: {
        type: DataTypes.INTEGER,
        references: {
            model: Profil,
            key: 'id_profil'
        },
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'parcours',
    tableName: 'parcours',
    timestamps: false,
});

Parcours.belongsTo(Profil, { foreignKey: 'id_profil' }); 
Profil.hasMany(Parcours, { foreignKey: 'id_profil' }); 

Parcours.belongsTo(Formation, { foreignKey: 'id_formation' }); 
Formation.hasMany(Parcours, { foreignKey: 'id_formation' });

Parcours.belongsTo(Promotion, { foreignKey: 'id_promotion' }); 
Promotion.hasMany(Parcours, { foreignKey: 'id_promotion' });

module.exports = Parcours;

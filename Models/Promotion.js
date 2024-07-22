const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');
const Formation = require('./Formation');

class Promotion extends Model {}

Promotion.init({
    id_promotion: {
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
        allowNull: false
    },
    nom_promotion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'promotion',
    tableName: 'promotion',
    timestamps: false,
});

Promotion.belongsTo(Formation, { foreignKey: 'id_formation' });

module.exports = Promotion;

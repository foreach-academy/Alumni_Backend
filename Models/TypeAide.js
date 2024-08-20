const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Config/Sequelize');

class TypeAide extends Model{

}

TypeAide.init({
    id_typeaide: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type_aide: {
        type : DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'TypeAide',
    tableName: 'type_aide',
    timestamps: false,
});

module.exports= TypeAide;
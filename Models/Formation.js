const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Formation extends Model {

}

Formation.init ({
    id_formation : {
        type : DataTypes.INTEGER,
        primaryKey : true, 
        autoIncrement: true,
    },
    type_formation : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    sequelize,
    modelName : 'formation',
    timestamps: false,
});

module.exports = Formation;
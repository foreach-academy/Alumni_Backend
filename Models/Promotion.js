const {Model, DataTypes} = require('sequelize');
const sequelize = require('../Config/Sequelize');

class Promotion extends Model {

}

Promotion.init ({
    id_promotion : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_formation : {
        type : DataTypes.INTEGER,
        reference : {
            model: formation,
            key : 'id_formation',
        },
    },
    nom_promotion : {
        type : DataTypes.STRING,
        allowNull : false
    }
}, {
    sequelize,
    modelName : 'promotion',
    timestamps: false,
});

module.exports = Promotion;
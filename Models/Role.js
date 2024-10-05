const { Model, DataTypes } = require("sequelize");
const sequelize = require('../Config/Sequelize')


class Role extends Model {}

Role.init({
    id_role : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    
    ro_nom : {
        type : DataTypes.STRING,
        allowNull : false
    }
},{
    sequelize,
    modelName : 'Role',
    tableName : 'role',
    timestamps : false
})


module.exports = Role;
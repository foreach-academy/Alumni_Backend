const Role = require("../Models/Role");

class RoleService {
    async getRoleByID(roleID){
        return await Role.findByPk(roleID)
    }

}

module.exports = new RoleService();
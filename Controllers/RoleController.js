const RoleService = require("../Services/RoleService");


class RoleController {

    async getRoleByID(request, result){
       try {
        const role = await RoleService.getRoleByID(request.params.id)
        result.json(role)
       } catch (error) {
        result.status(500)
        result.json({error : "une erreur est survenue lors de la récupération du role"})
       } 
    }

}


module.exports = new RoleController();
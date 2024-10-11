const FormationService = require ('../Services/FormationService');

class FormationController{
    async getAllFormation(request, result){
    try {
        const formation = await FormationService.getAllFormation()
        result.json(formation)
    } catch (error) {
        result.status(500)
        result.json({ error : "Une erreur est survenue lors de la récupération des formations."})
    }
}

    async getFormationByID(request, result){
        try {
            const formation = await FormationService.getFormationByID(request.params.id)
            result.json(formation)
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de la recupération de la formation"})
        }
    }

    async addOrUpdateFormation(req, res) {
        const { id_formation, type_formation } = req.body;
        try {
            if (id_formation) {
                // Mise à jour si l'ID existe
                await FormationService.updateFormation(id_formation, { type_formation });
                res.json({ message: "Formation mise à jour avec succès !" });
            }
        } catch (error) {
            res.status(500).json({ error: "Erreur lors de la mise à jour de la formation." });
        }
    }
}
module.exports = new FormationController();
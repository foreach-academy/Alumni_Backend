const ParcoursService = require('../Services/ParcoursService');

class ParcoursController {

    // Récupérer un parcours par id_profil
    async getParcoursByProfilId(req, res) {
        try {
            const { id_profil } = req.params;
            const parcours = await ParcoursService.getParcoursByProfilId(id_profil);
            if (parcours) {
                res.status(200).json(parcours);
            } else {
                res.status(404).json({ message: 'Aucun parcours trouvé pour ce profil' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la récupération du parcours', error });
        }
    }

    // Mettre à jour un parcours existant
    async updateParcours(req, res) {
        try {
            const { id_parcours } = req.params;
            const updatedData = req.body;
            const updatedParcours = await ParcoursService.updateParcours(id_parcours, updatedData);
            if (updatedParcours[0]) {
                res.status(200).json({ message: 'Parcours mis à jour avec succès' });
            } else {
                res.status(404).json({ message: 'Aucun parcours trouvé à mettre à jour' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Erreur lors de la mise à jour du parcours', error });
        }
    }
}

module.exports = new ParcoursController();

const LiensService = require('../Services/LiensService');

const LiensController = {
  // Récupérer tous les liens d'un profil
  getAllLiensByProfil: async (req, res) => {
    try {
      const { id_profil } = req.params;
      const liens = await LiensService.getAllLiensByProfil(id_profil);
      res.status(200).json(liens);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Récupérer un lien spécifique d'un profil
  getLienByProfilAndId: async (req, res) => {
    try {
      const { id, id_profil } = req.params;
      const lien = await LiensService.getLienByProfilAndId(id, id_profil);
      if (!lien) {
        return res.status(404).json({ message: 'Lien non trouvé' });
      }
      res.status(200).json(lien);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Créer un nouveau lien pour un profil
  createLien: async (req, res) => {
    try {
      const { id_profil } = req.params;  // ID du profil provenant de la requête
      const newLien = await LiensService.createLien(req.body, id_profil);
      res.status(201).json(newLien);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Mettre à jour un lien d'un profil
  updateLien: async (req, res) => {
    try {
      const { id, id_profil } = req.params;
      const [updated] = await LiensService.updateLien(id, req.body, id_profil);
      if (updated) {
        const updatedLien = await LiensService.getLienByProfilAndId(id, id_profil);
        return res.status(200).json(updatedLien);
      }
      throw new Error('Lien non trouvé');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Supprimer un lien d'un profil
  deleteLien: async (req, res) => {
    try {
      const { id, id_profil } = req.params;
      const deleted = await LiensService.deleteLien(id, id_profil);
      if (deleted) {
        return res.status(204).json({ message: 'Lien supprimé' });
      }
      throw new Error('Lien non trouvé');
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = LiensController;

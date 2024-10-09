const express = require('express');
const multer = require('multer');
const Profil = require('../Models/Profil');
const router = express.Router();

// Configuration de multer pour le téléchargement
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Nom unique pour éviter les conflits
  }
});

const upload = multer({ storage });

// Route pour télécharger une image et mettre à jour le profil
router.post('/upload/:id', upload.single('image'), async (req, res) => {
  try {
    const userId = req.params.id;
    const filePath = req.file.path; // Chemin du fichier téléchargé

    // Mettez à jour le profil avec le chemin de l'image
    await Profil.update({ image: filePath }, { where: { utilisateurId: userId } });

    res.status(200).json({ message: 'Image téléchargée et profil mis à jour !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors du téléchargement de l\'image.' });
  }
});

module.exports = router;

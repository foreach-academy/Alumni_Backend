const express = require('express');
const router = express.Router();
const ProfilController = require('../Controllers/ProfilController');
const upload = require('../Services/multer');

router.post('/create', (req, res) => ProfilController.addProfil(req, res));
router.get('/:id', (req, res) => ProfilController.getProfilById(req, res));
<<<<<<< HEAD
router.post('/:id/upload', upload.single('profileImage'), (req, res) => ProfilController.uploadProfileImage(req, res));
=======
router.get('/', (req, res) => ProfilController.getProfilById(req, res));
>>>>>>> d30078b (en cours)

module.exports = router;


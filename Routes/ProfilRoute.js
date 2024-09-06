const express = require('express');
const router = express.Router();
const ProfilController = require('../Controllers/ProfilController');
const upload = require('../Services/multer');

router.post('/', (req, res) => ProfilController.addProfil(req, res));
router.get('/:id', (req, res) => ProfilController.getProfilById(req, res));
router.post('/:id/upload', upload.single('profileImage'), (req, res) => ProfilController.uploadProfileImage(req, res));

module.exports = router;


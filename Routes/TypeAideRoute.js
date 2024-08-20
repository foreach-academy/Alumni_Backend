const TypeAideController = require ('../Controllers/TypeAideController');
const express = require ('express');
const router = express.Router();

router.get("/",(req, res) => TypeAideController.getAllTypeAide(req,res));

module.exports = router;
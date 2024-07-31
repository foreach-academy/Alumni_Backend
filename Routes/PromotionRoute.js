const FormationControllers = require('../Controllers/FormationControllers');
const PromotionController = require('../Controllers/PromotionControllers');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => PromotionController.getAllPromotion(req,res));
router.get("/:id", (request, result)  => PromotionController.getPromotionByID(request, result));

module.exports = router;

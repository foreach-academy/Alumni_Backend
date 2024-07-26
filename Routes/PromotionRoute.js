const PromotionController = require('../Controllers/PromotionControllers');
const express = require('express');
const router = express.Router();

router.get("/", (req, res) => PromotionController.getAllPromotion(req,res));


module.exports = router;
const FormationController = require ('../Controllers/FormationControllers');
const express = require ('express');
const router = express.Router();

router.get("/", (req,res) => FormationController.getAllFormation(req,res));
router.get("/:id" , (request, result)  =>   FormationController.getFormationByID(request, result));

module.exports = router;
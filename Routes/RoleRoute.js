const express = require("express");
const router = express.Router();
const RoleController = require("../Controllers/RoleController");

router.get("/:id", (request, result) => RoleController.getRoleByID(request, result));

module.exports = router;
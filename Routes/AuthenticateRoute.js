const express = require('express');
const router = express.Router();
const AuthenticateController = require('../Controllers/AuthenticateControllers');

router.post('/login', (request, result) => AuthenticateController.login(request, result));

module.exports = router;
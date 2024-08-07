const express = require('express');
const router = express.Router();
const AuthenticateController = require('../Controllers/AuthenticateControllers');

router.post('/login', (request, result) => AuthenticateController.login(request, result));
router.post('inscription', (request, result) => AuthenticateController.inscription(request,result));

module.exports = router;
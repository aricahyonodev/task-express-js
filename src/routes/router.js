const express = require('express');
const Controller = require('../controllers/controller');

const router = express.Router();

router.get('/', Controller.helloWorld);
router.get('/welcome-message', Controller.welcomeMessage);

module.exports = router;

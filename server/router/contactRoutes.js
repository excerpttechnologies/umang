const express = require('express');
const router = express.Router();
const contactController = require('../controller/contactController');

router.post('/contact', contactController.sendContactForm);

module.exports = router;

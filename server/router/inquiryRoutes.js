const express = require('express');
const router = express.Router();
const inquiryController = require('../controller/inquiryController');

router.post('/inquiry', inquiryController.sendInquiryForm);

module.exports = router;

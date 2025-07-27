const express = require('express');
const { sendEmailController } = require('../controllers/portfolioController');

const router = express.Router();

// Route
router.post('/sendEmail', sendEmailController);

module.exports = router;

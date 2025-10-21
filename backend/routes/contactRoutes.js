const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// @route   POST /api/contacts
// @access  Public
router.post('/', contactController.createContact);



module.exports = router;
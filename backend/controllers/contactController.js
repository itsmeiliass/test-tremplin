const Contact = require('../models/contactModel');

const contactController = {
  // Create new contact request
  async createContact(req, res) {
    try {
      const contactData = req.body;
      const newContact = await Contact.create(contactData);
      
      res.status(201).json({
        success: true,
        message: 'Contact request created successfully',
        data: newContact
      });
    } catch (error) {
      console.error('Error creating contact:', error);
      res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message
      });
    }
  },

 
};

module.exports = contactController;
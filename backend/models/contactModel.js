const pool = require('../config/database');


const createTableQuery = `
CREATE TABLE IF NOT EXISTS contact_requests (
  id SERIAL PRIMARY KEY,
  sex VARCHAR(5),
  last_name VARCHAR(100),
  first_name VARCHAR(100),
  email VARCHAR(255),
  phone VARCHAR(20),
  visit_requested BOOLEAN DEFAULT false,
  callback_requested BOOLEAN DEFAULT false,
  more_photos_requested BOOLEAN DEFAULT false,
  message TEXT,
  availability TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

// Initialize table
pool.query(createTableQuery)
  .then(() => console.log('Contact requests table ready'))
  .catch(err => console.error('Table creation error:', err));

const Contact = {
  // Create new contact request
  async create(contactData) {
    const {
      sex ,
      last_name,
      first_name,
      email,
      phone,
      visit_requested,
      callback_requested,
      more_photos_requested,
      message,
      availability
    } = contactData;

    const query = `
      INSERT INTO contact_requests (
        sex, last_name, first_name, email, phone,
        visit_requested, callback_requested, more_photos_requested,
        message, availability
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
      RETURNING *
    `;

    const values = [
      sex,
      last_name,
      first_name,
      email,
      phone,
      visit_requested || false,
      callback_requested || false,
      more_photos_requested || false,
      message,
      availability
    ];

    try {
      const result = await pool.query(query, values);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  },

 
};

module.exports = Contact;
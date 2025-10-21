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
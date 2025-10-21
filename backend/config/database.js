const {Pool} = require('pg')
require('dotenv').config()


// setup postgresql 
const pool = new Pool({
  user: process.env.DB_USER || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'test_tremplin',
  password: process.env.DB_PASSWORD || '123',
  port: process.env.DB_PORT || 5433,

});


// Test connection
pool.on('connect', () => {
  console.log('Connected to database Successfully');
});

pool.on('error', (err) => {
  console.error('Connection error:', err);
});

module.exports = pool;
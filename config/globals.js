require('dotenv').config();

const dbname = process.env.DB_NAME || 'test';
const dbuser = process.env.DB_USERNAME || 'root';
const dbpass = process.env.DB_PASSWORD || '';
const dbhost = process.env.DB_HOST || 'localhost';
const dbport = process.env.DB_PORT || 3306;
const email = process.env.EMAIL || 'email';
const emailpass = process.env.PASSWORD || 'password';

module.exports = { dbname, dbuser, dbpass, dbhost, dbport, email, emailpass };

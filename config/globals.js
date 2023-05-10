require('dotenv').config();

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USERNAME;
const dbpass = process.env.DB_PASSWORD;
const dbhost = process.env.DB_HOST;
const dbport = process.env.DB_PORT;
const email = process.env.EMAIL || 'email';
const emailpass = process.env.PASSWORD || 'password';

module.exports = { dbname, dbuser, dbpass, dbhost, dbport, email, emailpass };

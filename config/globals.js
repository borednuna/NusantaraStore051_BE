require('dotenv').config();

const dbname = process.env.DB_NAME || 'test';
const dbuser = process.env.DB_USERNAME || 'root';
const dbpass = process.env.DB_PASSWORD || '';
const dbhost = process.env.DB_HOST || 'localhost';
const dbport = process.env.DB_PORT || 3306;

module.exports = { dbname, dbuser, dbpass, dbhost, dbport };

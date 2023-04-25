const globals = require('./globals.js');
const { dbname, dbuser, dbpass, dbhost } = globals;

module.exports = {
  "development": {
    "username": dbuser,
    "password": dbpass,
    "database": dbname,
    "host": dbhost,
    "dialect": "mysql"
  },
  "test": {
    "username": dbuser,
    "password": dbpass,
    "database": dbname,
    "host": dbhost,
    "dialect": "mysql"
  },
  "production": {
    "username": dbuser,
    "password": dbpass,
    "database": dbname,
    "host": dbhost,
    "dialect": "mysql"
  }
}

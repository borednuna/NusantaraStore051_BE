const globals = require('./globals');
const { dbname, dbuser, dbpass, dbhost, dbport } = globals;

module.exports = {
  "development": {
    "username": dbuser,
    "password": dbpass,
    "database": dbname,
    "host": dbhost,
    "port": dbport,
    "dialect": "postgres"
  },
  "test": {
    "username": dbuser,
    "password": dbpass,
    "database": "database_test",
    "host": dbhost,
    "port": dbport,
    "dialect": "postgres"
  },
  "production": {
    "username": dbuser,
    "password": dbpass,
    "database": "database_production",
    "host": dbhost,
    "port": dbport,
    "dialect": "postgres"
  }
}

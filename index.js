const { Sequelize } = require('sequelize');
const globals = require("./config/globals");
const { dbname, dbuser, dbpass, dbhost, dbport } = globals;
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sequelize = new Sequelize(dbname, dbuser, dbpass, {
    host: dbhost,
    port: dbport,
    dialect: 'postgres'
});

const test = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test();

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

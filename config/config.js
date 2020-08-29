const Sequelize = require('sequelize');

require('dotenv').config();

// create database, ensure 'mySQL2' in your package.json
var sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER,process.env.DB_PASS, {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
  });

module.exports = sequelize;

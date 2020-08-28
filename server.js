//dotenv
//express - check
//express-handlebars - check
//mySQL2 - check
//Sequelize - check
//bcrypt
//express-session
//connect-session-sequelize
const mysql = require('mysql2');
const { Sequelize } = require('sequelize');
var express = require('express');
var exphbs  = require('express-handlebars');
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt');
var session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(
    connect.session.Store
);
var app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
});

connect().use(
    connect.session({
      store: new SequelizeStore(options),
      secret: "CHANGEME",
    })
);

 
app.get('/', function (req, res) {
    res.render('home');
});
 
app.listen(3000);
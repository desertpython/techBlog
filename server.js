//dotenv
//express - check
//express-handlebars - check
//mySQL2 - check
//Sequelize - check
//bcrypt
//express-session
//connect-session-sequelize
const mysql = require('mysql2');
const Sequelize = require('sequelize');

var express = require('express');
var exphbs  = require('express-handlebars');
const dotenv = require('dotenv').config()
const bcrypt = require('bcrypt');
var session = require('express-session')
// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);
var app = express();
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
// create database, ensure 'mySQL2' in your package.json
var sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER,process.env.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});
 
// configure express
var app = express();


// create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test'
// });

// connect().use(
//     connect.session({
//       store: new SequelizeStore(options),
//       secret: "CHANGEME",
//     })
// );

  



 
app.get('/', function (req, res) {
    res.render('home');
});
 


app.use(
    session({
      secret: "keyboard cat",
      store: new SequelizeStore({
        db: sequelize,
      }),
      resave: false, // we support the touch method so per the express-session docs this should be set to false
      proxy: true, // if you do SSL outside of node.
      saveUninitialized: true,
    })
  );

  sequelize.sync({ force: false }).then(() => {
            app.listen(3001, () => console.log('Now listening')) 
  })
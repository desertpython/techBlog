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
const app = express();
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
var SequelizeStore = require("connect-session-sequelize")(session.Store);
 
// create database, ensure 'mySQL2' in your package.json
var sequelize = new Sequelize(process.env.DB_HOST, process.env.DB_USER,process.env.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});


// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'test'
// });

// connection().use(
//     connection.session({
//       store: new SequelizeStore(options),
//       secret: "CHANGEME",
//     })
// );

  



 
app.get('/', function (req, res) {
    res.render('login');
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
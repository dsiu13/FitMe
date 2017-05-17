//Express
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

//Dependecies
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var exphbs = require('express-handlebars');
var methodOverride = require('method-override');

// See files in public folder
app.use(express.static(__dirname + '/views'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


//For Handlebars
app.set('views', './views/layouts')
app.engine('hbs', exphbs({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

// Requiring our models for syncing
var db = require("./models");

// Routing
// require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);
// require('./routes/auth-routes.js')(app);

// POST Method
app.use(methodOverride("_method"));


//load passport strategies
var authRoute = require('./routes/auth-routes.js')(app, passport);
require('./config/passport.js')(passport, db.user);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  })
}).catch(function(err){
    console.log("Database Update Failed")
});


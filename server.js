var express = require('express');
var mysql = require('mysql');
var expressHandlebars = require('express-handlebars');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');

var app=express();
var PORT=process.env.PORT||80;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.engine('handlebars', expressHandlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(methodOverride('_method'));

require('./controllers/api-routes.js')(app);
require('./controllers/html-routes.js')(app);

//Listener 
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);});
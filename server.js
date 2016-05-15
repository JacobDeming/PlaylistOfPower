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

var sequelize = new Sequelize('rqygtt0q3i9hidqw', 'mezovh63hjy58nqk', 'lvd3n9uwvi47sdjo', {
  host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000}})

var Song=sequelize.define('song',{
	id:{
		type: Sequelize.INTEGER,autoIncrement:true,unique:true,primaryKey:true},
	title:{
		type: Sequelize.STRING},
	artist:{
		type: Sequelize.STRING},
	link:{
		type: Sequelize.STRING,validate:{
			isUrl: true}},
	eye_color:{
		type: Sequelize.STRING},
	power_name:{
		type: Sequelize.STRING},
	power_type:{
		type: Sequelize.STRING}})

Song.sync();

app.post('/api/song',function(req,res){
	Song.create({title:req.body.title,artist:req.body.artist,link:req.body.link,eye_color:req.body.color,power_name:req.body.name,power_type:req.body.type}).then(function(song){
			res.redirect("/");})})

app.get('/',function(req,res){
	Song.findAll({order:"power_name ASC",raw:true}).then(function(song){
		console.log(song);
		res.render('index',{song});})})

//Listener 
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);});
var mysql = require('mysql');
var Sequelize = require('sequelize');

// var sequelize = new Sequelize('rqygtt0q3i9hidqw', 'mezovh63hjy58nqk', 'lvd3n9uwvi47sdjo', {
//   host: 'jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   dialect: 'mysql',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000}})

var sequelize = new Sequelize('musicdb', 'root', 'LARPing1991', {
  host: 'localhost',
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

module.exports=Song;
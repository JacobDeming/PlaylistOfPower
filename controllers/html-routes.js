var Song=require("../models/SQLConnection.js");
var path=require('path');

module.exports=function(app){
	app.get('/',function(req,res){
	Song.sync();
	Song.findAll({order:"power_name ASC",raw:true}).then(function(song){
		console.log(song);
		res.render('index',{song});})})
}
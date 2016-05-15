var Song=require("../models/SQLConnection.js");
var path=require('path');

module.exports=function(app){
app.post('/api/song',function(req,res){
	Song.create({title:req.body.title,artist:req.body.artist,link:req.body.link,eye_color:req.body.color,power_name:req.body.name,power_type:req.body.type}).then(function(song){
			res.redirect("/");})})
}
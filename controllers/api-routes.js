var Song=require("../models/SQLConnection.js");
var path=require('path');
var colourlovers=require('colourlovers');

module.exports=function(app){
app.post('/api/song',function(req,res){
	colourlovers.get('/colors',{keywords:req.body.color,numResults:1},function(err,data){
		if(err) throw err;
		var hue='#'+data[0].hex;
		var opp='#'+invertColor(data[0].hex);
	Song.create({title:req.body.title,artist:req.body.artist,link:req.body.link,eye_color:req.body.color,hue:hue,opp_hue:opp,power_name:req.body.name,power_type:req.body.type}).then(function(song){
			res.redirect("/");})})})}

function invertColor(hex){
    var color = hex;
    color = color.substring(1);
    color = parseInt(color, 16);
    color = 0xFFFFFF ^ color;
    color = color.toString(16);
    color = ("000000" + color).slice(-6);
    return color;}
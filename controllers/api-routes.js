var Song=require("../models/SQLConnection.js");
var path=require('path');
var colourlovers=require('colourlovers');
var tinycolor = require("tinycolor2");

module.exports=function(app){
app.post('/api/song',function(req,res){
	if(req.body.color.split(" - ").length>=2){
		getColorText=req.body.color.split(" - ");
		colourlovers.get('/colors',{keywords:getColorText[0],keywordExact:1,numResults:1},function(err,data){
			if(err) throw err;
			var text="";
			var hue='#'+data[0].hex;
			var color=tinycolor(hue);
			if(color.isDark()==true){
				text='#FFFFFF';}
			else{text='#000000';}
		Song.create({title:req.body.title,artist:req.body.artist,link:req.body.link,eye_color:getColorText[1],hue:hue,opp_hue:text,power_name:req.body.name,power_type:req.body.type}).then(function(song){
				res.redirect("/");})})}
	else{
		colourlovers.get('/colors',{keywords:req.body.color,keywordExact:1,numResults:1},function(err,data){
		if(err) throw err;
		var text="";
		var hue='#'+data[0].hex;
		var color=tinycolor(hue);
		if(color.isDark()==true){
			text='#FFFFFF';}
		else{text='#000000';}
	Song.create({title:req.body.title,artist:req.body.artist,link:req.body.link,hue:hue,opp_hue:text,power_name:req.body.name,power_type:req.body.type}).then(function(song){
			res.redirect("/");})})}})}


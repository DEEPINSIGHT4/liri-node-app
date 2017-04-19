var fs = require("fs");
var keys = require("./keys.js");
var tweet = require("twitter");

var spotify = require("spotify");

var request = require("request");


var artistNames = function(artist){
	return artist.name;
};


var getSpotify = function(songName){
	if (songName === undefined){
		songName = "what my age again";
	}
	spotify.search({
		type: 'track',
		query: songName
	},function(err,data){
		if(err){
			console.log("error occurred: "+ err);
			return
		}
		var songs = data.tracks.items;
		for (var )
	})
}
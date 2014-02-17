"use strict";

var movieList = JSON.parse(localStorage.getItem("movieList")) || [];

var peli1 = {
	"name": "s",
	"Year": "2010",
	"Genre": "Action"
};

var peli2 = {
	"name": "400",
	"Year": "2010",
	"Genre": "Action"
};

var peli3 = {
	"name": "Joze",
	"Year": "2010",
	"Genre": "Action"
};
var peli4 = {
	"name": "Andres",
	"Year": "2010",
	"Genre": "Action"
};
var peli5 = {
	"name": "Kike",
	"Year": "2010",
	"Genre": "Action"
};

function addmovie (movieToAdd){
	for (var i = 0; i < movieList.length; i++){
		if (movieToAdd.name === movieList.name) {
		  	console.log('The movie already exists');
		  	return;
	  	}
	}
	movieList.push(movieToAdd);
	window.localStorage.setItem('movieList', JSON.stringify(movieList));
};

function getmovie (movieToGet) {
	for (var i=0; i < movieList.length; i++){
		if (movieToGet === movieList[i].name)
		{
			console.log("he encontrado la peli ");
			return movieList[i];
		}
	}
}
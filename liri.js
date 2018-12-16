// require dotenv
require("dotenv").config();
// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
var axios = require("axios");
// Load the user keys
// var fs = require("fs");
// var keys = require("./keys.js");

function logMovie() {
    // OMDB---correct
    var search = process.argv.slice(3).join(" ");
    "http://www.omdbapi.com/?t=titanic&y=&plot=short&apikey=trilogy"
    let movieUrl = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`
    // Make a request for a user with a given ID
    axios.get(movieUrl)
        .then(function (response) {
            console.log(" ");
            console.log("-----------------------------------");
            console.log("Movie Name: " + response.data.Title + " Movie Year: " + response.data.Year + " Movie Rating: " + response.data.imdbRating );
            console.log(" ");
            console.log("RottenTomatoes Rating: " + response.data.Ratings[1].Value + " Country: " + response.data.Country);
            console.log(" ");
            console.log("Language: " + response.data.Language + " Actors:" + response.data.Actors);
            console.log(" ");
            console.log( "Plot:" + response.data.Plot ); 
            console.log("-----------------------------------");
            console.log(" ");
        })
        .catch(function (error) {
            console.log(error);
        });
};

function logBands() {
    // Bands API working
    var search = process.argv.slice(3).join(" ");
    console.log(search)
    let bandsUrl = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`

    // Make a request for a user with a given ID
    axios.get(bandsUrl)
        .then(function (response) {
            // Require moment npm
            var moment = require("moment");
            moment().format('L');


            console.log(" ");
            console.log("-----------------------------------");
            console.log("Name of Venue:" + response.data[0].venue.name + " Venue Location: " + response.data[0].venue.city + " Date: " + response.data[0].datetime);
            console.log("-----------------------------------");
            console.log(" ");
        })
        .catch(function (error) {
            console.log(error);
        });
}

function logSpotify() {
    // Spotify API
    var search = process.argv.slice(3).join(" ");
    let spotifyUrl = `https://api.spotify.com/v1/tracks/889793eacaf547bf8098452b0913d8f1`

    // SPOTIFY
    // Require npm modules and files
    const Spotify = require("node-spotify-api");
    const spotify = new Spotify({
        id: "889793eacaf547bf8098452b0913d8f1",
        secret: "59561895cb3945918bfedb079290599c"

    });

    spotify
        .request(spotifyUrl)
        .then(function (response) {
            console.log(response.data.album);
        })
        .catch(function (err) {
            console.error('Error occurred: ' + err);
        });

};

if (process.argv[2] === "movie-this") {
    logMovie();
}
else if (process.argv[2] === "concert-this") {
    logBands();
}
else if (process.argv[2] === "spotify-this-song") {
    logSpotify();
}


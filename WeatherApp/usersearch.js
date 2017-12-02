/* 
Get parameter
    split into name and city
    send city to weather-js
        weather.find({search: 'San Francisco, CA', degreeType: 'F'}
    Send name, city, current.temperature, date.now() to file (JSON)
*/

var weather = require("weather-js");
var fs = require("fs");

var testData = require("./testdata.js");

function UserSearch(name, city, fileName){
    this.name = name;
    this.city = city;
    this.temperature;
    this.timestamp;
    this.weatherSearch = function(){
        var weatherObject = {};

       weather.find({search: this.city, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            
            weatherObject = { name:this.name, city:this.city, temperature:result[0].current.temperature, date:Date.now() };
            LogData(weatherObject, fileName);
            console.log(weatherObject.name);
            return weatherObject;
        }); 
    };
}

function LogData(data, textFile){
    //console.log(data);
    var logLine = data.name + " " + data.city + " " + data.temperature + " " + data.date + ",\r\n";
    fs.appendFile(textFile, logLine, function(err) {
        
        // If an error was experienced we say it.
        if (err) {
            console.log(err);
        }
    
        // If no error is experienced, we'll log the phrase "Content Added" to our node console.
        else {
            console.log("Content Added!");
        }
        
    });
}

//var x = new UserSearch("Frank", "Austin").weatherSearch();

module.exports = UserSearch;
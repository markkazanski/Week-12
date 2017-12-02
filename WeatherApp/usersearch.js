/* 
Get parameter
    split into name and city
    send city to weather-js
        weather.find({search: 'San Francisco, CA', degreeType: 'F'}
    Send name, city, current.temperature, date.now() to file (JSON)
*/

var weather = require("weather-js");
var userSearch = require("./usersearch.js");
var weatherAdmin = require("./WeatherAdmin.js");

//console.log(userSearch);

/*
var x = new userSearch("Test Boy", "Boston", "searchLog.txt").weatherSearch();
var y = new userSearch("Frank Testerson", "Vancouver", "searchLog.txt").weatherSearch();
console.log(x);
console.log(y);*/

var command = process.argv[2];
var name = process.argv[3];
var city = process.argv[4];

if(command === "admin"){
    var adminObj = new weatherAdmin("searchLog.txt");
    adminObj.readLog();
}else if( command === "user"){
    var x = new userSearch(name, city, "searchLog.txt").weatherSearch();   
    console.log(x); 
}

/*
    get parameters  
        admin
            call weateradmin
        user
            get name city, pass to usersearch
*/
var fs = require("fs");

var user = "billy";



var x = "asdfasdf";

function LogData(data, textFile){
    //console.log(data);
    //var logLine = data.name + " " + data.city + " " + data.temperature + " " + data.date + ",\r\n";
    fs.appendFile(textFile, data, function(err) {
        
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

LogData(user + x, "test.txt");
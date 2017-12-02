function WeatherAdmin(fileName){
    this.fileName = fileName;

    this.readLog = function(){
        var fs = require("fs");
        fs.readFile(fileName, "utf8", function(error, data) {
            
            // If the code experiences any errors it will log the error to the console.
            if (error) {
                return console.log(error);
            }
            
            // We will then print the contents of data
            //console.log("data: " + data);
            
            // Then split it by commas (to make it more readable)
            //dataArr = data.split(",\r\n");   
            console.log(data);         
        });
    }
}

module.exports = WeatherAdmin;
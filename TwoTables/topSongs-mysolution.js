var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Arseface04!",
  database: "two_tables"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch() {
  inquirer
    .prompt({
      name: "action",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
        "Find songs by artist",
        "Find all artists who appear more than once",
        "Find data within a specific range",
        "Search for a specific song",
        "Find artists with a top song and top album in the same year"
      ]
    })
    .then(function(answer) {
      switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;

        case "Find all artists who appear more than once":
          multiSearch();
          break;

        case "Find data within a specific range":
          rangeSearch();
          break;

        case "Search for a specific song":
          songSearch();
          break;

        case "Find artists with a top song and top album in the same year":
          songAndAlbumSearch();
          break;
      }
    });
}

function artistSearch(){
    inquirer
    .prompt({
      name: "artist",
      type: "input",
      message: "Artist?"
    })
    .then(function(answer){
        var query = `SELECT * FROM top_songs WHERE artist LIKE "%${answer.artist}%"`;
        connection.query(query, function(err, res){
            if(err) throw err;
    
            console.log(res);
            runSearch();
        });
    });
    
}

function multiSearch(){
    var query = `SELECT artist, COUNT(*) c FROM top_songs GROUP BY artist HAVING c > 1;`;
    connection.query(query, function(err, res){
        if(err) throw err;

        console.log(res);
        runSearch();
    });        
}

function rangeSearch(){
    inquirer
    .prompt([{
      name: "startyear",
      type: "input",
      message: "Start year?"
    }, 
    {
        name: "endyear",
        type: "input",
        message: "End year?"
      }])
    .then(function(answer){
        var query = `SELECT * FROM top_songs WHERE year>="${answer.startyear}" AND year<="${answer.endyear}"`;
        connection.query(query, function(err, res){
            if(err) throw err;
    
            console.log(res);
            runSearch();
        });
    });
    
}

function songSearch(){
    inquirer
    .prompt({
      name: "song",
      type: "input",
      message: "Song?"
    })
    .then(function(answer){
        var query = `SELECT * FROM top_songs WHERE song LIKE "%${answer.song}%"`;
        connection.query(query, function(err, res){
            if(err) throw err;
    
            console.log(res);
            runSearch();
        });
    });
    
}

function songAndAlbumSearch(){
    var query = `
    SELECT top_songs.artist, song, album, top_songs.year 
    FROM top_songs, top_albums 
    WHERE top_songs.year=top_albums.year 
    ORDER BY top_songs.year;`;
    connection.query(query, function(err, res){
        if(err) throw err;

        console.log(res);
        runSearch();
    });
}
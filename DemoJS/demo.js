var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Arseface04!',
  port: 3306,
  database : 'ice_creamdb'
});

connection.connect( function(error){
    if (error) throw error;
    console.log( "Connected as ID: " + connection.threadId );
} );

var idNum = 1;
connection.query('SELECT * FROM products WHERE id=' + idNum, function (error, results, fields) {
    if (error) throw error;

    for(var i=0; i<results.length; i++){
        for(var key in results[i]){
            console.log(key + ": " + results[i][key] );
        }
        console.log("");
        //console.log(results[i].title);
    }
});


connection.query('SELECT * FROM products WHERE id=?', ["Crap"], function (error, results, fields) {
    if (error) throw error;
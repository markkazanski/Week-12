function createProducts(){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { quantity:100; },
            { flavor: "Rocky Road" }
        ],
        function(err, res){
            if(err) throw err;

            console.log(res.afectedRows);
        }
    );
}

function updateProducts(){
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { quantity:100; },
            { flavor: "Rocky Road" }
        ],
        function(err, res){
            if(err) throw err;

            console.log(res.afectedRows);
        }
    );
}
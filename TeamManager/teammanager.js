var inquirer = require("inquirer");

function Players(name, position, offence, defence){
    this.name = name;
    this.position = position;
    this.offence = offence;
    this.defence = defence;

    this.goodGame = function(){
        if( randomIntFromInterval(0,1) ){
            this.offence += 10;
        }else  
            this.defence += 10;
    };

    this.badGame = function(){
        if( randomIntFromInterval(0,1) )
            this.offence -= 10;
        else  
            this.defence -= 10;
    };

    this.printStats = function(){
        for(var x in this){
            if(typeof this[x] === "number" || typeof this[x] === "string")
                console.log(x + ": " + this[x]);
        }
        console.log(" ");
    }; 

}

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var playerArray = [];
var createPlayers = function(){

    var questions = [
        {
            type:"input",
            message: "Player Name:",
            name: "name",
            default: "blank" 
        },
        {
            type:"input",
            message: "Position:",
            name: "position",
            default: "blank" 
        },
        {
            type:"input",
            message: "Offence:",
            name: "offence",
            default: "blank" 
        },
        {
            type:"input",
            message: "Defence:",
            name: "defence",
            default: "blank" 
        }
    ];


    if( count < 8 ){
        inquirer.prompt(questions).then( function(inquirerResponse){
            var newPlayer = new Players(
                inquirerResponse.name,
                inquirerResponse.position,
                inquirerResponse.defence,
                inquirerResponse.offence
            );   
            playerArray.push( newPlayer );
            count++;
            createPlayers();
        });
    }else{ 
        console.log("All players created.");
        for(var i = 0; i < playerArray.length; i++){
            playerArray[i].printStats();
        }
    }

} //end createPlayers

function playGame(){
    var teamOffence = 0;
    var teamDefence = 0;

    for(var i=0; i<playerArray.length; i++){
        teamOffence += playerArray.offence;
    }

    if( randomIntFromInterval(1,20) < teamOffence ){
        //If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
    }

    if( randomIntFromInterval(1,20) > teamDefence ){
        //If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    }
}

var count = 0;

createPlayers();
playGame();

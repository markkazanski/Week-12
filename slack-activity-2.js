function Character( charName, profession, gender, age, strength, hitPoints) {
    this.charName = charName;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hitPoints = hitPoints;
    this.printStats = function(){
        for(var x in this){
            if(typeof this[x] === "number" || typeof this[x] === "string")
                console.log(x + ": " + this[x]);
        }
        console.log(" ");
    },
    this.isAlive = function(){
        if(this.hitPoints > 0)
            return true;
        else
            return false;
    },
    this.Attack = function(victim){
        victim.hitPoints -= this.strength;
    },
    this.LevelUp = function(){
        this.age++;
        this.strength+=5;
        this.hitPoints+=25;
    }
}

function randomIntFromInterval(min,max){ //get random number
    return Math.floor(Math.random()*(max-min+1)+min);
}

var billy = new Character("Billy", "plumber", "male", 34, 50, 100);

var frank = new Character("Frank Frankofeston", "biker", "trans", randomIntFromInterval(80, 100), randomIntFromInterval(50, 120), randomIntFromInterval(50, 100));
/*frank.printStats();

billy.Attack(frank);

console.log("\r\nbilly attacked frank \r\n");

frank.printStats();
frank.isAlive();

billy.LevelUp();
console.log("\r\n Leveled Up \r\n");
billy.printStats();*/

billy.printStats();
frank.printStats();

Fight( billy, frank );

function Fight(player1, player2){
    while(player1.isAlive() && player2.isAlive() ){
        if(player1.isAlive() )
            player1.Attack(player2);
        if(player2.isAlive() )
            player2.Attack(player1);
    }
    
    if( player1.isAlive() && !player2.isAlive() )
        console.log( player1.charName + " defeated " + player2.charName );
    else if( player2.isAlive() && !player1.isAlive() )
        console.log( player2.charName + " defeated " + player1.charName );
    else if( player1.isAlive() && player2.isAlive() )
        console.log("DRAW");
    else if( !player1.isAlive() && !player2.isAlive() )
        console.log("DOUBLE DEATH");
}


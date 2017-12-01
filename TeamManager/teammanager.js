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

//var p1 = new Players("billy", "forward", 10, 20);
//p1.printStats();

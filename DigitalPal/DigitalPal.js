function DigitalPal(){
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    
    this.feed = function(){
        if(this.hungry){
            this.hungry = false;
            this.sleepy = true;
            console.log("That was yummy!");
        }
    }

    this.sleepy = function(){
        if(this.sleepy){
            console.log("Zzzzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        }else   
            console.log("No way! I'm not tired.");
    }

    this.increaseAge = function(){
        this.age++;
        console.log("Happy Birthday to me! I am " + this.age + " old");
    }

    this.play = function(){
        if(this.bored){
            console.log( "Yay! Let's play!");
            this.hungry = true;
            this.bored = false;
        }else
            console.log("Not right now. Later?");
    }
}

var Dog = new DigitalPal();
Dog.Outside = false;
Dog.Bark = function(){ console.log("Woof! Woof!"); };

Dog.goOutside = function(){
    if(!this.Outside){
        console.log("Yay! I love the outdoors!");
        this.Outside = true;
        this.Bark();    
    }else
        console.log("We're already outside though...");
};

Dog.goInside = function(){
    if(this.Outside){
        console.log("Do we have to? Fine...");
        this.Outside = false;
    }else
        console.log("I'm already inside...");   
}; 

var Cat = new DigitalPal();
Cat.HouseCondition = 100;

Cat.meow = function(){
    console.log("Meow! Meow!");
};

Cat.destroyFurniture = function(){
    if(this.HouseCondition > 0){
        this.HouseCondition -= 10;
        this.bored = false;
        this.sleepy = true;
        console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    }
};

Cat.buyNewFurniture = function(){
    console.log("Are you sure about that?");
};


/*
while( Cat.HouseCondition > 0 ){
    Cat.destroyFurniture();
    console.log(Cat.HouseCondition);
}

Cat.buyNewFurniture();
*/

var inquirer = require("inquirer");


var questions = [
    {
        type:"list",
        name:"type",
        message: "Cat or Dog?",
        choices: ["Cat", "Dog"],
        default: "Cat"
    }
];

//console.log(Cat instanceof DigitalPal);


inquirer.prompt(questions).then( function(inquirerResponse){
    if(inquirerResponse.type === "Cat"){
       // var yourPet = new Cat();
        Cat.meow();
    }

    if(inquirerResponse.type === "Dog"){
        //var yourPet = new Dog();
        Dog.Bark();
    }
});

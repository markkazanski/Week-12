var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function(){ //Cat and Dogs?
        if(this.raining)
            console.log(this.noise);
    },
};

dogs.makeNoise();

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function(){ //Cat and Dogs?
        if(this.raining)
            console.log(this.noise);
    },    
};

cats.raining = true;
cats.makeNoise();

function massHysteria(dogsObj, catsObj){
    if( dogsObj.raining && catsObj.raining )
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
}

massHysteria(dogs, cats);
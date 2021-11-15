// 2021.10.22 FROM (MM) 
/*----------------------------------*/
// CLASSES with MOTHODS-1 (exos)
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
}

var car1 = new Car("Tesla", "Model S");
console.log(car1);
// Car {brand: 'Tesla', model: 'Model S'}



/*----------------------------------*/
// by adding methods to classes, we will be able to create interactive objects using the classes as templates
// objects created from a class have access to its METHODS
// adding a method in a class is like creating a regular function except there's no need for the "function" keyword
// here we give the pet the ability to eat with a //! METHOD
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(){ 

    }
}



/*----------------------------------*/
// inside the braces, methods work like normal functions
// see below, the "eat METHOD"
//! to use the eat() METHOD, need (name of the object) + (.) + (the name of the method) + ()
// pet.eat();
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(){
        console.log("fishy cookies");
    }
}

var pet = new VirtualPet("Garfield");
pet.eat(); //! => to let the new obj "pet" use the eat() METHOD
// fishy cookies



/*----------------------------------*/
// add a parameter "food" to the eat() METHOD
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(food){ //!
        console.log("fishy cookies");
    }
}

var pet = new VirtualPet("Garfield");
pet.eat(); 
// fishy cookies



/*----------------------------------*/
// add a parameter "food" to the eat() METHOD
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(food){
        if (food === "treats") { //!
            console.log("fishy cookies");
        } else {
            console.log("discard");
        }
    }
}

var pet = new VirtualPet("Garfield");
pet.eat(); 
// discard



/*----------------------------------*/
// each new object of the "VirtualPet" class we create will be able to use the "eat()" METHOD
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(food){
        if (food === "treats") {
            console.log("fishy cookies");
        } else {
            console.log("discard");
        }
    }
}

var pet = new VirtualPet("Garfield");
pet.eat("treats"); //!
// fishy cookies



/*----------------------------------*/
// EXO
class VirtualPet {
    constructor(name) {
        this.name = name;
    }

    eat(food){
        if (food === "treats") {
            console.log("fishy cookies");
        } else {
            console.log("discard");
        }
    }
}

var pet1 = new VirtualPet("Garfield");
var pet2 = new VirtualPet("Sherrif");
pet1.eat("treats"); // fishy cookies
pet2.eat(); // discard
console.log(pet1); // VirtualPet {name: 'Garfield'}
console.log(pet2); // VirtualPet {name: 'Sherrif'}


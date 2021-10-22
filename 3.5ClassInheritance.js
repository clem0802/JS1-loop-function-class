// 2021.10.22 FROM (MIMO) 
/*----------------------------------*/
// EXTENDING CLASSES // INHERITANCE
// create an "Animal" CLASS to bundle the "main features" of the animals
// then use.extend inheritance with "additional functionality" for the different kinds of animals
// to inherit features from a CLASS, use "EXTENDS" keyword
// the more SPECIFIC class inherits from the more GENERAL class
// here the "Dog" CLASS inherit from the "Animal" CLASS

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal{
    //
}




/*----------------------------------*/
// INHERITANCE gives a class all the PROPERTIES of the class it's extending or inheriting from
// "class Animal" is a SUPERCLASS of "class Dog"
// "class Dog" here is a SUBCLASS of "class Animal"

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal{
    //
} 
var dog = new Dog ("Pug");
console.log(dog);
// Dog {name: 'Pug'}




/*----------------------------------*/
// if the SUBCLASS has no constructor, the SUPERCLASS's constructor becomes the DEFAULT CONSTRUCTOR
// the "name" PROPERTY of "class Dog" gets created through the constructor of "class Animal"
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal{
    //
} 
var dog = new Dog ("Pug");
console.log(dog.name);
//! Pug 




/*----------------------------------*/
// a SUBCLASS also inherits its SUPERCLASS's //! METHODS
// the "name" PROPERTY of "class Dog" gets created through the constructor of "class Animal"
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() { //!  eat() METHOD
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal { // Dog OBJECT
    //
} 

var dog = new Dog ("Webster");
dog.eat(); //!  CALL the eat() METHOD
// Webster is eating




/*----------------------------------*/
// can create as many as SUBCLASSES of Animal as we want 
// they will ALL have access to the PROPERTIES of the "class Animal"
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() { //  eat() METHOD
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {
    //
} 
class Bird extends Animal {
    // 
}

var dog = new Dog ("Webster");
var bird = new Bird("NightinGale")
dog.eat(); // CALL the eat() METHOD
bird.eat(); // CALL the eat() METHOD
// Webster is eating
// NightinGale is eating




/*----------------------------------*/
// INHERITANCE becomes useful when SUBCLASSES have ADDITIONAL FUNCTIONALITY (their own METHODS)
// add bark() METHOD to "class Dog" and CALL it
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() { //  eat() METHOD
        console.log(this.name + " is eating.");
    }
}
class Dog extends Animal {
    bark () {  //!
        console.log(this.name + " is barking!");
    }
}

var dog = new Dog ("Webster");
dog.eat(); // CALL the eat() METHOD
dog.bark(); //! CALL the bark() METHOD
// Webster is eating.
// Webster is barking!




/*----------------------------------*/
// INHERITANCE works ONE WAY ONLY
// NOT ALL instances of Animal are a kind of Dog
// add bird.bark() and see this is not gonna work
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal {
    bark() {
        console.log(this.name + " is barking");
    }
} 

var dog = new Dog ("Spot");
var bird = new Animal("Sparrow")
dog.bark(); // CALL the bark() METHOD
// Spot is barking




/*----------------------------------*/
// to create an instance from Bike, with a set "speed PROPERTY"
// we use     var bike = new Bike("15 km/h");  //! check for UNDERSTANDING
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
}
class Bike extends Vehicle {
    //
}

var bike = new Bike("15 km/h");




/*----------------------------------*/
// to set a bookmark for "cookbook" OBJECT  //! check for UNDERSTANDING
class Book {
    constructor(title) {
        this.title = title;
        this.page = 1;
    }

    setBookmark(page) {
        this.page = page;
    }
}
class Cookbook extends Book {
    //
}

var cookbook = new Cookbook("Pie");
cookbook.setBookmark(11);

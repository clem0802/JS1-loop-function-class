// 2021.10.22 FROM (MM) 
/*----------------------------------*/ (I)
// EXTENDING CLASSES // INHERITANCE
// create an "Animal" CLASS to bundle the "main features" of the animals
// then use "extends" inheritance with "additional functionality" for the different kinds of animals
// to inherit features from a CLASS, use "EXTENDS" keyword
// the more SPECIFIC class inherits from the more GENERAL class
// here the "Dog" CLASS inherits from the "Animal" CLASS 

class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Dog extends Animal{
    //
}



/*----------------------------------*/ (II)
// INHERITANCE gives a class ALL the PROPERTIES of the class it is extending or inheriting FROM
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
console.log(dog); // Dog {name: 'Pug'}
console.log(dog.name); // Pug



/*----------------------------------*/ (III)
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
console.log(dog.name); // Pug 



/*----------------------------------*/ (IV)
// a SUBCLASS also inherits its SUPERCLASS's METHODS
// the "name" PROPERTY of "class Dog" gets created through the constructor of "class Animal"
class Animal {
    constructor(name) {
        this.name = name;
    }

    eat() {    // eat() => METHOD
        console.log(this.name + " is eating");
    }
}
class Dog extends Animal {    // Dog OBJECT
    //
} 

var dog = new Dog ("Webster");
dog.eat(); //!  CALL the eat() METHOD
// Webster is eating



/*----------------------------------*/ (V)
// we can create as many as SUBCLASSES of Animal as we want 
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



/*----------------------------------*/ (VI)
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



/*----------------------------------*/ (VII)
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
dog.bark(); // CALL the bark() METHOD => Spot is barking



/*----------------------------------*/ (VIII)
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
class Bird extends Animal {
    bark() {
        console.log(this.name + " is barking");
    }
}
var dog = new Dog ("Spot");
var bird = new Bird("Sparrow")
dog.bark(); // CALL the bark() METHOD // // Spot is barking
bird.bark(); // CALL the bark() METHOD // // Sparrow is barking  // => computer is dumb......



/*----------------------------------*/ (IX)
// to create an instance from Bike, with a set "speed PROPERTY"
// we use     var bike = new Bike("15 km/h");  
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
}
class Bike extends Vehicle {
    //
}

var bike = new Bike("15 km/h");
console.log(bike); // Bike {speed: '15 km/h'}
console.log(bike.speed); // 15 km/h



/*----------------------------------*/
/*----------------------------------*/ (X)
// to set a bookmark for "cookbook" OBJECT  //!!!!!!!!
class Book {
    constructor(title) {
        this.title = title;
        this.page = 4;
    }

    setBookmark(page) {
        this.page = page;
    }
}
class Cookbook extends Book {
    setBookmark(page) {
        console.log(this.page + " is marked");
    }
}

var cookbook = new Cookbook("Pie");
cookbook.setBookmark(15); // 4 is marked
console.log(cookbook); // Cookbook {title: 'Pie', page: 4}
console.log(cookbook.title); // Pie
console.log(cookbook.setBookmark(15)); // 4 is marked
console.log(cookbook.page); // 4 



/*----------------------------------*/ (XI)
// ******************************
// describe correctly "student"
// it "OWNS" two properties and "INHERITS" one method
class Student {
    constructor(major, year) {
        this.major = major;
        this.year = year;
    }
    
    submitHomework() {
        console.log("Homework already submitted");
    }
}
var student = new Student("bio", "junior");
console.log(student.submitHomework()); // Homework already submitted
    
    

/*----------------------------------*/ (XII)
// ******************************
class Book {
    constructor(title) {
        this.title = title;
        this.page = 4;
    }

    setBookmark(page) {
        this.page = page;
    }
}
class Cookbook extends Book {
    setBookmark(page) {
        this.page = 15;  // !!!!! (like this the SUPERCLASS will be OVERRIDDEN
        console.log(this.page + " is marked");
    }
}

var cookbook = new Cookbook("Pie");
cookbook.setBookmark(15); //! 15 is marked
console.log(cookbook); //! Cookbook {title: 'Pie', page: 15}
console.log(cookbook.title); // Pie
console.log(cookbook.setBookmark(15)); //! 15 is marked
console.log(cookbook.page); //! 15 



/*----------------------------------*/ (XIII)
// ******************************
// Sally is a 40-yo mother of two kids
// create a new INSTANCE that encapsulates her information
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Parent extends Person {
    constructor(name, age, kids) {
        super(name, age);
        this.kids = kids;
    }
}
var parent = new Parent("Sally", 40, 2);
console.log(parent); 
// Parent {name: 'Sally', age: 40, kids: 2}



/*----------------------------------*/ (XIV)
// ******************************
// create a new class called "Professor"
// whose INSTANCES receive both "name" and "subject" PROPERTIES
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}
class Professor extends Teacher {}
    
    
    
/*----------------------------------*/ (XV)
// ******************************
// what is the best way to set both the "company" and "language" properties on "dev" ?
class Employee {
    constructor(company) {
        this.company = company;
    }
}

class Dev extends Employee {
    constructor(company, language) {
        super(company);
        this.language = language;
    }
}

var dev = new Dev("Mimo", "JS");
console.log(dev.company); // Mimo
console.log(dev.language); // JS
    
    
    
    
    
    

// 2021.10.22 FROM (MIMO) 
/*----------------------------------*/
// CLASSES //! INSTANCES ( created by "constructor()" )
// CLASSES let us create a lot of similar OBJECTS at the beginning 
// and then change them individually over time
// here, users of a social media platform that were created from an initial class
// every time we create an OBJECT from a class, we creat an INSTANCE of that class

class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
    }
}
var user1 = new User("Isaac"); //! => "user1" is an INSTANCE
// we create an INSTANCE of the "User" class
// and store it in the VARIABLE "user1"




/*----------------------------------*/
// each INSTANCE is INDEPENDENT 
// when we create a new instance, it doesn't affect any other instances
class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
    }
}
var user1 = new User("Isaac"); 
var user2 = new User("Gabriel"); 
console.log(user1); // User {name: 'Isaac', isOnLine: true}
console.log(user2); // User {name: 'Gabriel', isOnLine: true}




/*----------------------------------*/
// change ther PROPERTY of an INSTANCE doesn't affect any other instances
class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
    }
}
var user1 = new User("Isaac"); 
user1.isOnLine = false; // property changed
console.log(user1); //! User {name: 'Isaac', isOnLine: false}

var user2 = new User("Gabriel"); 
console.log(user2); // User {name: 'Gabriel', isOnLine: true}




/*----------------------------------*/
// INSTANCES let us keep track of complicated data like a hug number of users on a website
// INSTANCES start from the same CLASS TEMPLATE but can develop in different ways
// here we keep track of four users and whether they're online. A real website might keep track of hundreds
class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
    }
}
var user1 = new User("Isaac"); 
var user2 = new User("Gabriel"); 
var user3 = new User("Ales"); 
var user4 = new User("Pierre"); 
user1.isOnLine = false; //!
user2.isOnLine = false; //!
console.log(user1); 
console.log(user2); 
console.log(user3); 
console.log(user4); 




/*----------------------------------*/
// CHANGING A CLASS "affects" all INSTANCES of that class
// add a "status" PROPERTY so that all users have a short status description from now on
class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
        this.status = "Hey, I am using Mimo"; //!
    }
}
var user1 = new User("Isaac"); 
var user2 = new User("Gabriel"); 
var user3 = new User("Ales"); 
var user4 = new User("Pierre"); 

console.log(user1.status); 
console.log(user2.status); 
console.log(user3.status); 
console.log(user4.status); 
// Hey, I am using Mimo
// Hey, I am using Mimo
// Hey, I am using Mimo
// Hey, I am using Mimo




/*----------------------------------*/
//! when CHANGING A CLASS, we can change both its PROPERTIES and its METHODS
// add a "status" PROPERTY so that all users have a short status description from now on
class User {
    constructor(name) {
        this.name = name;
        this.isOnLine = true;
    }

    sayHi() { //!
        console.log("Hello, I'm " + this.name);
    }
}
var user1 = new User("Isaac"); 
var user2 = new User("Gabriel"); 
var user3 = new User("Ales"); 
var user4 = new User("Pierre"); 
user1.sayHi();
user2.sayHi();
user3.sayHi();
user4.sayHi();
// Hello, I'm Isaac
// Hello, I'm Gabriel
// Hello, I'm Ales
// Hello, I'm Pierre




/*----------------------------------*/
// the CONSTRUCTOR is what creates an INSTANCE
// but it doesn't always need to have properties inside of it
// it works even when //! EMPTY
// "empty" CONSTRUCTOR means NOTHING in between the { }
class User {
    constructor() {

    }

    sayHi() { //!
        console.log("Hello");
    }
}
var user1 = new User(); 
var user2 = new User(); 
var user3 = new User(); 
user1.sayHi();
user2.sayHi();
user3.sayHi();
// Hello
// Hello
// Hello




/*----------------------------------*/
// the CONSTRUCTOR //! absent
// 'cause a default CONSTRUCTOR kicks in when it is NOT THERE
// user1 INSTANCE is created with an empty constructor added behind the scenes when running the code
class User {
    sayHi() { //!
        console.log("Hi there!");
    }
}
var user1 = new User(); 
var user2 = new User(); 
var user3 = new User(); 
user1.sayHi();
user2.sayHi();
user3.sayHi();
// Hi there!
// Hi there!
// Hi there!




/*----------------------------------*/
//
class Car {
    showWarning() { //!
        console.log("Fasten seatbelts!");
    }
}
var car = new Car();
car.showWarning();
// Fasten seatbelts!

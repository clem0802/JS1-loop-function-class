// 2021.11.15 FROM (MM) 
/*----------------------------------*/
// CLASSES //! INSTANCES [ created by "constructor()" ]


/*----------------------------------*/
// code incomplete
class Employee {
  constructor(company) {
    this.company = company;
  }
}

class Developer extends Employee {
  constructor(company, language) {
//  this.company = company;  => (taken off)
    super(company);  // put in this one instead 
    this.language = language;
  }
}
var dev = new Developer("Mimo", "JavaScript");
console.log(dev); // Developer {company: 'Mimo', language: 'JavaScript'}



/*----------------------------------*/
// call the "drone" VARIABLE's inherited METHOD
class Drone {
  fly() {
    console.log("bBBZzzzzzzzzzzzzzzzz"); // bBBZzzzzzzzzzzzzzzzz
  }
}
var drone = new Drone();
drone.fly(); 



/*----------------------------------*/
// choose the right "class" for "phone"
class Phone {
  call(contact) {
    console.log("Calling " + contact);
  }
}

class Cell extends Phone {
  surfWeb() {
    console.log("Opening homepage");
  }
}

class Smartphone extends Cell {
  watchMovies() {
    console.log("Loading movies");
  }
}
var phone = new Cell(); // choose "Cell" so "phone" can call and surf, but can't watch movies



/*----------------------------------*/
// for each instance, choose the correct inherited METHOD to call
class Printer {
  print() {
    console.log("Printing");
  }
}

class Copier {
  copy() {
    console.log("Copying");
  }
}

var device1 = new Copier();
var device2 = new Printer();
device1.copy(); // an INSTANCE
device2.printer(); // an INSTANCE



/*----------------------------------*/
// in a chat app, the admin is the only user who can send an invite
// set a METHOD called "invite()" directly on "admin"
class User {
  constructor(username) {
    this.username = username;
  }
}
var user1 = new User("Tim");
var user2 = new User("Sue");
var admin = new User("Pat");
                     
admin.invite = function(user) {
  console.log(user + " invited");
}

/* 
   ƒ (user) {
     console.log(user + " invited");
   }
*/





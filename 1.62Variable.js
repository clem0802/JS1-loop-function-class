/*--------------------*/
// use variables to store the item's stars and the ratings
// then compare them to see where the item stands
var stars = 3; // CURRENT PRODUCT
var great = 5;
var good = 4;
var ok = 3;
console.log(stars === great); // check if the number of stars of the current product is EQUAL to the variable "great"
console.log(stars === good);
console.log(stars === ok);


/*--------------------*/
// check if "speed" and "maxSpeed" are EQUAL
var speed = 170;
var maxSpeed = 415;
var maxReached = speed === maxSpeed;
console.log(maxReached); // false


/*--------------------*/
// check if the value of "today" is EQUAL to the value of "birthday"
var today = 17;
var birthday = 13;
console.log(today === birthday); // false


/*--------------------*/
// check if the chosen number isn't equal to "0"
var chosenNumber = 3;
var notZero = chosenNumber !== 0;
console.log(notZero); // true


/*--------------------*/
// to check a flight booking website, to know if a flight is fully booked
// save the maximum number of bookings and the current bookings in variales and then compare them
// this code helps check if a flight is booked out by cmparing the number of booked seats to 30, 
// => which is the maximum bookings number
var maximum = 30;
var seatBooked = 28;
var full = seatsBooked === maximum;
console.log("Booked out: " + full);


/*--------------------*/
// what does this code display in the console? 
var player1 = 0;
var player2 = 10;
player1 = 10;
var sameScore = player1 === player2;
console.log(sameScore); // true


/*--------------------*/
// what does the code display on the console? 
var downloaded = 9;
downloaded = downloaded + 1;
var inProgress = downloaded !== 10;
console.log(inProgress); // false


/*--------------------*/
// create an "isWinner" variable
// compare if "chosenNumber" equals "37"
// and store the result in the "isWinner" variable
var chosenNumber = 20;
chosenNumber === 37;
var isWinner = chosenNumber === 37; // false


/*--------------------*/
// code the operator to make "noPoints" store "false"
var points = 142;
var noPoints = points === 0;
console.log(noPoints); // false


/*--------------------*/
// create a "sameAge" variable
// compare if "age1" is equal to "age2" 
// and store the result in the "sameAge" variable
var age1 = 7;
var age2 = 9;
age1 === age2;
var sameAge = age1 === age2; // false



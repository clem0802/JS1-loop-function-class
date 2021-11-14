/*-------------------------------*/ SYNTAX (2021.11.14 from MM)
/*-------------------------------*/ SYNTAX


/------------------------- VARIABLE
/------------------------- VARIABLE (simple)
var today = 17;
var birthday = 13;
console.log(today === birthday); // false


/------------------------- VARIABLE (>,<,>=,<=)
var score = 32;
var minScore = 30;
var pass = score >= minScore;
console.log(pass); // true


/------------------------- VARIABLE (if-else)
var saved = 75;
if (saved >= 100) {
  console.log("Saving goal reached.");
} else {
  console.log("Continue to save!");
} // Continue to save!


/------------------------- VARIABLE (self-assigning)
var wallet = 250;
wallet -= 50
console.log(wallet); // 200


/------------------------- VARIABLE (different types)
var user = "Joe";
var isOnline = true;
var message = user + " is online: " + isOnline;
console.log(message); // Joe is online: true


/------------------------- LOOP
/------------------------- LOOP (while)
var speed = 0;
while (speed < 100) {
  speed += 11;
}
console.log(speed); // 101
/------

var counter = 0;
while (counter < 4) {
    counter++;
    console.log(counter);
}
// 1
// 2
// 3
// 4 


/------------------------- LOOP (for)
for (var i = 1; i <= 3; i++) {
  console.log(i + ".");
} // 1.  2.  3. 


/------------------------- ARRAY
/------------------------- ARRAY
var cats = ["Garfield", "Tom"];
console.log(cats); // ["Garfield", "Tom"]  =>2 elements


/------------------------- ARRAY
var first = "Enes";
var second = "Isaac";
var third = "Lucia";
var winners = [first, second, third];
console.log(winners[2]); // Lucia


/------------------------- FUNCTION
/------------------------- FUNCTION
function weeksAYear() {
  console.log(52);
}
weeksAYear(); // 52
/------

var device = "iPhone";
function bluetoothMode() {
  console.log("YES, bluetooth is on.");
}
bluetoothMode(); // YES, bluetooth is on.
/------

function makeFullName() {
  var first = "Hannah ";
  var last = "Hunt";
  console.log(first + last);
}
makeFullName(); // Hannah Hunt
/------

function showWinners(first, second){
    console.log("1st: " + first);
    console.log("2nd: " + second);
}
showWinners("Joe", "Tom");
// 1st: Joe
// 2nd: Tom
/------

function createId(name, year){
    return name + year + "@hutmail.com";
}
var email = createId("clemence", "1998");
console.log(email);
//! clemence1998@hutmail.com
/------

// How do we use the retunr value of a function? => we call the function and use it like any other value
// How do we store the return value in a variable? => we call the function and store it in a variable
// a function can return any type of value, like a string, number, or boolean
// this function returns the number value inside "result"
function timesTen(number){
    var result = number * 10;
    return result;
}
console.log(timesTen(15)); // 150
/------

function displayCash() {
  var money = 100;
  var currency = " Euros";
  console.log(money + currency);
}
displayCash(); // 100 Euros
/------

function moviefinder() {
  var genre = "comedy";
  var text = "Finding " + genre + " movies";
  console.log(text);
}
moviefinder(); // Finding comedy movies
/------

function checkPoints() {
  var points = 7;
  var required = 10;
  console.log("Requirement reached");
  console.log(points > required); //! this display statement checks IF "points" is greater than "required"
}
checkPoints();
// Requirement reached
// false


/------------------------- FUNCTION (with PARAMETER)
// PARAMETER = a special VARIABLE
function checkScore(attempt) {
  var highScore = 97;
  console.log(attempt > highScore);
}
checkScore(55); // false
/------

function addTenTo(number) {
  console.log(number + 10);
}
addtenTo(15); // 25
/------

function removeUser(user) {
  console.log("Removing: " + user);
}
removeUser("Lisa"); // Removing: Lisa



/------------------------- OBJECT
/------------------------- OBJECT
var car = { };
// we use OBJECT when we have several VARIABLES related to each other
// to access to this object's PROPERTIES: car.make // car.model // car.year

var car = {
  make: "Toyota",
  model: "Camry",
  year: 2020
};
console.log(car.make); // Toyota
console.log(carà; // {make: 'Toyota', model: 'Camry', year: 2020}

            
/-------------------------
var pet = {
  animal: "dog",
  name: "Webster",
  rescue: true,
  age: 3,
  litterMates: ["Bo", "Blue", "Clifford"]
};
console.log(pet); // {animal: 'dog', name: 'Webster', rescue: true, age: 3, litterMates: Array(3)}
/--------

var pet = {
  animal: "dog",
  name: "Webster",
  rescue: true,
  age: 3,
  litterMates: ["Bo", "Blue", "Clifford"]
};
pet.animal = "cat"; // => (PET.ANIMAL=) changes the animal property from dog to cat
console.log(pet); // {animal: 'cat', name: 'Webster', rescue: true, age: 3, litterMates: Array(3)}



/------------------------- METHOD
/------------------------- METHOD
var 











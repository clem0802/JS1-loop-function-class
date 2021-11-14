/*-------------------------------*/ SYNTAX
/*-------------------------------*/ SYNTAX


/---------------------- VARIABLE
var today = 17;
var birthday = 13;
console.log(today === birthday); // false


/---------------------- VARIABLE (>,<,>=,<=)
var score = 32;
var minScore = 30;
var pass = score >= minScore;
console.log(pass); // true


/---------------------- VARIABLE (if-else)
var saved = 75;
if (saved >= 100) {
  console.log("Saving goal reached.");
} else {
  console.log("Continue to save!");
} // Continue to save!


/---------------------- VARIABLE (self-assigning)
var wallet = 250;
wallet -= 50
console.log(wallet); // 200


/---------------------- VARIABLE (different types
var user = "Joe";
var isOnline = true;
var message = user + " is online: " + isOnline;
console.log(message); // Joe is online: true


/---------------------- LOOP (while)
var speed = 0;
while (speed < 100) {
  speed += 11;
}
console.log(speed); // 101


var counter = 0;
while (counter < 4) {
    counter++;
    console.log(counter);
}
// 1
// 2
// 3
// 4 


/---------------------- LOOP (for)
for (var i = 1; i <= 3; i++) {
  console.log(i + ".");
} // 1.  2.  3. 


/---------------------- ARRAY
var cats = ["Garfield", "Tom"];
console.log(cats); // ["Garfield", "Tom"]  =>2 elements


/---------------------- ARRAY
var first = "Enes";
var second = "Isaac";
var third = "Lucia";
var winners = [first, second, third];
console.log(winners[2]); // Lucia


/---------------------- FUNCTION

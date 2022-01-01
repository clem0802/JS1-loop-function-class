/*---------------------------*/ "FOR" LOOP
/*---------------------------*/
// FOR loop is easier to read than WHILE loop
// the number of times a FOR loop repeats is easy to find inside the parentheses
// 'cause the "FOR" loop prevents us from writing infinite loops


/*---------------------------*/
console.log("Best Cars of 1885:");
for (var i = 1; i <= 3; i++) {
  console.log(i + ".");
}
/*
Best Cars of 1885:
1.
2.
3.
*/



/*---------------------------*/
for (var i = -5; i < 0; i++) {
  console.log(i);
} //  -5  -4  -3  -2  -1



/*---------------------------*/
console.log("Fastest runners:");
for (var index = 1; index < 4; index++) {
  console.log(index + ".");
}
/*
Fastest runners:
1.
2.
3.
*/



/*---------------------------*/
for (var i=0; i<3; i++) {
console.log("Poverty should be banned!");
}
// Poverty should be banned!
// Poverty should be banned!
// Poverty should be banned!



/*---------------------------*/
console.log("#");
var line = "";
for (var i=1; i<=5; i++) {
  line += "~";
  console.log(line)
}
// #
// ~
// ~~
// ~~~
// ~~~~
// ~~~~~



/*---------------------------*/
var lyric = "I want to hold you h";
for (var i=0; i<6; i++) {
  lyric += "a";
}
lyric += "nd";
console.log(lyric); // I want to hold you haaaaaand



/*---------------------------*/
var notifictaions = 4;
for (var i=0; i<notifications; i++) {
  console.log("You've got mail!");
}
// You've got mail!
// You've got mail!
// You've got mail!
// You've got mail!



/*---------------------------*/ (VISAGE D'UN BONHOMME)
console.log("_ _");
console.log(". .");
var nose = "  >";
for (var i=0; i<3; i++) {
  nose += "-"
}
console.log(nose);
console.log(" o ");
/*
_ _
. .
  >---
 o
*/



var timesToRepeat = 3;
var message = "New comment!";
var counter = 0;
while (counter < timesToRepeat) {
  console.log(message);
  counter++;
  console.log("Monday, 11 am");
}
// New comment!
// Monday, 11 am
// New comment!
// Monday, 11 am
// New comment!
// Monday, 11 am





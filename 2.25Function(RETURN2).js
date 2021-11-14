// 2021.11.14 FROM (MM) 
/*----------------------------------*/
// FUNCTIONS => RETURN (plutôt) without PARAMETER
// when we add a RETURN value to a function, the function returns a value to the code that calls it
// the value we want to RETURN from a function goes AFTER the "RETURN" keyword


/*----------------------------------*/
function getBrightness() {
  var brightness = 67;
  return brightness;
}
console.log(getBrightness()); // 67


/*----------------------------------*/
function makeJokeName() {
  var first = "Kitty ";
  var last = "Perry";
  return first + last;
}
var joke = makeJokeName();
console.log(joke); // Kitty Perry


/*----------------------------------*/
function retrieveScore() {
  return 100 + 100;
}
console.log(retrieveScore()); // 200


/*----------------------------------*/
function accomType() {
  var type = "What the heck??";
  return type;
}
console.log(accomType()); // What the heck??


/*----------------------------------*/
function accessDenied() {
  return "Access is denied";
} // undefined, but nothing wrong with this code


/*----------------------------------*/
function displayTheNumber(number) {
  return "The number is " + number;
}
console.log(displayTheNumber(50));




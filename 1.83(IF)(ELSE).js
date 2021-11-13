//--------------------
// we will use "if" and "else" statements to create an app that keeps track of our financial saving goals
// we have to check if the saved amount is (greater than) or (equal to) our saving goal
// to take care of the case when we haven't saved enough
// code an EMPTY "else" statement at the end of the "if" statement
// the "if" / "else" statement prints otu different messages depending on the amount of money saved
var saved = 75;
if (saved >= 100) {
  console.log("Saving goal reached.");
} else {
  console.log("Continue to save!");
}




//--------------------
var stepsCount = 7600;
var dailyGoal = 10000;
if (stepsCount >= dailyGoal) {
  console.log("Goal achieved!");
} else {
  var left = dailyGoal - stepsCount;
  console.log(left + " steps till Daily Goal!"); // 2400 steps till Daily Goal!
}




//--------------------
var number1 = 4;
var number2 = 2;
var multiply = false;
if(multiply) {
  console.log(number1 * number2);
  
  
  
  
var rainy = true;
var takeCab = false;
var walk = false;

if (rainy) {
  takeCab = true;
  console.log("Taking a cab");
} else {
  walk = true;
  consolelog("Walking home");
} // => Taking a cab
} else {
  console.log(number1 / number2);
} // => 2




//--------------------
var savings = 1300;
var bookHoliday = true;
if (bookHoliday) {
  savings = savings - 1000;
  console.log("Savings: " + savings);
} else {
  console.log("Savings: " + savings);
} // => Savings: 300




//--------------------
var petType = "mouse";
var name = "";
if (petType === "cat") {
  name = "Cannoli";
} else {
  name = "Charlie";
} console.log("Name: " + name);




//--------------------
var foundCoins = 4;
var sppedBoost = true;
if(foundCoins === 10) {
  console.log("Spped boost ON");
} else {
  speedBoost = false;
  console.log("Speed boost OFF");
} // => Speed boost OFF






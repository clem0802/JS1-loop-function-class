//--------------------
var color = "red";
if (color === "blue") {
  console.log("Blue is awesome!");
} else if (color === "red") {
  console.log("Red is a nice color.");
} else if (color === "white") {
  console.log("White is lovely.");
} else {
  console.log("That's an ok color.");
} // => Red is a nice color.




//--------------------
var speed = 45;
var efficiency = "low";

if (speed <= 30) {
  efficiency = "medium";
} else if (speed < 90) {
  efficiency = "high";
} else {
  efficiency = "low";
}
console.log("Fuel efficiency: " + efficiency);
// Fuel efficiency: high

//--------------------- (WHILE LOOPS)
while (true) {
  console.log("Searching for Wifi");
} 
// => this makes an INFINITE LOOP
// => this will crash the program or webpage
// a WHILE loop halps to decide when to run or skip the code



//---------------------
var moreComments = true;
while (moreComments === true) {
  moreComments = false;
  console.log("New comment:");
  console.log("Maria: That website looks great!");
}
// New comment:
// Maria: That website looks great!



//--------------------- ATTENTION //!
var isIOn = true;
while (isOn === true) {
  console.log("Before: " + isOn);
  isOn = false;
  console.log("After: " + isOn);
}
// Before: true
// After: false




//---------------------
var number = 1;
while (number <= 3) {
  console.log(number);
  number++;
}
// 1
// 2
// 3




/*---------------------------*/
var number = -5;
while (number < 5) {
  console.log(number);
  number++;
}
// -5  -4  -3  -2  -1  0  1  2  3  4  



/*---------------------------*/
var speed = 0;
while (speed < 100) {
  speed += 10;
}
console.log(speed); // 100



/*---------------------------*/
var speed = 20;
while (speed < 100) {
  speed += 10;
}
console.log(speed); // 100

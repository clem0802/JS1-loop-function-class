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

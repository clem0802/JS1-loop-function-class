// 2021.10.12 FROM  (MIMO) https://
/*----------------------------------*/
// EXOs

var answer = "Picasso";
if (answer === "Picasso"){
    console.log(answer + " is correct!"); // Picasso is correct!
}


var answer = "Matisse";
if (answer !== "Picasso"){
    console.log(answer + " is wrong!"); // Matisse is wrong!
}


var age = 75;
if (age >=50){
    console.log("Discount applied"); // Discount applied
}


var isDay = true;
if (isDay === true){
    console.log("Lights off!"); // Lights off!
}


var score = 51;
var pass = score > 50;
if (pass){
    console.log(pass); //! true
}


var song = "Dont stop me now";
var replayTimes = 3454;
if (replayTimes >= 300){
    console.log("Your top song this week:");
    console.log(song);
}


var diet = "vegetarian";
var veggieRestaurant = "Root";
var restaurant = "DelPosto";
if (diet === "vegetarian"){
    console.log("Try out: ");
    console.log(veggieRestaurant);
}


var age = 20;
var canDrive = false;
if (age > 18){
    canDrive = true;
}
console.log(canDrive);


var inboxFull = true;
var showAlert = inboxFull === true;
if (showAlert){
    console.log("Your inbox is full."); // Your inbox is full.
    console.log("You can't receive any more emails."); // You can't receive any more emails.
}


var membership = "gold";
if(membership === "gold"){
    console.log("Members get a personnal trainer.");
} else{
    console.log("Members get a welcome drink.");
}


var points = 7999;  //? this exo is very interesting !!!
var pointsNeeded = 8000;
if (points >= pointsNeeded){
    console.log("You're Level 2!");
} else{
    var left = pointsNeeded - points; //! attention à cette var dans ELSE
    console.log("You need " + left + " point(s) to get to Level 2");
}


var hour = 14;
if (hour < 12){
    console.log("Good morning");
} else if (hour < 17){
    console.log("Good afternoon"); // Good afternoon
}


var hour = 20;
if (hour < 12){
    console.log("Good morning");
} else if (hour < 18){
    console.log("Good afternoon");
} else if (hour <21){
    console.log("Good evening"); // Good evening
} else {
    console.log("Good night");
}


var score = 70;
if (score === 100){
    console.log("You got A+, amazing!");
} else if (score > 90){
    console.log("You got an A!")
} else if (score > 70){
    console.log("Your grade is just ok");
} else if (score > 60){
    console.log("You passed");
} else {
    console.log("You didn't make it, but you will do it better next time")
}

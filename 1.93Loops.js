// 2021.10.21 FROM (MM) 
/*----------------------------------*/
// REUSABLE PROGRAMS-3 (LOOP1)
// use functions to call loops and influence their output
// LOOPs repeat the instructions inside their braces
for (var i=0; i<5; i++){
    console.log(i);
} 
// 0
// 1
// 2
// 3
// 4



/*----------------------------------*/
// if we need to repeat the same instructions more than once, we can add a loop inside a function //! REPEAT again and again
function displayNumbers(){
    for (var i=0; i<=3; i++){
        console.log("So here comes " + i);
    }
}
displayNumbers();
displayNumbers();
displayNumbers();
// So here comes 0
// So here comes 1
// So here comes 2
// So here comes 3
// So here comes 0
// So here comes 1
// So here comes 2
// So here comes 3
// So here comes 0
// So here comes 1
// So here comes 2
// So here comes 3




// we can use parameters to get different results from the same loop
displayExercise(10, "Jumping Jack");
displayExercise(10, "Push-Up");
displayExercise(10, "Squat");




/*----------------------------------*/
// to change what a loop displays, we use parameters to do things like:
// adding a string right after the counter variable
function displayNumbers(message){
    for (var i=0; i<10; i++){
        console.log(i + message);
    }
}
displayNumbers(" ginger beers on the wall");
// 0 ginger beers on the wall
// 1 ginger beers on the wall
// 2 ginger beers on the wall
// 3 ginger beers on the wall
// 4 ginger beers on the wall
// 5 ginger beers on the wall
// 6 ginger beers on the wall
// 7 ginger beers on the wall
// 8 ginger beers on the wall
// 9 ginger beers on the wall




/*----------------------------------*/
// adding loops to functions makes tedious tasks fast and flexible
function displayNumbers(message){
    for (var i=0; i<10; i++){
        console.log(i + message);
    }
}
displayNumbers(" ginger beers on the wall");
displayNumbers(" root beers in the sea");
// 0 ginger beers on the wall
// 1 ginger beers on the wall
// 2 ginger beers on the wall
// 3 ginger beers on the wall
// 4 ginger beers on the wall
// 5 ginger beers on the wall
// 6 ginger beers on the wall
// 7 ginger beers on the wall
// 8 ginger beers on the wall
// 9 ginger beers on the wall
// 0 root beers in the sea
// 1 root beers in the sea
// 2 root beers in the sea
// 3 root beers in the sea
// 4 root beers in the sea
// 5 root beers in the sea
// 6 root beers in the sea
// 7 root beers in the sea
// 8 root beers in the sea
// 9 root beers in the sea




/*----------------------------------*/
// we can also use parameters to change operations, like multiplication
// here, to create different multiplication tables
function displayNumbers(multiplier){
    for (var i=0; i<=10; i++){
        console.log(i * multiplier);
    }
}
displayNumbers(10);
// 0
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100




/*----------------------------------*/
// this function always displays the same sequence of numbers
//! BECAUSE THE OUTPUT ISN'T UPDATED BY ANY PARAMETERS
function displayNumbers(){
    for (var i=0; i<=10; i++){
        console.log(i);
    }
}
displayNumbers();
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10




/*----------------------------------*/
function displayNumbers(message){
    for (var i=5; i>0; i--){
        console.log(i + message);
    }
}
displayNumbers(" mississippi");
// 5 mississippi
// 4 mississippi
// 3 mississippi
// 2 mississippi
// 1 mississippi




/*----------------------------------*/
function displayNumbers(message){
    for (var i=1; i<=4; i++){
        console.log(i + message);
    }
}
displayNumbers(" and");
// 1 and
// 2 and
// 3 and
// 4 and




/*----------------------------------*/
function displayRhythmCount(message){
    for (var i=1; i<=4; i++){
        console.log(i + message);
    }
}
displayRhythmCount("");
displayRhythmCount(" and");
// 1
// 2
// 3
// 4
// 1 and
// 2 and
// 3 and
// 4 and




/*----------------------------------*/ //!!!!!!!!
function displayNumbers(addition){
    for (var i=0; i<3; i++){
        console.log(i + addition);
    }
}
displayNumbers(10);
// 10 
// 11
// 12




/*----------------------------------*/ //! ATTENTION !!!
function displayNumbers(){
    for (var i=0; i<10; i++){
        console.log(i);
    }
}
displayNumbers();
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9




/*----------------------------------*/ 
function displayAlert(message){
    for (var i=0; i<3; i++){
        console.log(message);
    }
}
displayAlert("Fasten seat belt");
displayAlert("Check mirrors");
// Fasten seat belt 
// Fasten seat belt
// Fasten seat belt
// Check mirrors
// Check mirrors
// Check mirrors




/*----------------------------------*/
function displayPageNumbers(page){
    for (var i=0; i<=20; i++){
        console.log(page + i);
    }
}
displayPageNumbers("Page ");
// Page 0
// Page 1
// Page 2
// Page 3
// Page 4
// Page 5
// Page 6
// Page 7
// Page 8
// Page 9
// Page 10
// Page 11
// Page 12
// Page 13
// Page 14
// Page 15
// Page 16
// Page 17
// Page 18
// Page 19
// Page 20

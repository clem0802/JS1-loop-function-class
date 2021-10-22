// 2021.10.21 FROM (MIMO) 
/*----------------------------------*/
// REUSABLE PROGRAMS-4 (LOOP2)

// learn the basics of using and controlling loops inside functions
// "for" LOOPs are blocks of code, we add them to functions 
// the same way we add "if" statements, BETWEEN BRACES and INDENTED
function drawVerticalLine(){
    for (var i=0; i<3; i++){
        console.log("|");
    }
}
drawVerticalLine();
// |
// |
// |


// the number 3 => displaying 3 times
summonBeetlejuice("Beetlejuice", 3);




/*----------------------------------*/
// use parameters to mark the endpoint of a loop
function drawVerticalLine(times){
    for(var i=0; i<times; i++){
        console.log("|");
    }
}
drawVerticalLine(5);
// |
// |
// |
// |
// |




/*----------------------------------*/
// to control where a loop starts, we use a parameter to set the counter variable's value
//! this code displays the days left in a month
function displayDaysLeft(day){
    for(var i=day; i<31; i++){
        console.log(i);
    }
}
displayDaysLeft(26);
// 26
// 27
// 28
// 29
// 30




/*----------------------------------*/
// use parameters to set both the "start" and "end" values
// this code only displays numbers in between the values passed to the function
//! we control a loop's starting point by using a parameter to set the control variable
function displayInterval(start, end){
    for(var i=start; i<end; i++){
        console.log(i);
    }
}
displayInterval(20,30);
// 26
// 27
// 28
// 29 




/*----------------------------------*/
function drawVerticalLine(times){
    for (var i=0; i<times; i++){
        console.log("*");
    }
}
drawVerticalLine(5);
// *
// *
// *
// *
// *




/*----------------------------------*/
//! COUNTDOWN
function displayCountdown(start){
    for (var i=start; i>0; i--){
        console.log(i);
    }
    console.log("Launch!");
}
displayCountdown(3);
// 3
// 2
// 1
// Launch!




/*----------------------------------*/  //!
function displaySign(sign, times){
    for(var i=0; i<times; i++){
        console.log(sign);
    }
}
displaySign("$", 3); // sign, times
// $
// $
// $




/*----------------------------------*/
function displayYears(start, end){
    for(var i=start; i<=end; i++){
        console.log(i);
    }
}
displayYears(2000,2008);
// 2000
// 2001
// 2002
// 2003
// 2004
// 2005
// 2006
// 2007
// 2008

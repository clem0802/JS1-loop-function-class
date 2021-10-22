// 2021.10.06 FROM  https://javascript.info/ifelse
/*----------------------------------*/
// (N°10) CONDITIONAL BRANCHING: IF, ELSE...


let year = prompt('In which year was ECMAScriopt-2015 specification published?',''); // question block popped out, waiting for answer
if (year == 2015) {
    alert("That's correct!");
} else {
    alert("Sorry, your answer is not correct."); // any value except 2015
}


let year = prompt('In which year was ECMAScriopt-2015 specification published?',''); // question block popped out, waiting for answer
if (year > 2015) {
    alert("That's too late.");
} else if (year < 2015) {
    alert("That's too early.");
} else {
    alert("That's correct!");
}


let accessAllowed;
let age = prompt("How old are you?");
if (age>18){
    alert("You can enter.");
} else {
    alert("You cannot enter.");
}


/*----------------------------------*/
// QUESTION MARK OPERATOR (TERNARY)

let result = condition ? value1 : value2; 
//! "?" == if condition is truthy
// value1 is returned
//! ":" == otherwise, value2 is returned
let accessAllowed = (age > 18) ? true : false; // 


let age = prompt("What's your age?",''); //? messages affichés dans pop-up //moins de code
let message = (age<3)? "Hi, cuty baby." :
    (age<18)? "Hi, you are still very young." :
    (age<50)? "Hi, you are a mature person." :
    (age<100)? "Hi, you are very blessed." :
    "What an unusual age!!";
alert(message);


let age = prompt("What's your age?",''); //? messages affichés dans F12 (dév tool) // plus de code
if (age<3){
    message = "Hi, cuty baby.";
} else if (age<18){
    message = "Hi, you are still very young.";
} else if (age<50){
    message = "Hi, you are a mature person.";
} else if (age<100){
    message = "Hi, you are very blessed.";
} else {
    message = "What an unusual age!!";
}



let company = prompt("Which company created JavaScript?", '');
if (company == "Netscape"){
    alert("Correct!");
} else {
    alert("Wrong.");
}


// transform into ternary code
let result;
if(a+b<4){
    result="Below";
}else{
    result="Over";
}

let result = (a+b<4) ? "Below" : "Over"; // (solution)



/*----------------------------------*/
// QUESTION MARK OPERATOR (TERNARY) // EXO
let message;
if(login == "Employee"){
    message = "Hello";
}else if(login == "Director"){
    message = "Greetings, director.";
}else if(login == ""){
    message = "No login";
}else{
    message = "";
}


let message = (login == "Employee")? "Hello" :
              (login == "Director")? "Greetings, director." :
              (login == "")? "No login" :
              "";


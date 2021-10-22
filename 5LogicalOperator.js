// 2021.10.06 FROM  https://javascript.info/logical-operators
/*----------------------------------*/
// (N°11)(N°12) LOGICAL OPERATORS ||OR, &&AND, !NOT, ??NULLISH Coalescing
// || OR, returns the first "truty" value or the last one if no truthy value is found

let hour = 9;
if (hour < 10 || hour > 18){
    alert('The office is closed.'); // The office is closed.
} 

let hour = 13;
if (hour < 10 || hour > 18){
    alert('The office is closed.'); 
} else {
    alert('The office is open.'); // The office is open.
}


let hour = 12;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend){
    alert('The officie is closed.');
}

let hour = prompt("What time is it?",''); //? messages affichés dans pop-up //moins de code
let Saturday = "isWeekend";
let Sunday = "isWeekend";
let message = (hour <=10)? "Sorry, the office is closed." :
              (hour >=18)? "Sorry the office is already closed." :
              (hour = Saturday)? "Sorry, it is weekend" :
              (hour = Sunday)? "Sorry, it is weekend" :
              "Sorry, I don't understand.";

alert(message);


let firstName = "";
let lastName = "";
let nickName = "FunnyCoder";
alert(firstName || lastName || nickName || "Anonymous"); // FunnyCoder


/*----------------------------------*/
// && AND returns the first "falsy" value or the last value if none were found.
let hour = 12;
let minute = 30
if (hour == 12 && minute == 30) {
    alert("The time is 12:30"); // The time is 12:30
}

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0 (second operand, qui est faux)
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null (first operand, qui est faux)
alert( 0 && "no matter what" ); // 0


/*----------------------------------*/
// EXO:
// (!)NOT  
// (!!)NOT => used for converting a value to boolean type
// RECAP:
alert( null || 2 || undefined ); // ||(OR) returns the first "truthy" value
alert( alert(1) || 2 || alert(3) ); // ||(OR) returns 1, then 2

alert( 1 && null && 2 ); // &&(AND) returns the first "falsy" value => null
alert( alert(1) && alert(2) ); // &&(AND) returns 1, then "undefined"

alert( null || 2 && 3 || 4 ); // ||&&|| returns 3, 'cause 2 && 3 = 3
if (age >= 14 && <= 90); // the range between 14 and 90 (&& AND)
if (age < 14 || > 90); == if (!(age >= 14 && <= 90));// outside the range of 14 and 90 (|| OR) 


//! admin CHECK
let login = prompt("Who's there?", '');
if(login === "Admin"){
    let pass = prompt("Password?",'');

    if(pass === "TheMaster"){
        alert("Wlecome!");
    } else if(pass === '' || pass === null){
        alert('Canceled');
    } else{
        alert('Wrong password');
    }
} else if(login === '' || login === null){
    alert('Canceled');
} else{
    alert("I don't know you");
}



let message = (login == "Employee")? "Hello" :
              (login == "Director")? "Greetings, director." :
              (login == "")? "No login" :
              "";


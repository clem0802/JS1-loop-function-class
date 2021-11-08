// 2021.10.20 FROM (MM) 
/*----------------------------------*/
// REUSABLE PROGRAMS

// create functions that take decisions, first see how to nest conditional statements inside functions
// functions are blocks of code
// nested instructions are surrounded by braces and have an extra space on the left side
function displayMessage(message){
    console.log(message);
}
displayMessage('Approved'); // Approved



// we can add other code blocks inside a function
// extra pair of braces let us know which instructions belong where
function isRentingAge(age){
    if(age >= 25){
        console.log("Approved");
    }
}
isRentingAge(26); // Approved //! => FUNCTION CALL


// instructions outside of nested code blocks still get executed
// even if the code inside the conditional statement gets skipped
function isRentingAge(age){
    if(age >= 25){
        console.log("Approved");
    }
    console.log("Check complete");
}
isRentingAge(22); //! Check complete



// the space to the left is called "indentation"
// when we add a code block inside another, the entire code block gets indented by one space
function displayAlarm(time){
    if (time === "7:00"){
        console.log("Waky Waky");
    }
}
displayAlarm("7:00"); // Waky Waky



function isLying(boolean){
    console.log("Welcome to the Lie Detector 3000");
    if (boolean === false) {
        console.log("He's lying");
    }
}
isLying(false);
// Welcome to the Lie Detector 3000
// He's lying



function hasFailed(score){
    console.log("Checking Score");
    if (score <= 50){
        console.log("Failed");
    }
}
hasFailed(80); // Checking Score



function isLying(boolean){
    if(boolean === true){
        console.log("He's not lying");
    }
    console.log("Verification complete");
}

isLying(true);
// He's not lying
// Verification complete



function displaySalary(salary){
    if(salary < 2100){
        salary = salary + 500;
    }
    console.log(salary);
}
displaySalary(2000); // 2500



/*----------------------------------*/
// skip the instruction inside the if statement
function getTaxedSalary(salary){
    if(salary > 2100){      //! 
        salary = salary - 500;
    }
    return salary;
}
var income = getTaxedSalary(2500);
console.log(income); // 2000


function getTaxedSalary(salary){
    if(salary === 2100){
        salary = salary - 500;
    }
    return salary;
}
var income = getTaxedSalary(2500);
console.log(income); // 2500



// 2021.10.21 FROM (MM) 
/*----------------------------------*/
// REUSABLE PROGRAMS-1 (FUNCTIONS-CONDITIONS)
// when creating functions, we have to think about thwne and why we need conditional statements inside of them.
// anytime I enter a password, a function with a conditional statement decides what message to show me
function applySeniorDiscount(age){
    if(age>=65){
        console.log(age + " year old has 50% OFF");
    }
}
applySeniorDiscount(18);
applySeniorDiscount(67); // 67 years old has 50% OFF



//! isGreater()
function isGreater(a,b){
    if(a>b){
        console.log(a + " is greater than " + b);
    }
}
isGreater(13,10);



// ELSE (when the function changes based on its parameter)
function checkPassword(word){
    if (word === "12345"){
        console.log("Logging in");
    } else {
        console.log("Wrong password");
    }
}
checkPassword("swordfish");REUSABLE PROGRAMS
        console.log(a + " is greater");
    } else {
        console.log(a + " isn't greater");
    }
}
isGreater(10,20); // 10 isn't greater



function checkGreater(a,b){
    if(a === b){
        console.log("Numbers are equal");
    } else {
        console.log("Numbers aren't equal");
    }
}
checkGreater(10,10); // Numbers are equal

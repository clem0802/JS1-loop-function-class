// 2021.10.06 FROM  https://javascript.info/while-for
/*----------------------------------*/
// (N°13) LOOPS (while / for)

/*----------------------------------*/
// WHILE (aussi longtemps que...)
let i = 0;
while(i<3){
    alert(i);
    i++; // if this line missing, the loop would repeat forever
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}

let i = 0;
do {
    alert(i);
    i++;
} while(i<3);


/*----------------------------------*/
// FOR
//?  begin: let i=0 (executes once upon entering the loop)
//?  condition: i<3 (checked before every loop iteration, if false, the loop stops)
//?  body: alert(i); (runs again and again 'as long as' the condition is truthy)
//?  step: i++ (executes after the body on each iteration)
//! PATTERN: (if condition -> run body and run step)
//! PATTERN: (if condition -> run body and run step)
//! PATTERN: (if condition -> run body and run step)
for(begin; condition; step){
    // loop body
}



for(let i=0; i<3; i++){ // shows 0, then 1, then 2 //! INLINE VARIABLE
    alert(i);
}
alert(i); // ERROR, no such vvariable



let i=0;
for(i=0; i<3; i++){
    alert(i);
}
alert(i); // 3, visible, 'cause //! VARIABLE declared OUTSIDE of the loop



let i=0;
for(; i<3){
    alert(i++);
}


/*----------------------------------*/
// BREAKING THE LOOP
let sum=0;
while(true){
    let value= +prompt("Enter a number", '');
    if(!value) break;
    sum += value;
}
alert('sum: ' + sum); // if answers 60 in pop-up => sum: 60
                      // if answers nothing, => sum: 0



for (let i=0; i<10; i++){
    if(i%2 == 0) continue; // if true, skip the remaining part of the body
    alert(i); //! 1, 3, 5, 7, 9
}
/* For even values of i, the continue directive stops executing the body 
and passes control to the next iteration of for (with the next number)
so the alert is only called for odd values. */



for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        let input = prompt(`value at coords(${i},${j})`, '');
    }
}
alert('Done!');


outer: for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        let input = prompt(`value at coords(${i},${j})`, '');
        if (!input) break outer;
    }
}
alert('Done!');



/*----------------------------------*/
// Which values get shown by the "for" loop?
let counter = 0;
let  a = ++counter; //! PREFIX, returns new value
alert(a); // 1

let counter = 0;
let  a = counter++; //! POSTFIX, returns old value
alert(a); // 0

let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4  //? PREFIX

let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5  //? POSTFIX

for (let i = 0; i < 5; ++i) alert (i); // 0, 1, 2, 3, 4  //? PREFIX
for (let i = 0; i < 5; i++) alert (i); // 0, 1, 2, 3, 4  //? POSTFIX


/*----------------------------------*/
var area = "3 * 5";
console.log(area); // 3 * 5 (comme résultat)

var savings = 100;
var interest = 0.04;
console.log(savings * interest);

var total = 100;
var discount = 20;
console.log(total - discount);

var isMorning = true;
console.log(!isMorning);

// 2021.10.05 FROM  https://javascript.info/operators
/*----------------------------------*/
// (N°8) BASIC OPERATORS
// des opérateurs de calcul +-*/ en mathématiques
5 * 2 = 10 // 5 and 2 are operands (or, arguments)

alert(5%2);
alert(8**(1/3));
alert(3**5); // 243

let apples = "2";
let oranges = "3";
alert(appels + oranges); // 23

let apples = "2";
let oranges = "3";
alert(+apples + +oranges); // 5

let n = 2;
n = n + 5; // now n = 7 (same as n += 5)
n = n * 2; // now n = 14 (same as n *= 2)

let n = 2;
n *= 3+5; // n = 2x8 = 16
alert(n); // 16

flt_exp1 = 4.2**2;
alert(flt_exp1); // 17.64

flt_exp2 = 3.3**3;
alert(flt_exp2); // 35.937

flt_exp3 = 6.2**2;
alert(flt_exp3); // 38.44

flt_exp4 = 3**2.5;
alert(flt_exp4); // 15.588457268119896


/*----------------------------------*/
// COUNTER
let counter = 3;
counter++; // same as "counter = counter+1"
alert(counter); // 4

let counter = 3;
let  a = ++counter; //! prefix, returns new value
alert(a); // 4

let counter = 3;
let  a = counter++; //! postfix, returns old value
alert(a); // 3
  

let counter = 3;
counter++; // same as "counter = counter+1"
alert(2*counter); // 8

let counter = 3;
alert(2* ++counter); // 8 //? PREFIX

let counter = 3;
alert(2* counter++); // 6 //? POSTFIX

let x = (1+2, 3+4);
alert(x); // the last result is returned

let a = 1, b = 1;
let c = ++a; 
let d = b++; 
alert(c); // c=2
alert(d); // d=1


/*----------------------------------*/
// EXPRESSION (TYPE CONVERSIONS)
let x= "" + 1 + 0;
alert(x); // 10

let y = "" - 1 + 0;
alert(y); // -1 //! A REVOIR CELUI-CI

true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = '  -9  5' 
"  -9  " - 5 = -14 
null + 1 = 1 
undefined + 1 = NaN
" \t \n" - 2 = -2 

let a = prompt("First number?", 1); // 1
let b = prompt("Second number?", 2); // 2
alert(a + b); // 12

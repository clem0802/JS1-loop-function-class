// 2021.10.06 FROM  https://javascript.info/comparison
/*----------------------------------*/
// (N°9) COMPARISONS

= assignment
== equality test 
=== strict equality

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( '01' == 1 ); // true, string '01' becomes a number 1

alert( true == 1 ); // true
alert( false == 0 ); // true
alert( '' == false ); // true
alert( 0 == false ); // true
alert( 0 === false ); //! false
alert( null == undefined ); // true
alert( null === undefined ); //! false
alert( null < 0 ); // false
alert( null > 0 ); // false
alert( null = 0 ); // Uncaught SyntaxError
alert( null == 0 ); // false
alert( null >= 0 ); // true
alert( null <= 0 ); // true
alert( undefined < 0 ); // false
alert( undefined > 0 ); // false
alert( undefined == 0 ); // flase
alert( undefined === 0 ); // flase
alert( undefined >= 0 ); // false
alert( undefined <= 0 ); // false

let a = 0;
alert(Boolean(a)); // false
let b = "0";
alert(Boolean(b)); // true
alert (a == b); // TRUE!!


alert(5 > 4); // true
alert("apple" > "pineapple"); // false
alert("2" > "12"); // true
alert( undefined == null ); // true
alert( undefined === null ); //! false
alert( null == "\n0\n" ); // flase
alert( null === +"\n0\n" ); // false

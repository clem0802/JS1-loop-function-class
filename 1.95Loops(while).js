// 2021.10.12 FROM (MM) //! TO REVIEW AND ADD on 10.14 !!!!
/*----------------------------------*/ (I)
// COUNTER VARIABLE !!
// COUNTER VARIABLE !!

var counter = 1;
while(counter<4){
    console.log(counter);
    counter++; // 1  2  3
}


var counter = 1;
while(counter<10){
    console.log(counter);
    counter++; // 1  2  3  4  5  6  7  8  9
}


var counter = 5;
while(counter<10){
    counter++;
    console.log(counter); // increment first, => 6  7  8  9  10
}


var listNumber = 1;
while(listNumber<11){
    console.log(listNumber + ". Camera YES YES");
    listNumber++;
}
/* (output)
1. Camera YES YES
2. Camera YES YES
3. Camera YES YES
4. Camera YES YES
5. Camera YES YES
6. Camera YES YES
7. Camera YES YES
8. Camera YES YES
9. Camera YES YES
10. Camera YES YES
*/



/*----------------------------------*/ (II)
var i = 1; // ("i" is the COUNTER VARIABLE)
while (i < 5) {
    console.log(i);
    i++;
}
//*  (output)
1
2
3
4
*//
    
    
    
/*----------------------------------*/ (III)
/*----------------------------------*/ to compare with (IV)(V)
var dollars = 1;
while (dollars < 10) {
    dollars++;
}
console.log(dollars);
// 10



/*----------------------------------*/ (IVa)
/*----------------------------------*/ to compare with (IVb)
var dollars = 1;
while (dollars < 10) {
    console.log(dollars);
    dollars++;
}
// 1
// 2
// 3
// 4 
// 5 
// 6
// 7
// 8
// 9



/*----------------------------------*/ (IVb)
/*----------------------------------*/ to compare with (IVa)
var dollars = 1;
while (dollars < 10) {
    console.log(dollars); //!
    dollars++;
}
console.log(dollars);
// 1
// 2
// 3
// 4 
// 5 
// 6
// 7
// 8
// 9
// 10  =>  lié à la 2ème console.log()



/*----------------------------------*/ (Va)
/*----------------------------------*/ to compare with (Vb)
var dollars = 1;
while (dollars < 10) {
    dollars++;
    console.log(dollars); //!
}
console.log(dollars); 
// 2
// 3
// 4 
// 5 
// 6
// 7
// 8
// 9
// 10



/*----------------------------------*/ (Vb)
/*----------------------------------*/ to compare with (Va)
var dollars = 1;
while (dollars < 10) {
    dollars++;
    console.log(dollars); //!
}
console.log(dollars); 
// 2
// 3
// 4 
// 5 
// 6
// 7
// 8
// 9
// 10
// 10  =>  lié à la 2ème console.log()



/*----------------------------------*/ (VI)
var counter = 1;
while (counter <= 5) {
    console.log("Before: " + counter);
    counter++;
    console.log("After: " + counter);
}
// Before: 1
// After: 2
// Before: 2
// After: 3
// Before: 3
// After: 4
// Before: 4
// After: 5
// Before: 5
// After: 6
    


/*----------------------------------*/ (VII)
var tracker = 1;
while (tracker <= 2) {
    tracker++;
}
console.log(tracker); //!  3
    
    

/*----------------------------------*/ (VIIIa)
var counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}
// 0
// 1
// 2
// 2



/*----------------------------------*/ (VIIIb)
var counter = 0;
while (counter < 3) {
    console.log(counter);
    counter++;
}
console.log(counter);
// 0
// 1
// 2
// 3



/*----------------------------------*/ (IX)
var counter = 0;
while (counter < 4) {
    counter++;
    console.log(counter);
}
// 1
// 2
// 3
// 4 
    



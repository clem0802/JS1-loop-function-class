// 2021.10.21 FROM (MM) 
/*----------------------------------*/
// REUSABLE PROGRAMS-2 (RETURN)
// use return at the end of a function to pass a value as output
function multiplyByTen(number){
    return number * 10;
}
var result = multiplyByTen(29);
console.log(result); // 290



function multiplyByTen(number){
    return number * 10;
    return "This line doesn't execute";
}
var result = multiplyByTen(29);
console.log(result); // 290



/*----------------------------------*/
/*----------------------------------*/
function getDiscount(age){
    if(age >= 65) {
        return "50% OFF"; // (this one is executed)
    }
    return "0% OFF"; 
}
var discount = getDiscount(67);
console.log(discount); // 50% OFF



function getDiscount(age){
    if(age >= 65) {
        return "50% OFF"; 
    }
    return "0% OFF"; //! (this one is executed)
}
var discount = getDiscount(17);
console.log(discount); //! 0% OFF



function getDiscount(age){
    if(age <= 18) {
        return "50% OFF"; 
    } else if(age >= 65){
        return "30% OFF";
    }
    return "Full price"; // (this one executed)
}
var discount = getDiscount(17);
console.log(discount); // Full price



function multiplyByTen(number){
    return number * 10;
    return "Math started";
}
var result = multiplyByTen(30);
console.log(result);



function hasHonors(grade){
    if(grade >= 75){
        return "With honors"; // (Avec félicitations)
    }
    return "Without honors"; // (Sans félicitations)
}
var result = hasHonors(10);
console.log(result); // Without honors

console.log(2 > 1); //true
console.log(2 >= 1); //true
console.log(2 <1); //false
console.log(2 == 1); // false
console.log(2 != 1); //true

//NOTE: Whenever you are comparing two value then please make sure that type of values should be same.

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

/*
    The reason is that an equality check == and comparisons >, <, >=, <= work differently. 
    Compaarisons convert null to a number, treating it as 0.
    that's why null >= 0 is true and null > 0 is false;
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0); //fasle

//Strict check (===)
//It will check the value as well as data types of the value 
console.log("2" == 2);  //true
console.log("2" === 2); //false
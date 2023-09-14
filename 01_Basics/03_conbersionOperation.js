let score = "33";
console.log(typeof score);
console.log(typeof(score));

//coverting String in to numbe if possible 
let scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); //type is number
console.log(scoreInNumber);  // 33


score = "33abc"
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); //type is number
console.log(scoreInNumber); //NaN -->not a number
//Beuase "33abc" convertion to number is not possible hence will get NaN

score = null;
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); //type is number
console.log(scoreInNumber);  //0

score = undefined;
scoreInNumber = Number(score);
console.log(typeof(scoreInNumber)); //type is number
console.log(scoreInNumber);  //NaN


/*
    "33" --> 33
    "33abc" --> NaN
    ture --> 1;
    false --> 0

*/

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); // True

/*
    1 ==> true
    0 ==> false
    "" ==> false
    "Jitendra" ==> true
*/

//**************************** Operations ******************************* 
console.log("---------------------------------------------------------------------");
let value = 3;
let negValue = -value;
console.log(negValue);

let str1 = "Hello";
let str2 = " Jitendra";
console.log(str1+str2); //Hello Jitendra

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(true); //true
console.log(+true); //1
//console.log(true+);//error
console.log(+""); //0
const accountId = 12345;
let accountEmail = "jitu@gmai.com";
var accountPassword = "123456";
accountCity = "Jaipur";
let accountState;


//accountId = 2 //now allowed becuase accountId is const variable 
console.log(accountId);

/*
Prefer not to use var
becuase of issuein block scope and fuctional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
    If we define a variable using let and and will not assign the value then JS will assign the Variable with undefined
*/
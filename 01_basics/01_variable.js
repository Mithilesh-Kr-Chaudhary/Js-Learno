const accountId = 220456;
let accountEmail = "Mith@gmail.com";
var accountPassword = "67543";
account_City = "Gurugram";
let accountState;

// accountId = 23 //not allowed once constant value assigned could not be modify

accountEmail = "Akhil@gmail.com"
account_City = "Haridwar"
console.log(accountId);

/*
Prefer not to use var 
Because of issue  in block scope and functional scope

*/

// new way to print more than one output in one way
console.table([accountId, accountEmail, account_City, accountState]);
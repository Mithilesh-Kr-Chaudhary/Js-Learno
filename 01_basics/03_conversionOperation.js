let score = "33adj";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber= Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);


let isLoggedIn = 1;
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn)
// "33"=> 33
// "33adj" => NaN
// true => 1; false => 0;

// ********************Operations*************

let value = 3;
let Negvalue = -value;
console.log(Negvalue);

console.log(Negvalue + value);

let str1 = "Mith ";
let str2 ="kumar";
let str3 = str1 + str2;
console.log(str3)


console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + "2"); //12
console.log(1 + 2 + "3"); //33
console.log(1 + "2" + 3); //123
console.log("1" + 2 + 3); //123


let num1, num2, num3
num1 = num2 = num3 = 2 +2

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

/*
//prefix incrementS

let x = 3;
const y = ++x;
// x is 4; y is 4

let x2 = 3n;
const y2 = ++x2;
// x2 is 4n; y2 is 4n

//postfix increment

let x1 = 3;
const y = x1++;
// x1 is 4; y is 3

let x2 = 3n;
const y2 = x2++;
// x2 is 4n; y2 is 3n
*/
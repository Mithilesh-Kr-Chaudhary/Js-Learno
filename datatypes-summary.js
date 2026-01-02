// #Primitive datatype

/* 7 types : String , Number, Boolean, null,undefined, symbol,
BigInt
*/

const score = 100;
const scoreValue = 100.8;
const islogged = false;
const outsideTemp = null;
let useId;

const Id = Symbol('123');
const value = Symbol('123');
//console.log(Id == value);

const bigNumber = 1234546655666657686977789n;  // BigInt - Undefined

/*Reference (Non-primitive)
Array,Objects,Functions
*/
const heros = ["saktiman" ,"naagra", "doga"]
//Array
let myObj = {
  name: "mith",
  age: 7,
}//Object

const myFunction = function(){
  console.log("Hello world");
}

console.log(typeof scoreValue);
console.log(typeof bigNumber);
console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);

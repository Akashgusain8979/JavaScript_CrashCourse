"use Strict"; // treat all JS code as newer version

//?=======================> Data Types in JavaScript <================================================================
//?                      JavaScript has two types of data:
//?                     1️⃣Primitive Data Types (Single values)

// String (Text)	                               "Hello, world!"
// number (Integer or Decimal)	                    42, 3.14
// boolean (True/False)	                            true, false
// Undefined (Not assigned)	                        let x; (x is undefined)
// Null (Empty value)(standlaone value)	            let y = null;
// BigInt (use to store big integers)
// Symbol (unique)

let name = "Lakshiv";
let age = "25";
let isStudent = true;
let job;

//?==================>Checking Data Type<=============================================
//?        To check the type of a variable, use typeof:

console.log(typeof "Hello"); //Output: String
console.log(typeof 42); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object (special case)
console.log(typeof undefined); // Output: undefined
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object (array is a type of object)
console.log(typeof null); // object ==============> interview question
console.log(typeof undefined); // undefined ==============> interview question

//? =======================================================================================

//?                    2️⃣ Reference Data Types (Complex values)
//?                     Array (List of values)  ["Apple", "Banana", "Cherry"]

let fruits = ["Apple", "Banana", "Cherry"];
fruits[3] = "Orange";
console.log(fruits);

const arr = new Array("A", "B", "C", "D");
console.log(arr);

// ?                     Object (Key-Value pairs)	{ name: "Alice", age: 30 }

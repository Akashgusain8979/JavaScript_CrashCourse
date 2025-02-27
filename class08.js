//?==================>Variables in JavaScript <======================
//? Variables store data. JavaScript has three ways to declare a variable:*/

// var name = "Akash"; //old way (avoid using it)
// let x = 35; //can be modified
// const year = 2035; // can not be modified

// let age = 25;
// if (age == 25) {
//   age = 30; // Reassigning of value to 'let' variable
//   console.log(age);
// }

// const y = 10;
// y = 20;
// console.log(y); // It will throw error due to the fact that we can't reassign value to 'const' variable

// let a = 5;
// a++;
// console.log(a);

//?=========>Data Types in JavaScript<=========================
//?vaScript has two types of data:
//?1. Primitive Data Types (Simple values)
//?2. Reference Data Types (Complex values like objects and arrays)

//?1️⃣Primitive Data Types (Single values)
/*
String (Text)	"Hello, world!"

Number (Integer or Decimal)	42, 3.14
Boolean (True/False)	true, false
Undefined (Not assigned)	let x; (x is undefined)
Null (Empty value)	let y = null;

let x = BigInt(958958679564565464645654654);
console.log(x);


let name = "Alice"; // String
let age = 30; // Number
let isStudent = true; // Boolean
let job; // Undefined
let emptyValue = null; // Null
*/

//?2️⃣ Reference Data Types (Complex values)
// Array (List of values)	["Apple", "Banana", "Cherry"]

let fruits = ["Apple", "Banana", "Cherry"]; // Array

fruits[3] = "Orange";
console.log(fruits);

const arr = new Array("A", "B", "C", "D");
console.log(arr);
arr.toString();

// Object (Key-Value pairs)	{ name: "Alice", age: 30 }

let person = { name: "Alice", age: 30 }; // Object
console.log(person.name + "is" + person.age);

//?=============>Checking Data Type<=================
//?To check the type of a variable, use typeof:
console.log(typeof "Hello"); //Output: String
console.log(typeof 42); // Output: number
console.log(typeof true); // Output: boolean
console.log(typeof null); // Output: object (special case)
console.log(typeof undefined); // Output: undefined
console.log(typeof {}); // Output: object
console.log(typeof []); // Output: object (array is a type of object)

//? ========> Operators on JAvaScript <=================
//? Operators allow us to perform operations on variables and values.
/* 1️⃣ Arithmetic Operators (Math Operations)
Used to perform basic math calculations.
Operator	Description	Example (a = 10, b = 5)	Result
+	Addition	a + b	15
-	Subtraction	a - b	5
*	Multiplication	a * b	50
/	Division	a / b	2
%	Modulus (Remainder)	a % b	0
**	Exponentiation (Power)	a ** 2	100
*/
// let a = 10,
//   b = 5;
// console.log(a + b); // Output: 15
// console.log(a - b); // Output: 5
// console.log(a * b); // Output: 50
// console.log(a / b); // Output: 2
// console.log(a % b); // Output: 0
// console.log(a ** 2); // Output: 100

//?=====================> Lesson 4: Functions in JavaScript 🚀<========================
//? Functions allow us to write reusable blocks of code.
//? 1️⃣ What is a Function?
//? A function is a block of code designed to perform a specific task.
//? We define a function using function, and call it using its name.

//? 2️⃣ Creating and Calling a Function
function functionName() {
  let a = "Lakshiv";
  let b = "Gusain";
  console.log(a, b);
}
functionName(); // Calling the function

//? Functions help avoid repetition and make code more organized.

//? We can pass values (parameters) to functions.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? 3️⃣ Function with Parameters
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
greetUser("Akash");
greetUser("Akanksha");

//? 📌 Multiple parameters:

function addNumbers(a, b) {
  console.log(a + b);
}
addNumbers(5, 2);
addNumbers(10, 20);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? 4️⃣ Function with Return Value
//? A function can return a value using return.

function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 2);
console.log(result);

//? 📌 return stops function execution and sends back a value.

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? 5️⃣ Function Expressions
//? A function can be stored in a variable.

let square = function (num) {
  return num * num;
};

console.log(square(6));

//? 📌 Functions stored in variables are called function expressions.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? 6️⃣ Arrow Functions (Shorter Syntax)
//? Introduced in ES6, arrow functions provide a shorter way to write functions.

const add = (a, b) => a + b;
console.log(add(3, 7));

//? 📌 If the function has one parameter, we can omit the parentheses:
const greet = (name) => console.log("Hello, " + name);

greet("Akash");

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//? 7️⃣ Default Parameters
//? We can set default values for parameters.

function info(name = "Guest") {
  console.log("Hello, " + name + "!");
}
info(); //Guest
info("Lakshiv"); //Lakshiv
//? 📌 If no argument is passed, the default value is used.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ?8️⃣ Immediately Invoked Function Expressions (IIFE)
// ?An IIFE runs automatically when defined.

(function () {
  console.log("This function runs immediately!");
})();

// ?✅ Useful for one-time execution
// ?✅ Avoids polluting the global scope

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
let globalVar = "I am global";
//?  Function Scope (Local vs Global Variables)
//?🔹 Global Variable: Can be used anywhere in the code.
//?🔹 Local Variable: Defined inside a function and can only be used there.

function example() {
  let localVar = "I am local";
  console.log(globalVar); //✅ Works
  console.log(localVar); //✅ Works
}
example();
console.log(globalVar); //✅ Works
console.log(localVar); //❌ Error (localVar is not defined outside)

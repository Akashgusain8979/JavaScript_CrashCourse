// ?JavaScript Control Flow (Conditions & Loops) 🚀
// ?Control flow allows us to make decisions and repeat actions in JavaScript.
// ?1️⃣ Conditional Statements (if, else, switch)
// ?Conditional statements execute different code based on conditions.

// ?🔹 if Statement
// ?Executes code only if the condition is true.

// let age = 30;
// if (age >= 18) {
//   console.log("You are eligible to vote");
// }

// ?🔹 if...else Statement
// ?Executes one block if the condition is true, otherwise another block.

let age = 16;

// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("Sorry, you are too young to vote.");

// ?🔹 if...else if...else Statement
// ?Used when we have multiple conditions.

let marks = 85;

// if (marks >= 90) {
//   console.log("Grade: A");
// } else if (marks >= 75) {
//   console.log("Grade: B");
// } else if (marks >= 60) {
//   console.log("Grade: C");
// } else {
//   console.log("Fail");
// }

// ?🔹 Ternary Operator (Shorter if-else)
// ?A shorthand for if...else.

let score = 20;

let result = score >= 18 ? "Pass" : "Fail";
// console.log(result);

// ?🔹 Switch Statement
// ?Used when we have many conditions.

let day = new Date().getDate();
// console.log(day);

// switch (day) {
//   case 1:
//     console.log("It is sunday");
//     break;

//   case 2:
//     console.log("It is Monday");
//     break;

//   case 3:
//     console.log("It is Tuesday");

//     break;

//   case 4:
//     console.log("It is wednesday");

//     break;
//   case 5:
//     console.log("It is Thursday");

//     break;
//   case 6:
//     console.log("It isfriday");
//     break;
//   case 7:
//     console.log("It is saturday");
//   default:
//     console.log("Invalid day");
// }

// ?📌 break prevents execution of the next cases.

// ?2️⃣ Loops (Repeat Code Multiple Times)
// ?Loops allow us to execute code multiple times.

// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration " + i);
// }

// ?🔹 for...in Loop (for Objects)
// ? Loops through keys of an object.

let person = { name: "Alice", age: 25, city: "New York" };

for (let key in person) {
  // console.log(key + ": " + person[key]);
}

const info = { fname: "Akash", score: 100 };
// let text = "";

// for (let x in info) {
//   text += info[x] + "";
//   console.log(text);
// }

// let colors = ["Red", "Green", "Blue"];
// let text = "";
// for (let x of colors) {
//   text += x;
//   console.log(text);
// }

// let colors = "Akash is handsome";
// let text = "";
// for (let x of colors) {
//   text += x;
//   console.log(text);
// }

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += i;
//   i++;
//   console.log(text);
// }

let text = "";
let i = 0;
do {
  text += i;
  i++;
} while (i < 10);
{
  // console.log(text);
}

const balance = 1000;

// don't do like this
// if (balance > 500) console.log("test1"), console.log("test2");

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const isLogggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 2) {
  console.log("Allow to buy course");
}

if (loggedInFromGoogle || isLogggedInFromEmail) {
  console.log("User Logged in");
}

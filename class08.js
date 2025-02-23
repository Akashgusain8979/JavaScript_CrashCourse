/*Variables in JavaScript
 Variables store data. JavaScript has three ways to declare a variable:*/

var name = "Akash"; //old way (avoid using it)
let x = 35; //can be modified
const year = 2035; // can not be modified

let age = 25;
if (age == 25) {
  age = 30; // Reassigning of value to 'let' variable
  console.log(age);
}

const y = 10;
y = 20;
console.log(y); // It will throw error due to the fact that we can't reassign value to 'const' variable

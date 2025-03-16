var c = 30; //global  scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a); //❌ ReferenceError: a is not defined
// console.log(b); //❌ ReferenceError: a is not defined
// console.log(c); //✅ Works

let a = 300;
if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner: ", a);
}

// console.log(a);

let globalVar = "I am global";
//?  Function Scope (Local vs Global Variables)
//?🔹 Global Variable: Can be used anywhere in the code.
//?🔹 Local Variable: Defined inside a function and can only be used there.

function example() {
  let localVar = "I am local";
  // console.log(globalVar); //✅ Works
  // console.log(localVar); //✅ Works
}
example();
// console.log(globalVar); //✅ Works
// console.log(localVar); //❌ Error (localVar is not defined outside)

// +++++++++++++++++++++++++++++++++++++++++++++++++++
// Nested Scoping
function one() {
  const username = "Akshat";

  function two() {
    const website = "youtube";
    // console.log(username); //✅ Works
  }
  //   console.log(website); //❌ReferenceError: website is not defined

  two();
}

one();

if (true) {
  const userName = "Himanshu";
  if (userName === "Himanshu") {
    const websiteName = " youtube";
    // console.log(userName + websiteName); //✅ Works
  }
  //   console.log(websiteName); //❌ReferenceError: websiteName is not defined
}

// console.log(userName); //❌ReferenceError: userName is not defined

// ++++++++++++++++++ interesting concept +++++++++++++

console.log(addOne(5)); //✅ Works (can access before initializtion)
function addOne(num) {
  return num + 1;
}

console.log(addTwo(5)); //❌ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
  return num + 2;
};

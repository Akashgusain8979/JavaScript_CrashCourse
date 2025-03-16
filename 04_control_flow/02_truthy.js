// const userEmail = [];

// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// flasy values
// false, 0, -0, BigInt, 0n, "", null, undefined, nan;

// truthy values
// "0", "false", " ", [], {}, function(){}

const userEmail = [];
if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptyObject = {};

if (Object.keys(emptyObject).length === 0) {
  console.log("Object is empty");
}

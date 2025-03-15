// Array

const myArr = [1, 2, 3, 4, 5, true, "Akash"];
console.log(myArr);

const myArr2 = new Array(1, 2, 3, 4, 5, true, "Guru");
// console.log(myArr2);
// console.log(myArr2[0]);

// Array Methods

// myArr.push("Rome");
// myArr.push(9);
// myArr.pop(); // It will remove last element of array
// console.log(myArr);

// myArr.unshift(0);
// myArr.unshift(9);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes("Home")); // this method will give boolean value

// console.log(myArr.indexOf("Akash"));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);

// slice & splice method

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice() method do not manipulate oroginal array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // splice()  method manipulate original array
console.log(myn2);
console.log("C ", myArr);

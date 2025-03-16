let name = "Akshat"; // string declaration
let score = 50;

console.log(name + score);

console.log(`Hello my name is ${name}, and my score is ${score}`); //Modern way to write string interpolation

const gameName = new String("Mario"); // string declaration
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("i"));
// console.log(gameName.substring(0, 4));
// console.log(gameName.substring(-3, 4)); // can not use -ve index
// console.log(gameName.slice(0, 4));
// console.log(gameName.slice(-3, 4));

const newString = "   Akshat    ";
console.log(newString);
console.log(newString.trim()); // use to remove extra space

const url = "https://Akshat.com/hitesh%20gusain";
console.log(url.replace("%20", "-"));

console.log(url.includes("Akshat"));
console.log(gameName.split("-"));

// +++++++++++++ Numbers ++++++++++++++++++

const score = 400;
// console.log(score);

const newScore = new Number(100);
// console.log(newScore);

// console.log(newScore.toString());
// console.log(newScore.toString().length);
// console.log(newScore.toFixed(2));

const balance = 23.8967;
// console.log(balance.toPrecision(3));

const balance1 = 123.8967;
// console.log(balance1.toPrecision(3));

const hundreds = 400000000;
// console.log(hundreds.toLocaleString());

// ++++++++ Maths +++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.abs(-50));
// console.log(Math.round(4.6));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.4));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(3, 4, 5, 6, 9, 8));
// console.log(Math.max(3, 4, 5, 6, 9, 8));

// console.log(Math.random()); // Always gives number 0 and 1
// console.log(Math.random() * 10 + 1);
// console.log(Math.floor(Math.random() * 10 + 1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);

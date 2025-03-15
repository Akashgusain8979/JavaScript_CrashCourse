const marvelHeroes = ["Thor", "Ironman", "Spiderman"];
const dcHeroes = ["Superman", "Flash", "Batman"];

// marvelHeroes.push(dcHeroes);

// console.log(marvelHeroes);
// console.log(marvelHeroes[3]);
// console.log(marvelHeroes[3][0]);
// console.log(marvelHeroes[3][1]);

// concat() method is used to join two arrays
const allHeroes = marvelHeroes.concat(dcHeroes);
// console.log(allHeroes);

const arr = [1, 2, 3, 4, 5];
// spread operator (...)
// It is same as concat method but it can join multiple arrays

const all_new_heros = [...marvelHeroes, ...dcHeroes, ...arr];
// console.log(all_new_heros);

const newArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];

const realArr = newArr.flat(Infinity);
// console.log(realArr);

console.log(Array.isArray("Akash"));
console.log(Array.from("Akash"));

console.log(Array.from({ name: "Akash" })); // it will give empty array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

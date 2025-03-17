// const coding = ["js", "ruby", "java", "javascript"];

// const values = coding.forEach((item) => {
//   console.log(item);
//   return item;
// });

// console.log(values);
//? forEach() method do not return any value

//? filter() method
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums1 = myNums.filter((num) => num > 5);
// console.log(newNums1);

// const newNums = myNums.filter((num) => {
//   return num > 5;
// });
// console.log(newNums);

// const newNums = [];
// myNums.forEach((item) => {
//   if (item > 4) {
//     newNums.push(item);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "The God of Small Things",
    author: "Arundhati Roy",
    year: 1997,
    genre: "Fiction",
    pages: 340,
  },
  {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    year: 1981,
    genre: "Historical Fiction",
    pages: 533,
  },
  {
    title: "The White Tiger",
    author: "Aravind Adiga",
    year: 2008,
    genre: "Fiction",
    pages: 320,
  },
  {
    title: "Train to Pakistan",
    author: "Khushwant Singh",
    year: 1956,
    genre: "Historical Fiction",
    pages: 181,
  },
  {
    title: "Wings of Fire",
    author: "A.P.J. Abdul Kalam",
    year: 1999,
    genre: "Autobiography",
    pages: 180,
  },
  {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2003,
    genre: "Fiction",
    pages: 291,
  },
  {
    title: "I Too Had a Love Story",
    author: "Ravinder Singh",
    year: 2008,
    genre: "Romance",
    pages: 216,
  },
  {
    title: "The Palace of Illusions",
    author: "Chitra Banerjee Divakaruni",
    year: 2008,
    genre: "Mythological Fiction",
    pages: 360,
  },
  {
    title: "Autobiography of a Yogi",
    author: "Paramahansa Yogananda",
    year: 1946,
    genre: "Spirituality",
    pages: 500,
  },
  {
    title: "Rich Dad Poor Dad (Indian Edition)",
    author: "Robert Kiyosaki (Adapted for India)",
    year: 1997,
    genre: "Personal Finance",
    pages: 336,
  },
];

const userBooks1 = books.filter((i) => i.genre == "Autobiography");
// console.log(userBooks1);

const userBooks2 = books.filter((i) => i.year >= 2000 && i.genre === "Fiction");
// console.log(userBooks2);

//? map() method
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum3 = myNumbers.map((num, i) => num + 10);
// console.log(newNum3);

//? Chaining
const newNum3 = myNumbers
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40);

// console.log(newNum3);

//? reduce() method
const myArray = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = myArray.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue

// );
// console.log(sumWithInitial);

// const total = myArray.reduce(function (acc, currVal) {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);
// console.log(total);

const total = myArray.reduce((acc, curr) => acc + curr, 0);
console.log(total);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "AI course",
    price: 3999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceToPay);

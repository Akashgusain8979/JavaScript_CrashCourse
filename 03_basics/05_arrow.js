const user = {
  username: "Akshat",
  price: 999,

  welcomeMessage: function () {
    // console.log(`${this.username} , welcome to website!`);
    // console.log(this);
  },
};

// 'this' keyword refers to the current context

user.welcomeMessage();
// user.username = "Guru";
// user.welcomeMessage();

// console.log(this);

//? Browser ke andar global object window object hoti hai

// function chai() {
//   let username = "Rakesh";
//   console.log(this.username); // undefined because function ke andar hum 'this' keyword use nahi hota
// }

// chai();

// const chai = function () {
//   let username = "Rakesh";
//   console.log(this.username); // undefined because function ke andar hum 'this' keyword use nahi hota
// };

// chai();

const chai = () => {
  let username = "Rakesh";
  console.log(this.username); // undefined because function ke andar hum 'this' keyword use nahi hota
  console.log(this);
};
chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({
  username: "Akash",
});

console.log(addTwo(4, 3));

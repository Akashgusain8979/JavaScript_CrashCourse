// ?📌 ES6 Classes in JavaScript
// ?ES6 introduced classes in JavaScript, making object-oriented programming (OOP) easier and cleaner. Classes are like blueprints for creating objects.

// class Edufyi {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }
// }

// const user1 = new Edufyi("Akshat", 2024);
// console.log(user1);

class Edufyi {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  calcAge() {
    const calc = new Date().getFullYear;
    console.log(calc - this.year);
    console.log(`${this.user2} is ${calcAge} years old`);
  }
}

const user2 = new Edufyi("Akash", 1996);
user2.calcAge();



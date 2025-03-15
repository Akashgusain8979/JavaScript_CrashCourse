// singleton
// Object.create() <========= contructor menthod

// Object Literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Akash",
  age: 18,
  "full Name": "Akash Gusain",
  [mySym]: "myKey1",
  location: "Uttarkashi",
  email: "akash@gmail.com",
  lastLoginDays: ["Mon", "Tue"],
};

// console.log(JsUser.age);
// console.log(JsUser["age"]);

// console.log(JsUser."full name"); // this is wrong

// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);

// JsUser.email = "guru@gmail.com";
// console.log(JsUser);

// Object.freeze(JsUser);
// JsUser.email = "hitesh@gmail.com";
// console.log(JsUser);

JsUser.greeting = function () {
  console.log("Hello JS User");
};

// console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = () => {
  console.log(`Hello JS user ${JsUser.name}`);
};

console.log(JsUser.greetingTwo());

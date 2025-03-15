// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Jhon";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const regularUser = {
  email: "Jhon@gmail.com",
  fullname: {
    userfullname: {
      firstname: "Jhon",
      lastname: "Gusain",
    },
  },
};

// console.log(regularUser);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

const obj3 = {
  5: "a",
  6: "c",
};

// const obj4 = { obj1, obj2 };
// console.log(obj4);

const obj4 = Object.assign({}, obj1, obj2, obj3); // to concatinate two objects
// console.log(obj4);

const obj5 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj5);

const users = [
  {
    id: 1,
    email: "Akash@gmail.com",
  },
  { id: 2, email: "guru@gmail.com" },
];

// console.log(users[1].email);

// Object de-structuring
const course = {
  coursename: "JS in hindi",
  price: "999",
  courseInstructor: "Akash",
};

// console.log(course.courseInstructor);

const { courseInstructor } = course;
console.log(courseInstructor);

const { courseInstructor: instructor } = course;
console.log(instructor);

// for of
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
  //   console.log(num);
}

//? Iteration over a string
const greetings = "Hello wordl!";
for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// for in
const programming = ["JS", "Java", "Python", "Ruby"];
for (const key in programming) {
  // console.log(key); // it will give only index value
}

// forEach()
const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach((i) => {
  // console.log(i);
});

function printMe(item) {
  // console.log(item);
}

// we can also passon a function inside foreach() by giving only refrence of that function
coding.forEach(printMe);

coding.forEach((item, index, arr) => {
  // console.log(item, index, arr);
});

// [{},{},{}]
const myCoding = [
  {
    languagename: "Javascript",
    languageFileName: "js",
  },
  {
    languagename: "Java",
    languageFileName: "java",
  },
  {
    languagename: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languagename);
});

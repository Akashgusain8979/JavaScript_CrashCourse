const myName = "Jonas";
function first() {
  const age = 30;
  if (age >= 30) {
    const decade = 3;
  }

  function second() {
    const job = "teacher";
    console.log(`${myName} is ${age} - old ${job}`);
  }
  second();
}
first();

//  Stack(Primitive) , Heap(Non-primitive)

let myYoutubename = "akashgusain";

let anothername = myYoutubename;
anothername = "chairaurpahad";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = userOne;

userTwo.email = "aksh@google.com";

console.log(userOne.email);
console.log(userTwo.email);

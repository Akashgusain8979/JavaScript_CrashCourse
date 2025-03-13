const edufy = new Map([
  ["CEO", 1],
  ["Manager", 3],
  ["Mentor", 10],
  ["Students", 30],
]);
// console.log(edufy);
// console.log(typeof edufy);

// ?2️⃣ Accessing Values from a Map
// ?Use .get(key) to retrieve a value.

// console.log(edufy.get("CEO"));
// console.log(edufy.get("Manager"));
// console.log(edufy.get("Mentor"));

// ?3️⃣ Checking & Deleting Keys
/*Method	          Description
.has(key)	          Checks if a key exists
.delete(key)	      emoves a key-value pair
.clear()	          Removes all entries
.size	              Returns the number of key-value pairs
*/

// ?4️⃣ Looping Through a Map
// ?Maps are iterable, so we can use forEach() or for...of loops.

// ?📌 Using forEach()

// edufy.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });

// ?📌 Using for...of

// for (let [key, value] of edufy) {
//   console.log(`${key} : ${value}}`);
// }

// ?5️⃣ Converting Map to an Array
// ?You can use the spread operator (...) to convert a Map into an array

const edufyArr = [...edufy];
// console.log(edufyArr);

// ?🎯 When to Use a Map?
// ?✔ When you need key-value pairs with any data type as keys.
// ?✔ When you need fast lookups (map.get(key) is faster than object[key]).
// ?✔ When you need to store data in insertion order.

// ?🔥 Challenge for You!
// ?Try using a Map to store student marks and calculate the average:

const studentMarks = new Map([
  ["Akshat", 85],
  ["Vedic", 78],
  ["Ayansh", 70],
]);

// console.log(studentMarks.size);

// calculate the average marks
const totalMarks = [...studentMarks.values()].reduce(
  (sum, mark) => sum + mark,
  0
);

// ?In JavaScript, .reduce() is a method available on arrays that is used to iterate over an array and reduce it to a single value, based on a provided callback function. This method takes two parameters: a callback function and an optional initial value for the accumulator.

const avgMarks = totalMarks / studentMarks.size;

console.log(`Average marks:${avgMarks}`);

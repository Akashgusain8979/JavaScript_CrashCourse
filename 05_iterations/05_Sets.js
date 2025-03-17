// ?🚀 JavaScript Sets – A Powerful Data Structure
// ?A Set in JavaScript is a collection of unique values. Unlike arrays, Sets do not allow duplicate values, making them useful when you need to store distinct elements.

const mySet = new Set();

mySet.add("Akash");
mySet.add("Aman");
mySet.add("Lakshiv");
mySet.add("Akash"); //Duplicate value, will not be added

// console.log(mySet);
// console.log(mySet.size);
console.log(typeof mySet);

// ?✅ Duplicates are automatically removed!
// ?✅ .size gives the total number of elements.

const numbers = new Set([1, 2, 3, 4, 5]);
// console.log(numbers);
// console.log(typeof numbers);

// ?2️⃣ Adding & Deleting Elements
/*Method	                   Description
.add(value)	               Adds a value to the Set
.delete(value)	           Removes a specific value from the Set
.has(value)	               Checks if a value exists in the Set (true/false)
.clear()	               Removes all values from the Set
*/

numbers.add(6);
console.log(numbers);

numbers.delete(2);
console.log(numbers);

numbers.clear();
console.log(numbers);

numbers.has(3);
console.log(numbers);

// ?3️⃣ Looping Through a Set
// ?Sets are iterable, so you can use forEach() or a for..of loop.

// ?📌 Example: Looping with forEach()
const cities = new Set(["Dehradun", "Delhi", "Mumbai", "Shimla"]);

// cities.forEach((city) => {
//   console.log(city);
// });

// ?📌 Example: Looping with for...of
for (let city of cities) {
  console.log(city);
}

// ?4️⃣ Converting Sets to Arrays
// ?Since Sets store unique values, you might need to convert them to an array for easier manipulation.

const myCities = [...cities];
console.log(myCities);
console.log(typeof myCities);

// ?🎯 When to Use a Set?
// ?✔ Removing duplicate values from an array.
// ?✔ Checking for existence of a value (set.has(value)) is faster than arrays.
// ?✔ Storing unique data, like user IDs, tags, or categories.

// ?🔥 Challenge for You!
// ?Try removing duplicates from an array using a Set:

const num = [1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 6];
const uniqueNum = [...new Set(num)];
console.log(uniqueNum);

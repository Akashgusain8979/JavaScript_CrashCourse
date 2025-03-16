function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(200));
console.log(calculateCartPrice(200, 300, 400));

function calculateCart2Price(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCart2Price(200, 300, 400, 500, 2000));

// ++++++++++++++++++++++++++++++++++++++++++++++++++++
const user = {
  username: "Akshat",
  price: 199,
};

function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Guru",
  price: 499,
});

const mynewArray = [200, 400, 100, 800];
const mynewArray2 = [500, 600, 700, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(mynewArray));
console.log(returnSecondValue(mynewArray2));

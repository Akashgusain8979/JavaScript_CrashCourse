// Dates are objects in JS

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 2, 13);
// console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date();
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// // console.log(myCreatedDate1.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

`${newDate.getDay()} and the time is ${newDate.getTime()}`;

let day = newDate.toLocaleString("default", {
  weekday: "long",
});

console.log(day);

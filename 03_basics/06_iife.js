// Immediately Invoked Function Expression (IIFE)

(function chai() {
  // named IIFE
  console.log(`DB CONNECTED`);
})();
// global scope ke pollutions se problem hoti hai kai bar toh usse bachne ke liye IIFE ka use krte hain

(() => {
  console.log(`DB CONNCECTED`);
})();

((name) => {
  console.log(`${name} is connected to DB`);
})("Akash");

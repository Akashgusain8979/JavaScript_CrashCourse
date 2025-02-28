//?                ==================>Variables in JavaScript <======================
//?                Variables store data. JavaScript has three ways to declare a variable:-

const accountID = 14453;
let acccountEmail = "gurugusain1@gmail.com";
var accountPassword = "12345";
accountCity = "Uttarkashi";
let accountState;

// accountID = 2; // will through error

acccountEmail = "abc@gmail.com";
accountPassword = "21212121";
accountCity = "Dehradun";

console.log(accountID);

console.table([
  accountID,
  acccountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
Prefer not to use 'var'
beacuse of issue in block scope and  functional scope
*/

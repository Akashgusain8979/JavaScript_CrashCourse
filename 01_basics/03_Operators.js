//? ========> Operators on JAvaScript <=================
//? Operators allow us to perform operations on variables and values.
//? 1️⃣ Arithmetic Operators (Math Operations)
/*
Used to perform basic math calculations.
Operator	           Description	                   Example (a = 10, b = 5)	Result
+	                   Addition	                       a + b	                 15
-	                   Subtraction	                   a - b	                 5
*	                   Multiplication	               a * b	                 50
/	                   Division	                       a / b	                 2
%	                   Modulus (Remainder)	           a % b	                 0
**	                   Exponentiation (Power)	       a ** 2	                 100
*/
let a = 10,
  b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0
console.log(a ** 2); // Output: 100

//?2️⃣ Assignment Operators (Store Values)
//?Used to assign values to variables.

/*
Operator	Example	        Equivalent To
=	        x = 5	        x = 5
+=	        x += 2	        x = x + 2
-=	        x -= 2	        x = x - 2
*=	        x *= 2	        x = x * 2
/=	        x /= 2	        x = x / 2
%=	        x %= 2	        x = x % 2

*/

let x = 10;
x += 5; // x = x + 5
console.log(x); // Output: 15

//? 3️⃣ Comparison Operators (Check Conditions)
//? Used to compare values (returns true or false).

/*
Operator	Description	                        Example (a = 10, b = 5)	        Result
==	         Equal to	                        a == 10	                        true
===	         Strictly equal (checks type too)	a === "10"	                    false
!=	         Not equal	                        a != 5	                        true
!==	         Strictly not equal	                a !== "10"	                    true
>	         Greater than	                    a > b	                        true
<	         Less than	                        a < b	                        false
>=	         Greater than or equal	            a >= 10	                        true
<=	         Less than or equal	                 a <= 5	                        false
*/

console.log(10 == "10"); // Output: true (checks only value)
console.log(10 === "10"); // Output: false (checks value & type)
console.log(10 > 5); // Output: true
console.log(10 !== 5); // Output: true

//? 4️⃣ Logical Operators (Combine Conditions)
//? Used to combine multiple conditions.
/*
Operator	       Name	      Example (a = 10, b = 5)	    Result
&&	               AND	      (a > 5 && b < 10)	            true
`		                       `	                        OR
!	               NOT	       !(a > 5)	                    false

*/

let age = 20;
console.log(age > 18 && age < 30); // Output: true
console.log(age > 25 || age < 30); // Output: true
console.log(!(age > 18)); // Output: false

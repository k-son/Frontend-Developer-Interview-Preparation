/*
	# Hoisting - All the variable declarations happens at the the top. Same goes for function declaration as well.

	Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).
	Variables defined with let and const are hoisted to the top of the block, but not initialized.Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.

	Using a let or const variable before it is declared will result in a ReferenceError. The variable is in a "temporal dead zone" from the start of the block until it is declared.

	JavaScript only hoists declarations, not initializations.

	To avoid bugs, always declare all variables at the beginning of every scope.

	JavaScript in strict mode does not allow variables to be used if they are not declared.


	Function declarations are hoisted.
	
	## Reference 
	1. https://code.tutsplus.com/tutorials/javascript-hoisting-explained--net-15092
	2. https://www.sitepoint.com/back-to-basics-javascript-hoisting/
	3. http://javascript.info/tutorial/initialization
*/

// Example 1
console.log(foo); // Undefined
var foo = 10;
console.log(foo); // 10

// Above example goes like below
var foo; // Declaration
console.log(foo); // Undefined
foo = 10; // Initialization (happens at the `execution`)
console.log(foo); // 10

// Example 2
// Calling before declaration.
bar(); // Bar
function bar() {
	console.log("Bar");
}

// Above example goes like below
// Function declaration happens at the top
function bar() {
	console.log("Bar");
}
bar(); // Bar
// Numbers in JS

// Make the output section way below first

let x = 10;
let y = 4;
let total;

// Math operations
// Hint: Alt + Shift + Down Arrow copies the currently-selected line

total = x + y;
total = x * y;
total = x - y;
total = y - x;
total = x / y;
total = y / x;
total = x % y;
total = y % x;

// Math methods & properties

total = Math.PI; // circles & trig
total = Math.PI.toFixed(30); // takes to 30 decimal places
total = Math.E; // compound interest
total = Math.ceil(1.3);
total = Math.floor(2.7);
total = Math.sqrt(9);
total = Math.abs(-17);
total = Math.pow(2, 8);
total = Math.min(1, -1, 3, 7, 4, 2, 0, -3);
total = Math.max(1, -1, 3, 7, 4, 2, 0, -3);
total = Math.random();
total = Math.random() * 10;
total = Math.random() * 10 + 1;
total = Math.floor(Math.random() * 20 + 1);

// Taking in console input

let num1 = prompt("What's the first number?");
let num2 = prompt("What's the second number?");

total = num1 * num2;

// Some operators that return Booleans

console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 == num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

// Different bases:

// BINARY 

total = 0b1010110;

// HEXADECIMAL

total = 0x83af801ce7a;

// OCTAL

total = 0o67102357421; // note the small 'o' near the left

// OUTPUT

console.log(total);
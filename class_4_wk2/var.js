var x = 5;
x = 10;

// let name = "Briana";

// name = "John"
const email = "john@example.com"

let name = 'Briana';
let age = 20;
let isStudent = true;
let nothing = null;
let unknown = undefined; 

// console.log(x);
// console.log(name);
// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);
// console.log(typeof nothing);
// console.log(typeof unknown);


// Operators

let a = 9;
let b = 5;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

// console.log("Sum: " + sum);
// console.log("Difference: " + difference);
// console.log("Product: " + product);
// console.log("Quotient: " + quotient);
// console.log("Remainder: " + remainder)


// Logicals

//  && (AND) operator: returns true if both operands are true
// || (OR) operator: returns true if at least one operand is true
//  ! (NOT) operator: returns true if the operand is false, and false if the operand is true
//  !! (DOUBLE NOT) operator: converts a value to its boolean equivalent

// a

// if (a > 0 && b > 0) {
//     console.log("Both a and b are positive numbers");
// }

// if (a > 0 || b > 0) {
//     console.log("At least one of a or b is positive");
// }

// if (!(a < 0)) {
//     console.log("a is not negative");
// }

// if (!!name) {
//     console.log("a is truthy");
// }

console.log(!!a); // true
console.log(!!0); // false



const greetings = "Hello, " + name
const literal = `Hello, ${name}, we are working on template literal`
console.log(literal)


function greet ({name, age, isStudent}) {
    console.log(`Hello ${name}, you are ${age} years old and ${isStudent ? 'a student' : 'not a student'}`);
}

const greetArrow =  (name, age) => {
    console.log(`Hello ${name}, you are ${age} years old and ${isStudent ? 'a student' : 'not a student'}`);
}

greet({age: 25, isStudent: false, name: 'John',});
greetArrow('John', 25);
let width = 12
let height = 13

function calculateArea(width, height) {
    let area = width * height;
    return area;
}
console.log(calculateArea(width, height));

let result = calculateArea(5, 10);
let result2 = calculateArea(7, 3);
let result3 = calculateArea(15, 20);

let totalArea = result + result2 + result3;
console.log(totalArea);
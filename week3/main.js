// Array

const name = "Briana";
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];

console.log(typeof fruits); // Output: object

// Indexing in Arrays
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[3])
// console.log(fruits[4])

// console.log(fruits[fruits.length - 2])
// console.log(fruits.at(-1))

// fruits.length = 3

// console.log(fruits) // Output: ['apple', 'banana', 'cherry']

fruits.push("fig", "grape");
fruits.pop();
fruits.unshift("kiwi");
fruits.shift();

fruits.splice(2, 2, "mango", "nectarine");
console.log(fruits);

console.log(fruits.indexOf("grape"));

// console.log(fruits.includes("grape"));

const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 21 },
];

const student = students.find((student) => student.id === 1);
const studentIndex = students.findIndex((student) => student.id === 1);
console.log(student);
console.log(studentIndex);

const stu = students.find(student => student.id === 3)
console.log(stu) // Output: { id: 3, name: 'Charlie', age: 21 }
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
// console.log(student);
// console.log(studentIndex);

const stu = students.find((student) => student.id === 3);
// console.log(stu); // Output: { id: 3, name: 'Charlie', age: 21 }

// Working with loops and Arrays
const scores = [85, 92, 78, 90, 88];

// for (let s = 0; s < students.length; s++) {
//   console.log(students[s]);
// }

// for (let score of scores) {
//   console.log(score);
// }

// students.forEach((student) => {
//   console.log(`Student ${student.id}: ${student.name}, Age: ${student.age}`);
// });

// let retryCount = 3;
// const response = { status: 200 };
// if (response.status === 401) {
//   for (let i = 0; i <= retryCount; i++) {
//     console.log("Retrying...");
//   }
// }

const double = scores.map(s => s * 2)
console.log(scores)
console.log(double)


const names = students.map(student => student.name)
// console.log(names)console.log(names)cc

const aboutStudent = students.map(s => `Student ${s.id}: ${s.name}, Age: ${s.age}`)
console.log(aboutStudent)

for (let a of aboutStudent) {
  console.log(a)
}


// function addVat (price){
//  return price * 7.5
// }

const prices = [100.99, 200.00, 300.99, 400.9009, 500.99]

const addVat = prices.map(price => (price * 7.5).toFixed(2))

console.log(addVat)


function convertC2F(c) {
  return (c * 9/5) + 32;
}
const celsiusTemperatures = [0, 20, 37, 100];

const fahrenheitTemperatures = celsiusTemperatures.map((c)=>(
   convertC2F(c)
));

console.log(fahrenheitTemperatures); // Output: [32, 68, 98.6, 212]


const areaOfSquare = (side) => side**2;
const sideLengths = [2, 3, 4, 5]; 
const areas = sideLengths.map((side)=> areaOfSquare(side));
console.log(areas); // Output: [4, 9, 16, 25]


const filterStudent = students.filter(student => student.age < 21).map(student => student.name);

console.log(filterStudent) // Output: ['Bob']


// const products =[
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 500 },
//     { id: 3, name: "Tablet", price: 300 }
// ]

// const stockprices = products.filter(product => product.price > 300).map(product => product.price)
// console.log(stockprices) // Output: [1000, 500]

const studentsWithscores = [
  { id: 1, name: "Alice", score: 85 },
  { id: 2, name: "Bob", score: 92 },
  { id: 3, name: "Charlie", score: 40 },
];

const studentswith50 = studentsWithscores.filter(student => student.score >= 50)

console.log(studentswith50)

const products = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        price: 79.99,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Smartphone 5G",
        price: 699.99,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Laptop Backpack",
        price: 49.99,
        category: "Accessories"
    },
    {
        id: 4,
        name: "USB-C Fast Charger",
        price: 29.99,
        category: "Electronics"
    },
    {
        id: 5,
        name: "Cotton T-Shirt",
        price: 19.99,
        category: "Clothing"
    },
    {
        id: 6,
        name: "Smart Watch Fitness Tracker",
        price: 149.99,
        category: "Electronics"
    },
    {
        id: 7,
        name: "Coffee Mug Set",
        price: 24.99,
        category: "Home & Kitchen"
    },
    {
        id: 8,
        name: "Wireless Mouse",
        price: 34.99,
        category: "Electronics"
    },
    {
        id: 9,
        name: "Running Shoes",
        price: 89.99,
        category: "Footwear"
    },
    {
        id: 10,
        name: "Tablet 10-inch Display",
        price: 329.99,
        category: "Electronics"
    }
];

const electronicProducts = products.filter(product => product.category === "Electronics")
console.log(electronicProducts)

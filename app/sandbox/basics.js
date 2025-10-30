// Variables
let score = 80;
const name = "DevLab";

// Conditionals
if (score > 90) {
  console.log("Excellent!");
} else if (score > 75) {
  console.log("Good job!");
} else {
  console.log("Keep trying!");
}

// Loops
for (let i = 0; i < 3; i++) {
  console.log(`Loop count: ${i}`);
}

// Functions
function greet(person) {
  return `Hello, ${person}!`;
}

console.log(greet(name));
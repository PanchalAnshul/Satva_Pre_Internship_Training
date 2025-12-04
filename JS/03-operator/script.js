console.log("=== JS Task 03 — Operators ===");

// --------------------------------------
// 1. Arithmetic Operators
// --------------------------------------
let a = 10, b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Power:", a ** b);

// --------------------------------------
// 2. Assignment Operators
// --------------------------------------
let x = 5;
console.log("\nInitial x =", x);

x += 3;  // x = x + 3
console.log("x += 3 →", x);

x *= 2;  
console.log("x *= 2 →", x);

// --------------------------------------
// 3. Comparison Operators
// --------------------------------------
console.log("\n10 == '10' →", 10 == "10");
console.log("10 === '10' →", 10 === "10"); // strict
console.log("10 > 5 →", 10 > 5);
console.log("3 <= 2 →", 3 <= 2);

// --------------------------------------
// 4. Logical Operators
// --------------------------------------
let age = 20;

console.log("\n(age > 18 && age < 25) →", age > 18 && age < 25);
console.log("(age < 18 || age > 60) →", age < 18 || age > 60);
console.log("!(age == 20) →", !(age == 20));

// --------------------------------------
// 5. Ternary Operator
// --------------------------------------
let mark = 75;
let result = mark >= 40 ? "Pass" : "Fail";
console.log("\nTernary Result:", result);

// --------------------------------------
// 6. String Operators
// --------------------------------------
let fname = "Anshul";
let lname = "Panchal";

console.log("\nFull Name = ", fname + " " + lname);

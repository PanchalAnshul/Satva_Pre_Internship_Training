console.log("=== JS Task 04 — Arithmetic Operators ===");

let a = 12;
let b = 5;

console.log("a =", a, " b =", b);

// --------------------------------------
// 1. Basic Arithmetic
// --------------------------------------
console.log("Addition (a + b) =", a + b);
console.log("Subtraction (a - b) =", a - b);
console.log("Multiplication (a * b) =", a * b);
console.log("Division (a / b) =", a / b);
console.log("Modulus (a % b) =", a % b);
console.log("Exponent (a ** b) =", a ** b);

// --------------------------------------
// 2. Increment & Decrement
// --------------------------------------
let x = 10;

console.log("\nInitial x =", x);

console.log("x++ =", x++);     // shows old value, then increments
console.log("After x++ →", x);

console.log("++x =", ++x);     // increments first, then prints

console.log("x-- =", x--);
console.log("After x-- →", x);

console.log("--x =", --x);

// --------------------------------------
// 3. Real-world Use Cases
// --------------------------------------

// Example: Total bill calculation
let price = 499;
let quantity = 3;
let total = price * quantity;

console.log("\nTotal Bill =", total);

// Example: Discount calculation
let discount = 20; // 20%
let discountAmount = (total * discount) / 100;

console.log("Discount Amount =", discountAmount);

// Final amount
let finalAmount = total - discountAmount;
console.log("Final Bill After Discount =", finalAmount);

// Example: Percentage calculation
let obtained = 430;
let outOf = 500;
let percentage = (obtained / outOf) * 100;

console.log("\nPercentage =", percentage + "%");

// Example: Simple interest
let p = 10000, r = 7, t = 2;
let SI = (p * r * t) / 100;

console.log("\nSimple Interest =", SI);

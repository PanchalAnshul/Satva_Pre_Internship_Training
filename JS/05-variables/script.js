console.log("=== JS Task 05 — Variables ===");

// ----------------------------------------
// var (function scoped, can be redeclared)
// ----------------------------------------
var x = 10;
console.log("var x =", x);
var x = 20; // redeclaration allowed
console.log("var x after redeclare =", x);

// ----------------------------------------
// let (block scoped, cannot redeclare)
// ----------------------------------------
let name = "Anshul";
console.log("let name =", name);
name = "Panchal"; // reassignment allowed
console.log("let name updated =", name);

// ----------------------------------------
// const (block scoped, cannot reassign)
// ----------------------------------------
const pi = 3.14;
console.log("const pi =", pi);
// pi = 3.15;  // ❌ Uncomment to see error

// ----------------------------------------
// Scope Difference Example
// ----------------------------------------
console.log("\n--- Scope Example ---");

var a = 100;
let b = 200;

if (true) {
  var a = 300; // overwrites outer var
  let b = 400; // block scoped
  console.log("inside block → var a =", a);
  console.log("inside block → let b =", b);
}

console.log("outside block → var a =", a);
console.log("outside block → let b =", b);

// ----------------------------------------
// Real-life Example
// ----------------------------------------
let price = 999;
const gst = 18; // GST constant
let finalPrice = price + (price * gst) / 100;

console.log("\nFinal Price with GST =", finalPrice);

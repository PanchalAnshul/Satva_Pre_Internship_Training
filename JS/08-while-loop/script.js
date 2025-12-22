console.log("=== JS Task 08 — While Loop ===");

// 1. Basic while loop
let i = 1;

console.log("Counting 1 to 5 using while:");
while (i <= 5) {
  console.log(i);
  i++;
}

// 2. do...while loop
let j = 1;

console.log("\nCounting 1 to 5 using do...while:");
do {
  console.log(j);
  j++;
} while (j <= 5);

// 3. break usage
console.log("\nBreak Example:");

let k = 1;
while (k <= 10) {
  if (k === 5) break;
  console.log(k);
  k++;
}

// 4. continue usage
console.log("\nContinue Example (skip 5):");

for (let x = 1; x <= 10; x++) {
  if (x === 5) continue;
  console.log(x);
}

// 5. Real-life loop example: count digits
console.log("\nCount digits:");

let number = 73921;
let count = 0;

while (number > 0) {
  number = Math.floor(number / 10);
  count++;
}

console.log("Total digits =", count);

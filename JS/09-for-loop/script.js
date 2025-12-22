console.log("=== JS Task 09 — For Loop ===");

// 1. Basic for loop
console.log("Counting 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 2. Looping backwards
console.log("\nCounting down from 5:");
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// 3. Nested loop (pattern)
console.log("\nPattern (Triangle):");
let pattern = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern += "* ";
  }
  pattern += "\n";
}
console.log(pattern);

// 4. Continue & Break
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}

console.log("\nBreak at 4:");
for (let i = 1; i <= 5; i++) {
  if (i === 4) break;
  console.log(i);
}

// 5. Real-life example: Sum of array
console.log("\nSum of array:");

let arr = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log("Array:", arr);
console.log("Sum =", sum);

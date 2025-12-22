console.log("=== JS Task 10 — Arrays ===");

// 1. Creating Arrays
let numbers = [10, 20, 30, 40, 50];
let fruits = ["apple", "banana", "orange"];
console.log("Numbers:", numbers);
console.log("Fruits:", fruits);

// 2. Accessing values
console.log("\nFirst Number:", numbers[0]);
console.log("Second Fruit:", fruits[1]);

// 3. Updating values
numbers[2] = 300;
console.log("\nUpdated Numbers:", numbers);

// 4. Loop through array (for loop)
console.log("\nLoop using for:");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5. Loop using for-of
console.log("\nLoop using for-of:");
for (let item of fruits) {
  console.log(item);
}

// 6. Common Array Methods
console.log("\n--- Array Methods ---");
let arr = [1, 2, 3];

arr.push(4);
console.log("push(4):", arr);

arr.pop();
console.log("pop():", arr);

arr.unshift(0);
console.log("unshift(0):", arr);

arr.shift();
console.log("shift():", arr);

console.log("includes(2):", arr.includes(2));
console.log("indexOf(2):", arr.indexOf(2));

console.log("join('-'):", arr.join('-'));

// 7. slice() — does not modify original
let sliced = numbers.slice(1, 4);
console.log("\nSliced (1 to 3):", sliced);
console.log("Original Numbers:", numbers);

// 8. splice() — modifies array
let spliced = fruits.splice(1, 1, "mango"); 
console.log("\nSpliced Fruits:", fruits);
console.log("Removed Element:", spliced);

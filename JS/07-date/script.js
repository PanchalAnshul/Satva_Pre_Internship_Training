console.log("=== JS Task 07 — Date Object ===");

// ----------------------------------------------
// 1. Create Date Objects
// ----------------------------------------------
let now = new Date();
console.log("Current Date & Time:", now);

let myBirthday = new Date("2003-05-19");
console.log("My Birthday:", myBirthday);

// ----------------------------------------------
// 2. Get Date Components
// ----------------------------------------------
console.log("Year:", now.getFullYear());
console.log("Month (0-based):", now.getMonth());  // 0 = Jan
console.log("Date:", now.getDate());
console.log("Day of Week (0=Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());

// ----------------------------------------------
// 3. Setting Date Values
// ----------------------------------------------
let future = new Date();
future.setFullYear(2030);
future.setMonth(11); // December
future.setDate(25);

console.log("Future Date (Modified):", future);

// ----------------------------------------------
// 4. Formatting Dates
// ----------------------------------------------
let formatted = now.toLocaleString("en-IN");
console.log("Formatted Date/Time (India):", formatted);

// ----------------------------------------------
// 5. Difference Between Two Dates
// ----------------------------------------------
let start = new Date("2025-01-01");
let end = new Date("2025-12-31");

let diffMs = end - start;
let diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log("Difference in Days (2025):", diffDays);

// ----------------------------------------------
// 6. Real-life Example: Age Calculator
// ----------------------------------------------
function calculateAge(dob) {
  let today = new Date();
  let birth = new Date(dob);

  let age = today.getFullYear() - birth.getFullYear();
  let monthDiff = today.getMonth() - birth.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }

  return age;
}

console.log("Age =", calculateAge("2003-05-19"));

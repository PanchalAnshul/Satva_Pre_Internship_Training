console.log("=== JS Task 06 — Objects ===");

// ----------------------------------------------
// 1. Creating an object
// ----------------------------------------------
let student = {
  name: "Anshul",
  age: 21,
  course: "Computer Engineering",
  marks: {
    math: 92,
    science: 88,
    english: 79,
  },

  greet: function () {
    return `Hello, I am ${this.name}`;
  }
};

console.log("Student Object:", student);

// ----------------------------------------------
// 2. Accessing Object Properties
// ----------------------------------------------
console.log("Name:", student.name);
console.log("Age:", student["age"]);
console.log("Math Marks:", student.marks.math);

// ----------------------------------------------
// 3. Updating values
// ----------------------------------------------
student.age = 22;
console.log("Updated Age:", student.age);

// ----------------------------------------------
// 4. Adding new properties
// ----------------------------------------------
student.city = "Ahmedabad";
console.log("Added City:", student.city);

// ----------------------------------------------
// 5. Deleting a property
// ----------------------------------------------
delete student.course;
console.log("After deleting course:", student);

// ----------------------------------------------
// 6. Object Method call
// ----------------------------------------------
console.log(student.greet());

// ----------------------------------------------
// 7. Looping over object
// ----------------------------------------------
console.log("\n--- Looping through object keys ---");

for (let key in student) {
  console.log(key, ":", student[key]);
}

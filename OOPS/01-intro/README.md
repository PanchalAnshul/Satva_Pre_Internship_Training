# 🧠 OOPS in Java — Introduction (Task 01)

## 🎯 Objective
Understand the basic concepts of Object-Oriented Programming (OOP) in Java and implement a simple practical program demonstrating all four pillars:
- Abstraction  
- Encapsulation  
- Inheritance  
- Polymorphism  

This task builds your foundation for real-world Java and backend development.

---

# 🟦 1. What is OOP?

OOP (Object-Oriented Programming) is a programming style in which software is designed using **objects**, not just functions.

### ✔ Why Java uses OOP?
- Helps organize large codebases  
- Makes code reusable  
- Makes maintenance easier  
- Solves real-world problems using real-world models  

---

# 🟦 2. Class & Object

### 🔹 Class → Blueprint / Template  
### 🔹 Object → Real instance created from the class  

Example:

```java
class Student {
    String name;
    int age;

    void study() {
        System.out.println(name + " is studying.");
    }
}

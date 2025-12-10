// Main.java
// OOPS Task 02 — Class, Objects & Constructors (Java)

class Student {
    // Fields (use private for encapsulation)
    private int id;
    private String firstName;
    private String lastName;
    private int age;

    // ---------- Constructors ----------
    // No-argument (default) constructor
    public Student() {
        // You can set default values
        this.id = 0;
        this.firstName = "Unknown";
        this.lastName = "";
        this.age = 0;
    }

    // Parameterized constructor
    public Student(int id, String firstName, String lastName, int age) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // ---------- Getters and Setters (encapsulation) ----------
    public int getId() {
        return id;
    }

    public void setId(int id) {
        if (id > 0) this.id = id; // simple validation
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        if (firstName != null) this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        if (lastName != null) this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        if (age >= 0) this.age = age;
    }

    // ---------- Methods ----------
    public String getFullName() {
        return this.firstName + (this.lastName.isEmpty() ? "" : " " + this.lastName);
    }

    public void greet() {
        System.out.println("Hello, I'm " + getFullName() + " (id=" + id + ", age=" + age + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        // 1) Using default constructor and setters
        Student s1 = new Student();          // object creation using new
        s1.setId(1);
        s1.setFirstName("Anshul");
        s1.setLastName("Panchal");
        s1.setAge(21);

        // Use methods
        System.out.println("Student 1 full name: " + s1.getFullName());
        s1.greet();

        // 2) Using parameterized constructor
        Student s2 = new Student(2, "Bill", "Gates", 65);
        System.out.println("Student 2 full name: " + s2.getFullName());
        s2.greet();

        // 3) Create a third student with minimal info
        Student s3 = new Student();
        s3.setFirstName("Steve");
        // no last name provided
        s3.greet();

        // 4) Demonstrate that each object has its own state
        s1.setAge(22); // change s1 only
        System.out.println("After birthday:");
        s1.greet();
        s2.greet();

        // 5) Show simple usage in a small array (multiple objects)
        Student[] students = { s1, s2, s3 };
        System.out.println("\nAll student full names:");
        for (Student s : students) {
            System.out.println("- " + s.getFullName());
        }
    }
}

// Inheritance Example — Person → Employee → Manager

class Person {
    public String firstName;
    public String lastName;

    public Person(String f, String l) {
        this.firstName = f;
        this.lastName = l;
    }

    public String getFullName() {
        return firstName + " " + lastName;
    }
}

class Employee extends Person {
    public int employeeId;

    public Employee(int id, String f, String l) {
        super(f, l); // call base constructor
        this.employeeId = id;
    }

    public void work() {
        System.out.println(getFullName() + " (ID:" + employeeId + ") is working.");
    }
}

// multi-level inheritance
class Manager extends Employee {
    public Manager(int id, String f, String l) {
        super(id, f, l);
    }

    @Override
    public void work() {
        System.out.println(getFullName() + " (Manager) is managing team.");
    }

    public void holdMeeting() {
        System.out.println(getFullName() + " holds a meeting.");
    }
}

public class Main {
    public static void main(String[] args) {
        Employee e = new Employee(101, "Anshul", "Panchal");
        e.work();

        Manager m = new Manager(201, "Rita", "Shah");
        m.work();
        m.holdMeeting();

        // polymorphism-ish: base type referring to derived instance
        Person p = new Manager(202, "Kiran", "Mehta");
        System.out.println("Person variable fullName: " + p.getFullName());
    }
}

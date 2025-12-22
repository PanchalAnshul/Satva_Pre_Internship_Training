// ----------- ABSTRACTION ----------- //
abstract class Employee {
    // Abstract method (must be implemented by child class)
    abstract void work();

    // Non-abstract method
    void showInfo() {
        System.out.println("Employee information displayed.");
    }
}

// -------- INHERITANCE + POLYMORPHISM -------- //
class Developer extends Employee {
    @Override
    void work() {
        System.out.println("Developer is writing Java code...");
    }
}

class Tester extends Employee {
    @Override
    void work() {
        System.out.println("Tester is testing the application...");
    }
}

// ----------- ENCAPSULATION ----------- //
class Salary {
    private int amount;

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        if (amount > 0) {
            this.amount = amount;
        } else {
            System.out.println("Invalid salary amount! Setting to 0.");
            this.amount = 0;
        }
    }
}

// ----------- MAIN CLASS ----------- //
public class Main {
    public static void main(String[] args) {
        
        // CLASS + OBJECT + INHERITANCE + POLYMORPHISM
        Employee emp1 = new Developer();
        Employee emp2 = new Tester();

        emp1.showInfo();
        emp1.work();   // Polymorphism → Developer version

        emp2.work();   // Polymorphism → Tester version


        // ENCAPSULATION EXAMPLE
        Salary salary = new Salary();
        salary.setAmount(50000);
        System.out.println("Salary = " + salary.getAmount());
    }
}
  
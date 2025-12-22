// Interface
interface Vehicle {
    void start();     // abstract method
    void stop();      // abstract method
}

// Class 1 implementing interface
class Car implements Vehicle {

    public void start() {
        System.out.println("Car is starting");
    }

    public void stop() {
        System.out.println("Car has stopped");
    }
}

// Class 2 implementing interface
class Bike implements Vehicle {

    public void start() {
        System.out.println("Bike is starting");
    }

    public void stop() {
        System.out.println("Bike has stopped");
    }
}

// Main class
public class Main {
    public static void main(String[] args) {

        // Interface reference, class object
        Vehicle v1 = new Car();
        Vehicle v2 = new Bike();

        v1.start();
        v1.stop();

        System.out.println("----------------");

        v2.start();
        v2.stop();
    }
}
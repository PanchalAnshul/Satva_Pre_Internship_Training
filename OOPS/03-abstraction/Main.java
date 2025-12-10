// Easy Abstraction Example (Java)

abstract class Shape {
    // abstract method (no body)
    abstract double getArea();

    // normal method
    void printShapeName() {
        System.out.println("This is a shape.");
    }
}

// Circle class implements abstract method
class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double getArea() {
        return 3.14 * radius * radius;
    }
}

// Rectangle class implements abstract method
class Rectangle extends Shape {
    double width;
    double height;

    Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    @Override
    double getArea() {
        return width * height;
    }
}

public class Main {
    public static void main(String[] args) {

        Shape c = new Circle(5);      // abstraction: treat as Shape
        Shape r = new Rectangle(4, 6);

        c.printShapeName();
        System.out.println("Circle Area: " + c.getArea());

        r.printShapeName();
        System.out.println("Rectangle Area: " + r.getArea());
    }
}

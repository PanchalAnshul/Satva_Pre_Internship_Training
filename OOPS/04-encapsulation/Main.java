// Encapsulation Example — BankAccount
class BankAccount {
    private String owner;
    private double balance; // hidden

    public BankAccount(String owner, double initial) {
        this.owner = owner;
        setBalance(initial); // use setter to validate
    }

    // getter
    public String getOwner() { return owner; }

    // setter with validation
    public void setBalance(double amount) {
        if (amount < 0) {
            System.out.println("Invalid initial balance. Set to 0.");
            this.balance = 0;
        } else {
            this.balance = amount;
        }
    }

    // public method to change balance (keeps control)
    public void deposit(double amt) {
        if (amt > 0) balance += amt;
        else System.out.println("Deposit must be positive.");
    }

    public void withdraw(double amt) {
        if (amt > 0 && amt <= balance) balance -= amt;
        else System.out.println("Invalid withdraw or insufficient funds.");
    }

    // public read-only view
    public double getBalance() { return balance; }
}

public class Main {
    public static void main(String[] args) {
        BankAccount a = new BankAccount("Anshul", 1000);
        System.out.println(a.getOwner() + " balance: " + a.getBalance());
        a.deposit(500);
        a.withdraw(2000); // should fail
        a.withdraw(300);
        System.out.println("Final balance: " + a.getBalance());
    }
}

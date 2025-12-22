// Enum Example — WeekDays and simple usage

enum WeekDay {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY;
}

public class Main {
    public static void main(String[] args) {
        WeekDay today = WeekDay.WEDNESDAY;
        System.out.println("Today: " + today);           // name
        System.out.println("Ordinal: " + today.ordinal()); // 0-based index

        // switch on enum
        switch(today) {
            case SATURDAY:
            case SUNDAY:
                System.out.println("Weekend!");
                break;
            default:
                System.out.println("Weekday — time to study/work.");
        }

        // convert from ordinal
        int i = 0;
        WeekDay first = WeekDay.values()[i];
        System.out.println("First day: " + first);
    }
}
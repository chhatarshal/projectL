import java.util.ArrayList;
import java.util.List;

public class Fib {
    

    public static void main(String arg[]) {
// f(n) = f(n - 1) + f(n-2)
        List result = printFib(5);
        System.out.println(result.toString());

    }

    public static List<Integer> printFib(int n) {
        if (n == 1) {
            List list = new ArrayList<>();
            list.add(1);
            return list;
        }

        List l1 = printFib(n - 1);
        List l2 = printFib(n - 2);
        l1.addAll(l2);
        return l1;

    }
}

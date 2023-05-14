
import java.util.*;

public class Test {

    public static void main(String args[]) {

        System.out.println("========> Printing ============>");

        List<Integer> intgs = Arrays.asList(3, 5, 6, 7, 8);

        int result = intgs.stream().mapToInt(i -> i).sum();

        System.out.println(result);

        int result2 = intgs.stream().reduce(0, (a,b) -> a + b);

        System.out.println(result2);
    }
}
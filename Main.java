package Pages;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;

public class Main {
    public static void main(String[] args) throws InterruptedException {
        Result result = JUnitCore.runClasses(ShopizerTest.class);
        System.out.println("Result= " + result.wasSuccessful());
        Thread.sleep(10000);
    }
}
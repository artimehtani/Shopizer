import org.junit.runner.JUnitCore;
import org.junit.runner.Result;





    public class MainClass {

        public static void main(String[] args) throws InterruptedException {
            // write your code here
            Result result = JUnitCore.runClasses(PetClinicClass.class);
            System.out.println(result.wasSuccessful());
        }
    }


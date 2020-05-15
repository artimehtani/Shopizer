

import org.junit.*;
import org.junit.runner.JUnitCore;
import org.junit.runner.Result;
import org.openqa.selenium.remote.ProtocolHandshake;

    public class MainClass {


        public static void main(String[] args) throws InterruptedException {
            // write your code here
            Result result = JUnitCore.runClasses(Shopizer.class);
            // Result result2 = JUnitCore.runClasses(PrestaShop2.class);

            System.out.println(result.wasSuccessful());
            // System.out.println(result2.wasSuccessful());

        }
    }




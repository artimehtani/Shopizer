
import org.junit.BeforeClass;
import org.junit.Test;

import org.junit.Before;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import org.openqa.selenium.chrome.ChromeDriver;


import java.util.concurrent.TimeUnit;

public class PetClinicClass {



    static WebDriver driver = new ChromeDriver();

    @BeforeClass
    public static void setUp() {
        System.out.println(" BeforeClass ... setup ");
        driver.get("http://localhost:8080/admin/");
    }

    @Before
    public void goHome() {
        //System.out.println(" before....");
        driver.get("http://localhost:8080/admin/");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);


    }


    //As a Customer I would like to select the shipping  so that  I can able to receive products for proper address
    @Test
    public void shippingMethods()throws InterruptedException {
        //WebDriver driver = new ChromeDriver();
        driver.get("http://localhost:8080/admin/");
        driver.findElement(By.name("username")).sendKeys("admin@shopizer.com");
        driver.findElement(By.name("password")).sendKeys("password");
        WebElement submit = driver.findElement(By.xpath("//a[@id = 'formSubmitButton']"));
        submit.click();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

        //driver.switchTo().frame("framelive");
        driver.findElement(By.linkText("Shipping")).click();
       /*
        driver.findElement(By.linkText("Shipping configurations")).click();
        driver.findElement(By.xpath("//body//div//div//div//div//div//div//div//div//div//input[2]")).click();
        driver.findElement(By.xpath("//tr[@aria-posinset='2'][@role='listitem']")).click();
        //driver.findElement(By.xpath("//td[@class='cellSelected']//div//nobr//img")).click();
        driver.findElement(By.xpath("//button[@class='btn btn-success']")).submit();
*/
        driver.findElement(By.xpath("//a[@id='shipping-methods-link']")).click();
        driver.findElement(By.xpath("//a[contains(text(),'Weight based shipping price')]")).click();
        driver.findElement(By.xpath("//input[@id='region']")).sendKeys("Europe");
        ;driver.findElement(By.xpath("//button[contains(text(),'Add region')]")).click();
        driver.findElement(By.xpath("//form[3]//select[1]")).click();
        //driver.findElement(By.xpath("[@xpath=\"4\"]")).click();
        driver.findElement(By.xpath("//option[@value='Europe']")).click();
        driver.findElement(By.xpath("//option[@value='SE']")).click();
        driver.findElement(By.xpath("//button[@type='submit']")).click();

        // driver.findElement(By.xpath("//a[contains(text(),'Europe')]")).click();





    }


    /*@AfterClass
    public static void quit() {

        driver.quit();
    }
    */

}


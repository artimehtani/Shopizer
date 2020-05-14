package Pages;

import org.junit.*;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class ShopizerTest {
    static WebDriver driver;

    @BeforeClass
    public static void startBrowser() {
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        System.out.println("Starting the browser");
    }

    @Before
    public void goHome() {
        driver = new ChromeDriver();
        System.out.println("------------>"+ driver);
        System.out.println("Going admin page of Shopizer");
        driver.get("http://localhost:8080/admin/logon.html");
        driver.manage().window().maximize();
        String actual=driver.getTitle();
        String expected= "Store administration";
        Assert.assertEquals(actual,expected);
        System.out.println("Assert Passed");
        driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
        driver.findElement(By.id("username")).sendKeys("admin@shopizer.com");
        driver.findElement(By.id("password")).sendKeys("password");
        driver.findElement(By.cssSelector(".btn")).click();


    }

    @Test
    //As an admin i am able to create a store
    public void createStore() {
        driver.findElement(By.cssSelector(".icon-file")).click();
        driver.findElement(By.xpath("//a[@class='dropdown-toggle'][contains(text(),'Store')]")).click();
        driver.findElement(By.id("create-store-link")).click();
        driver.findElement(By.id("storename")).sendKeys("OUR_VINTAGE");
        driver.findElement(By.id("code")).sendKeys("STORE_RED");
        driver.findElement(By.id("storephone")).sendKeys("8410150000");
        driver.findElement(By.id("storeEmailAddress")).sendKeys("myVintage@shopizer.com");
        driver.findElement(By.id("storeaddress")).sendKeys(" 15 mybirthdayvägen");
        driver.findElement(By.id("storecity")).sendKeys("Stockholm");
        Select s = new Select(driver.findElement(By.id("country.isoCode")));
        //s.selectByIndex(80);
        s.selectByValue("IN");
        driver.findElement(By.id("storestateprovince")).clear();
        driver.findElement(By.id("storestateprovince")).sendKeys("Delhi");
        driver.findElement(By.id("storepostalcode")).sendKeys("11111");
        Select s1 = new Select(driver.findElement(By.id("currency.id")));
        s1.selectByValue("132");
        Select s2 = new Select(driver.findElement(By.id("weightunitcode")));
        s2.selectByValue("KG");
        driver.findElement(By.cssSelector("button[type='submit']")).click();

    }
    @Test
    //As an admin I would like to be able to update default merchant store details
    public void changeDefaultStoreDetails(){
        driver.findElement(By.cssSelector(".icon-file")).click();
        driver.findElement(By.id("storename")).clear();
        driver.findElement(By.id("storename")).sendKeys("MY_SHOPIZER");
        driver.findElement(By.id("storephone")).clear();
        driver.findElement(By.id("storephone")).sendKeys("8410150000");
        driver.findElement(By.id("storeEmailAddress")).clear();
        driver.findElement(By.id("storeEmailAddress")).sendKeys("myVintage@shopizer.com");
        driver.findElement(By.id("storeaddress")).clear();
        driver.findElement(By.id("storeaddress")).sendKeys(" 15 mybirthdayvägen");
        driver.findElement(By.id("storecity")).clear();
        driver.findElement(By.id("storecity")).sendKeys("Stockholm");
        Select s = new Select(driver.findElement(By.id("country.isoCode")));
        //s.selectByIndex(80);
        s.selectByValue("SE");
        driver.findElement(By.id("storestateprovince")).clear();
        driver.findElement(By.id("storestateprovince")).sendKeys("Malmö");
        driver.findElement(By.id("storepostalcode")).clear();
        driver.findElement(By.id("storepostalcode")).sendKeys("22222");
        Select s1 = new Select(driver.findElement(By.id("currency.id")));
        s1.selectByValue("36");
        Select s2 = new Select(driver.findElement(By.id("weightunitcode")));
        s2.selectByValue("KG");
        driver.findElement(By.cssSelector("button[type='submit']")).click();
        String actualUrl=driver.getCurrentUrl();
        String expectedUrl="http://localhost:8080/admin/store/save.html";
        Assert.assertEquals(actualUrl,expectedUrl);
        System.out.println("URL Assert Passed");

    }
    @After
    public void closeBrowser() {
        driver.quit();
    }

}

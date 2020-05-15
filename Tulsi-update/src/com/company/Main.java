package com.company;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;


public class Main {

    public static void main(String[] args)
    {

        
            WebDriver driver = new ChromeDriver ();
        driver.get ( " http://www.google.se " );
        driver.findElement (By. cssSelector ( "#gbqfq" ))
                .sendKeys ( "fromage!" );
        driver.findElement (By. cssSelector ( "#gbqfb" )). click ();
        driver.findElement (By. id ( "hdtb_tls" )). isDisplayed ();
    }
}

package step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeDriverService;
import org.openqa.selenium.chrome.ChromeOptions;

public class Hooks
{
    public static WebDriver webDriver;

    @Before
    public void openBrowser()
    {
        System.setProperty(ChromeDriverService.CHROME_DRIVER_EXE_PROPERTY, System.getProperty("user.dir")+  "/driver/chromedriver.exe");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--remote-allow-origins=*");
        WebDriverManager.chromedriver().setup();

        webDriver = new ChromeDriver(options);
        webDriver.get("https://www.service.nsw.gov.au/");
        webDriver.manage().window().maximize();
    }

    @After
    public void closeBrowser()
    {
        webDriver.quit();
    }

}

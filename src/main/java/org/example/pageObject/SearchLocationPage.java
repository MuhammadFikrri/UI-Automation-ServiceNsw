package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchLocationPage
{
    public static WebDriver driver;

    public SearchLocationPage(WebDriver driver)
    {
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }

    @FindBy(xpath = "//ul[@class='MainNav__list-peZtddYtxn']//a[.='Find locations']")
    private WebElement btnFindLocation;

    public void clickBtnFindLocation()
    {
        btnFindLocation.click();
    }

    @FindBy(xpath = "//h1[@id='page-title']")
    private WebElement searchLocationResult;

    public boolean successSearchLocationResult()
    {
        return searchLocationResult.isDisplayed();
    }

    @FindBy(xpath = "//input[@id='locatorTextSearch']")
    private WebElement locatorTextSearch;

    public void setLocatorTextSearch(String locations)
    {
        locatorTextSearch.sendKeys(locations);
    }

    @FindBy(xpath = "//button[@class='button button--primary button--xxlarge']")
    private WebElement btnSearchLocation;

    public void clickBtnSearchLocation()
    {
        btnSearchLocation.click();
    }

    @FindBy(xpath = "//a[.='Wynyard Service Centre']")
    private WebElement locationResult;

    public boolean successLocationResult()
    {
        return locationResult.isDisplayed();
    }

    public String getValueLocationResult() {
        return locationResult.getText();
    }
}

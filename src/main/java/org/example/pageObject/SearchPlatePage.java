package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchPlatePage
{
    public static WebDriver driver;

    public SearchPlatePage(WebDriver driver)
    {
        PageFactory.initElements(driver, this);
        this.driver = driver ;
    }

    @FindBy(xpath = "//h1[.='Service NSW makes it easier to find government information and services']")
    private WebElement serviceNSWTagline;

    public boolean isDisplayTagline()
    {
        return serviceNSWTagline.isDisplayed();
    }

    @FindBy(xpath = "//section[@class='personalised-content']/div[@class='region']/div[1]//input[@name='q']")
    private WebElement largeSearchBar;

    public void setLargeSearchBar(String plate)
    {
        largeSearchBar.sendKeys(plate);
    }

    @FindBy(xpath = "//section[@class='personalised-content']/div[@class='region']/div[1]//button[@class='button button--primary']")
    private WebElement btnPrimarySearch;

    public void clickBtnPrimarySearch()
    {
        btnPrimarySearch.click();
    }

    @FindBy(xpath = "//a[.='Order special number plates as a gift']")
    private WebElement searchResult;

    public boolean successSearchResult()
    {
        return searchResult.isDisplayed();
    }

    @FindBy(xpath = "//div[@class='GlobalHeader__search-oxaq0WIJpk']//input[@name='q']")
    private WebElement topSearchBar;

    public void setTopSearchBar(String plate)
    {
        topSearchBar.sendKeys(plate);
    }

    @FindBy(xpath = "//div[@class='GlobalHeader__search-oxaq0WIJpk']//button[@class='SearchBar__button-KIxXUfFE9V']")
    private WebElement btnTopSearch;

    public void clickBtnTopSearch()
    {
        btnTopSearch.click();
    }
}

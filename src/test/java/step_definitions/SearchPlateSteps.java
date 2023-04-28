package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SearchPlatePage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SearchPlateSteps
{
    private WebDriver webDriver;
    SearchPlatePage searchPlatePage;

    public SearchPlateSteps(){
        super();
        this.webDriver = Hooks.webDriver;
        searchPlatePage = new SearchPlatePage(webDriver);
    }

    @Given("User already open website Service NSW")
    public void userAlreadyOpenWebsiteServiceNSW() throws InterruptedException
    {
        searchPlatePage.isDisplayTagline();
        Thread.sleep(2000);
    }

    @When("User input \"(.*)\" in large search bar")
    public void userInputInLargeSearchBar(String largeSearchBar) throws InterruptedException
    {
        searchPlatePage.setLargeSearchBar(largeSearchBar);
        Thread.sleep(2000);
    }

    @And("User click primary search button")
    public void userClickPrimarySearchButton() throws InterruptedException
    {
        searchPlatePage.clickBtnPrimarySearch();
        Thread.sleep(2000);
    }

    @Then("System should displays search results")
    public void systemShouldDisplaysSearchResults() throws InterruptedException
    {
        Assert.assertTrue(searchPlatePage.successSearchResult());
        Thread.sleep(2000);
    }

    @When("User input \"(.*)\" in top search bar")
    public void userInputInTopSearchBar(String topSearchBar) throws InterruptedException
    {
        searchPlatePage.setTopSearchBar(topSearchBar);
        Thread.sleep(2000);
    }

    @And("User click top search button")
    public void userClickTopSearchButton() throws InterruptedException
    {
        searchPlatePage.clickBtnTopSearch();
        Thread.sleep(2000);
    }
}

package step_definitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.SearchLocationPage;
import org.example.pageObject.SearchPlatePage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class SearchLocationSteps
{
    private WebDriver webDriver;
    SearchLocationPage searchLocationPage;

    public SearchLocationSteps()
    {
        super();
        this.webDriver = Hooks.webDriver;
        searchLocationPage = new SearchLocationPage(webDriver);
    }

    @When("User click button Find Location")
    public void userClickButtonFindLocation() throws InterruptedException
    {
        searchLocationPage.clickBtnFindLocation();
        Thread.sleep(2000);
    }

    @Then("System should displays Find Location page")
    public void systemShouldDisplaysFindLocationPage() throws InterruptedException
    {
        Assert.assertTrue(searchLocationPage.successSearchLocationResult());
        Thread.sleep(2000);
    }

    @And("User input \"(.*)\" in text search")
    public void userInputInTextSearch(String locations) throws InterruptedException
    {
        searchLocationPage.setLocatorTextSearch(locations);
        Thread.sleep(2000);
    }

    @And("User click search location button")
    public void userClickSearchLocationButton() throws InterruptedException
    {
        searchLocationPage.clickBtnSearchLocation();
        Thread.sleep(2000);
    }

    @And("System should displays location results")
    public void systemShouldDisplaysLocationResults() throws InterruptedException
    {
        Assert.assertTrue(searchLocationPage.successLocationResult());
        Thread.sleep(2000);
    }

    @And("It should use service centre named as \"(.*)\"")
    public void itShouldUseServiceCentreNamedAs(String expectedLocation) throws InterruptedException
    {
        Assert.assertEquals(expectedLocation, searchLocationPage.getValueLocationResult());
        Thread.sleep(2000);
    }
}

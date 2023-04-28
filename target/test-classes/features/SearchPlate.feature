@SearchPlate
  Feature: Search Plate
  As a user i want to search "Apply for a number plate"

    Scenario: Normal search in large search bar
      Given User already open website Service NSW
      When User input "Apply for a number plate" in large search bar
      And User click primary search button
      Then System should displays search results

    Scenario: Normal search in top search bar
      Given User already open website Service NSW
      When User input "Apply for a number plate" in top search bar
      And User click top search button
      Then System should displays search results
@SearchLocations
Feature: Search Locations
  As a user i want to search a Service NSW location

  Scenario Outline: Search location
    Given User already open website Service NSW
    When User click button Find Location
    Then System should displays Find Location page
    And User input "<suburb_locations>" in text search
    And User click search location button
    And System should displays location results
    And It should use service centre named as "<locations_result>"
    Examples:
      | suburb_locations             | locations_result            |
      | Sydney 2000                  | Marrickville Service Centre |
      | Sydney Domestic Airport 2020 | Rockdale Service Centre     |
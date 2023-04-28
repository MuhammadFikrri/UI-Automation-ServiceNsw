$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SearchLocations.feature");
formatter.feature({
  "line": 2,
  "name": "Search Locations",
  "description": "As a user i want to search a Service NSW location",
  "id": "search-locations",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SearchLocations"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search location",
  "description": "",
  "id": "search-locations;search-location",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "User already open website Service NSW",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click button Find Location",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System should displays Find Location page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User input \"\u003csuburb_locations\u003e\" in text search",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click search location button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "System should displays location results",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "It should use service centre named as \"\u003clocations_result\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "search-locations;search-location;",
  "rows": [
    {
      "cells": [
        "suburb_locations",
        "locations_result"
      ],
      "line": 14,
      "id": "search-locations;search-location;;1"
    },
    {
      "cells": [
        "Sydney 2000",
        "Marrickville Service Centre"
      ],
      "line": 15,
      "id": "search-locations;search-location;;2"
    },
    {
      "cells": [
        "Sydney Domestic Airport 2020",
        "Rockdale Service Centre"
      ],
      "line": 16,
      "id": "search-locations;search-location;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9364120700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search location",
  "description": "",
  "id": "search-locations;search-location;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SearchLocations"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already open website Service NSW",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click button Find Location",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System should displays Find Location page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User input \"Sydney 2000\" in text search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click search location button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "System should displays location results",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "It should use service centre named as \"Marrickville Service Centre\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchPlateSteps.userAlreadyOpenWebsiteServiceNSW()"
});
formatter.result({
  "duration": 2241904600,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.userClickButtonFindLocation()"
});
formatter.result({
  "duration": 3964557700,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.systemShouldDisplaysFindLocationPage()"
});
formatter.result({
  "duration": 2038125900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 12
    }
  ],
  "location": "SearchLocationSteps.userInputInTextSearch(String)"
});
formatter.result({
  "duration": 2083673900,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.userClickSearchLocationButton()"
});
formatter.result({
  "duration": 2118940600,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.systemShouldDisplaysLocationResults()"
});
formatter.result({
  "duration": 2066840000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Marrickville Service Centre",
      "offset": 39
    }
  ],
  "location": "SearchLocationSteps.itShouldUseServiceCentreNamedAs(String)"
});
formatter.result({
  "duration": 18231300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Marrickville] Service Centre\u003e but was:\u003c[Wynyard] Service Centre\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step_definitions.SearchLocationSteps.itShouldUseServiceCentreNamedAs(SearchLocationSteps.java:62)\r\n\tat ✽.And It should use service centre named as \"Marrickville Service Centre\"(features/SearchLocations.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 716971100,
  "status": "passed"
});
formatter.before({
  "duration": 8595819500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Search location",
  "description": "",
  "id": "search-locations;search-location;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@SearchLocations"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User already open website Service NSW",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User click button Find Location",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System should displays Find Location page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User input \"Sydney Domestic Airport 2020\" in text search",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User click search location button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "System should displays location results",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "It should use service centre named as \"Rockdale Service Centre\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "SearchPlateSteps.userAlreadyOpenWebsiteServiceNSW()"
});
formatter.result({
  "duration": 2048180900,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.userClickButtonFindLocation()"
});
formatter.result({
  "duration": 5953680500,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.systemShouldDisplaysFindLocationPage()"
});
formatter.result({
  "duration": 2023033600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney Domestic Airport 2020",
      "offset": 12
    }
  ],
  "location": "SearchLocationSteps.userInputInTextSearch(String)"
});
formatter.result({
  "duration": 2067773100,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.userClickSearchLocationButton()"
});
formatter.result({
  "duration": 2083386300,
  "status": "passed"
});
formatter.match({
  "location": "SearchLocationSteps.systemShouldDisplaysLocationResults()"
});
formatter.result({
  "duration": 2025603400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rockdale Service Centre",
      "offset": 39
    }
  ],
  "location": "SearchLocationSteps.itShouldUseServiceCentreNamedAs(String)"
});
formatter.result({
  "duration": 26137000,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Rockdale] Service Centre\u003e but was:\u003c[Wynyard] Service Centre\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat step_definitions.SearchLocationSteps.itShouldUseServiceCentreNamedAs(SearchLocationSteps.java:62)\r\n\tat ✽.And It should use service centre named as \"Rockdale Service Centre\"(features/SearchLocations.feature:12)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 736758900,
  "status": "passed"
});
formatter.uri("features/SearchPlate.feature");
formatter.feature({
  "line": 2,
  "name": "Search Plate",
  "description": "As a user i want to search \"Apply for a number plate\"",
  "id": "search-plate",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SearchPlate"
    }
  ]
});
formatter.before({
  "duration": 5633231100,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Normal search in large search bar",
  "description": "",
  "id": "search-plate;normal-search-in-large-search-bar",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User already open website Service NSW",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"Apply for a number plate\" in large search bar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User click primary search button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "System should displays search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPlateSteps.userAlreadyOpenWebsiteServiceNSW()"
});
formatter.result({
  "duration": 2036852100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 12
    }
  ],
  "location": "SearchPlateSteps.userInputInLargeSearchBar(String)"
});
formatter.result({
  "duration": 2090714500,
  "status": "passed"
});
formatter.match({
  "location": "SearchPlateSteps.userClickPrimarySearchButton()"
});
formatter.result({
  "duration": 4327586500,
  "status": "passed"
});
formatter.match({
  "location": "SearchPlateSteps.systemShouldDisplaysSearchResults()"
});
formatter.result({
  "duration": 2023227600,
  "status": "passed"
});
formatter.after({
  "duration": 662078900,
  "status": "passed"
});
formatter.before({
  "duration": 5477860800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Normal search in top search bar",
  "description": "",
  "id": "search-plate;normal-search-in-top-search-bar",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "User already open website Service NSW",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User input \"Apply for a number plate\" in top search bar",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User click top search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "System should displays search results",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchPlateSteps.userAlreadyOpenWebsiteServiceNSW()"
});
formatter.result({
  "duration": 2038402600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Apply for a number plate",
      "offset": 12
    }
  ],
  "location": "SearchPlateSteps.userInputInTopSearchBar(String)"
});
formatter.result({
  "duration": 2095925400,
  "status": "passed"
});
formatter.match({
  "location": "SearchPlateSteps.userClickTopSearchButton()"
});
formatter.result({
  "duration": 3926715600,
  "status": "passed"
});
formatter.match({
  "location": "SearchPlateSteps.systemShouldDisplaysSearchResults()"
});
formatter.result({
  "duration": 2025030900,
  "status": "passed"
});
formatter.after({
  "duration": 672449200,
  "status": "passed"
});
});
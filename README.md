### Pseudocode
```
//----------------------General HTML Layout--------------------------------
// General HTML Layout
//      -NavBar (title) x
//          -Top of browser x
//          -"Weather Dashboard" x
//          -Dark Gray background x
//          -White font-color x
//      -Card that includes (search & city listing)
//          -"Search for City:" x
//          -Search input box w/ magnifying glass icon x
//          -Below the search input box is a list of cities in cells format x
//              -this is where the cities will be saved and displayed per the users search history x
//      -Card that includes (current city data)
//          -City Name + (date) + icon of current weather (h1?) x
//          -Temperature: 90.9 F (in farenheit) (h2?) x
//          -Humidity: 41% (h2?) x
//          -Wind Speed: 4.7 MPH (h2?) x
//          -UV Index: 9.49 (h2? + value is in colored box depending o high (red) vs low value (tbd)) x
//          -Light gray border around this section of the card x
//      -Card that includes (5-day forecast) x
//          -located directly below above section x
//          -"5-Day Forecast:" is the title x
//          -has cards/boxes for each day x
//              -cards have blue background x
//              -contain the following data points: x
//                  -date (h1) (8/16/2019) x
//                  -icon of expected weather condition x
//                  -temperature: (h2) "Temp: 86.84 F" x
//                  -humidity: (h2) "33%" x
//------------------------JavaScript Code-----------------------------------
// Functions that I will need
//      -NavBar: No code required
//      -AJAX API request and return Code
//          -Need to make request to the website API to return data points in the form of object/arrays
//      -City listing
//          -Search functionality for city search
//          -Save Local Storage for history of city search
//          -jQuery to dynamically output city name
//      -Current City Data
//          -jQuery to dynamically output data points using the called data
//      -5-Day Forecast
//          -jQuery to dynamically output data point using the calle data
//      -Bonus: Add your current city's data on page load
//------------------------System Requirements--------------------------------

// What I need for this to work:
//      -HTML file to contain all of the general layout identified under "General HTML Layout"
//          -link to Bootstrap - Header
//          -link to Javascript file - Bottom Body
//          -link to CSS file - Header under Bootstrap link
//          -link to Font Awesome - Header under Bootstrap
//      -Javascript file to contain all of my code and logic and functionality of the app
//          -use of Local Storage to retain city search history
//          -use of jQuery to fill-in/apply the HTML elements
//          -use of server side API code to link to https://openweather.org/api
//              -to retrieve weather data for cities
//          -CSS file - very little as bootstrap will be leveraged
//          -Bootstrap Components and Utilities
```

# 06 Server-Side APIs: Weather Dashboard

Developers are often tasked with retrieving data from another application's API and using it in the context of their own. Third-party APIs allow developers to access their data and functionality by making requests with specific parameters to a URL. Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.

Use the [OpenWeather API](https://openweathermap.org/api) to retrieve weather data for cities. The documentation includes a section called "How to start" that will provide basic setup and usage instructions. Use `localStorage` to store any persistent data.

## User Story

```
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly
```

## Acceptance Criteria

```
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city
WHEN I open the weather dashboard
THEN I am presented with the last searched city forecast
```

The following image demonstrates the application functionality:

![weather dashboard demo](./Assets/06-server-side-apis-homework-demo.png)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

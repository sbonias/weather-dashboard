### Server-Side APIs: Weather Dashboard

## Description

Developed a weather dashboard that retrieves data from the [OpenWeather API](https://openweathermap.org/api) and allows for user specified city searches that returns the weather for the current day in addition to a 5 day forecast. The city search is logged and retained so the user is able to view the cities they have searched. The application also displays icons representing the weather for enhanced visual presentation.

## Deployed Application

- https://sbonias.github.io/weather-dashboard/

- https://github.com/sbonias/weather-dashboard

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

## Visual Presentation

<iframe src="https://drive.google.com/file/d/1BJFHHJzWvm74pxc5NIK_KibPn9-BBX4m/preview" width="640" height="480"></iframe>

## Pseudocode

```
//----------------------General HTML Layout--------------------------------
// General HTML Layout
//      -NavBar (title)
//          -Top of browser
//          -"Weather Dashboard"
//          -Dark Gray background
//          -White font-color
//      -Card that includes (search & city listing)
//          -"Search for City:"
//          -Search input box w/ magnifying glass icon
//          -Below the search input box is a list of cities in cells format
//              -this is where the cities will be saved and displayed per the users search history
//      -Card that includes (current city data)
//          -City Name + (date) + icon of current weather (h1?)
//          -Temperature: 90.9 F (in farenheit) (h2?)
//          -Humidity: 41% (h2?)
//          -Wind Speed: 4.7 MPH (h2?)
//          -UV Index: 9.49 (h2? + value is in colored box depending on high (red) vs low value (green))
//          -Light gray border around this section of the card
//      -Card that includes (5-day forecast)
//          -located directly below above section
//          -"5-Day Forecast:" is the title
//          -has cards/boxes for each day
//              -cards have blue background
//              -contain the following data points:
//                  -date (h1) (8/16/2019)
//                  -icon of expected weather condition
//                  -temperature: (h2) "Temp: 86.84 F"
//                  -humidity: (h2) "33%"
//------------------------JavaScript Code-----------------------------------
// Functions that I will need
//      -Function to handle AJAX API request and return
//          -to retrieve weather data for Current Day Forecast as well as Future Forecast (5 days)
//      -Function to capture City Search
//          -Search functionality for city search
//          -Event Listener to capture city name that was input
//          -Save to Local Storage for city search history
//          -jQuery to dynamically output city name
//      -Function to output Current City Data
//          -jQuery to dynamically output data points using the called data
//      -Function to output 5-Day Forecast
//          -jQuery to dynamically output data point using the call data
//      -Function to convert degrees from C to F
//      -Function to apply colored background to UV Index depending on high vs low
//      -Bonus: Add your current city's data on page load
//------------------------System Requirements--------------------------------
// What I need for this to work:
//      -HTML file to contain all of the general layout identified under "General HTML Layout"
//          -link to Bootstrap - Header
//          -link to CSS file - Header under Bootstrap link
//          -link to Font Awesome - Header under Bootstrap
//          -link to Javascript file - Body
//          -link to moment.js library - Body
//      -Javascript file to contain all of my code and logic and functionality of the app
//          -use of Local Storage to retain city search history
//          -use of jQuery to fill-in/apply the HTML elements
//          -use of server side API code to link to https://openweather.org/api

```

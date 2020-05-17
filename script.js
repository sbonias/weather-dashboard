//moment.js current day variable declaration
var NowMoment = moment();

//-----Event Listener to capture city name that was input------
$("#city-input").on("click", function () {
  var cityInput = $("#city-name").val();
  console.log(cityInput);
  //-----AJAX API Call Function--------------------------------
  //  API call via documents: api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
  //  Build the URL we need to query
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityInput +
    "&appid=" +
    APIKey;
  console.log(queryURL);
  //  Make the AJAX request
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //  console log the response object targeted data
    console.log(response);
    console.log(response.name);
    console.log(response.main.temp);
    console.log(response.weather[0].icon);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
    //  Used .html and not .append because each button click wouldn't replace existing info, it would add on to it
    //  Apply the data to the current day card
    $(".city").html(response.name);
    //  Insert Current Day using moment.js
    $(".date").html(NowMoment.format("MM/DD/YYYY"));
    //  Convert temp from kelvin to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;
    $(".current-temp").html("Temperature: " + tempF.toFixed(1) + " °F");
    //  Do this to display icon
    //  https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
    $(".weather-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
    );
    $(".current-humid").html("Humidity: " + response.main.humidity + "%");
    $(".current-wind").html("Wind Speed: " + response.wind.speed + "MPH");
  });
});

// -----City Search Save to Local Storage Function------------

// -----Append City Searched to City History Listing Function-

// -----Output Current City Data Function---------------------

// -----Output 5 Day Forecast Data Function-------------------

// -----Output Current City Data on Page Load-----------------

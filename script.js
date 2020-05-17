//-----Event Listener to capture city name that was input------
$("#city-input").on("click", function (event) {
  event.preventDefault();
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
    console.log(response);
    console.log(response.name);
    console.log(response.weather[0].icon);
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
  });
});
// -----City Search Save to Local Storage Function------------

// -----Append City Searched to City History Listing Function-

// -----Output Current City Data Function---------------------

// -----Output 5 Day Forecast Data Function-------------------

// -----Output Current City Data on Page Load-----------------

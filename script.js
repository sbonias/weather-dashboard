//moment.js current day variable declaration
var NowMoment = moment();
//-----Event Listener to capture city name that was input------
$("#city-input").on("click", function () {
  var cityInput = $("#city-name").val();
  console.log(cityInput);
  //  AJAX API Call Function
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
    localStorage.setItem("longitude", JSON.stringify(response.coord.lon));
    localStorage.setItem("latitude", JSON.stringify(response.coord.lat));

    //  Used .html and not .append because each button click wouldn't replace existing info, it would add on to it
    //  Apply the data to the current day card
    //-----Output Current Forecast Function---------------------
    $(".city").html(response.name);
    //  Insert Current Day using moment.js
    $(".date").html(NowMoment.format("MM/DD/YYYY"));
    //  Convert temp from kelvin to fahrenheit
    var tempF = (response.main.temp - 273.15) * 1.8 + 32;
    $(".current-temp").html("Temperature: " + tempF.toFixed(0) + " °F");
    //  Do this to display icon
    //  https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
    $(".weather-icon").attr(
      "src",
      "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
    );
    $(".current-humid").html("Humidity: " + response.main.humidity + " %");
    $(".current-wind").html("Wind Speed: " + response.wind.speed + " MPH");
    forecast();
    createCityListing();
    uvIndex();
  });
  // -----Output 5 Day Forecast Function-------------------
  function forecast() {
    //  AJAX API Call Function
    //  API call via documents: api.openweathermap.org/data/2.5/forecast?q={city name}&appid={your api key}
    //  Build the URL we need to query
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/forecast?q=" +
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
      //  Declare 5 day forecast as variables using moment.js
      var day1 = moment().add(1, "days");
      var day2 = moment().add(2, "days");
      var day3 = moment().add(3, "days");
      var day4 = moment().add(4, "days");
      var day5 = moment().add(5, "days");
      //  Apply dates to 5-Day Forecast cards
      $(".date1").html(day1.format("MM/DD/YYYY"));
      $(".date2").html(day2.format("MM/DD/YYYY"));
      $(".date3").html(day3.format("MM/DD/YYYY"));
      $(".date4").html(day4.format("MM/DD/YYYY"));
      $(".date5").html(day5.format("MM/DD/YYYY"));
      //  Apply images to 5-Day Forecast cards
      $(".weather-img1").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          response.list[1].weather[0].icon +
          ".png"
      );
      $(".weather-img2").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          response.list[2].weather[0].icon +
          ".png"
      );
      $(".weather-img3").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          response.list[3].weather[0].icon +
          ".png"
      );
      $(".weather-img4").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          response.list[4].weather[0].icon +
          ".png"
      );
      $(".weather-img5").attr(
        "src",
        "https://openweathermap.org/img/w/" +
          response.list[5].weather[0].icon +
          ".png"
      );
      //  Apply temps to 5-Day Forecast cards
      var tempF1 = (response.list[1].main.temp - 273.15) * 1.8 + 32;
      $(".temp1").html("Temp: " + tempF1.toFixed(0) + " °F");
      var tempF2 = (response.list[2].main.temp - 273.15) * 1.8 + 32;
      $(".temp2").html("Temp: " + tempF2.toFixed(0) + " °F");
      var tempF3 = (response.list[3].main.temp - 273.15) * 1.8 + 32;
      $(".temp3").html("Temp: " + tempF3.toFixed(0) + " °F");
      var tempF4 = (response.list[4].main.temp - 273.15) * 1.8 + 32;
      $(".temp4").html("Temp: " + tempF4.toFixed(0) + " °F");
      var tempF5 = (response.list[5].main.temp - 273.15) * 1.8 + 32;
      $(".temp5").html("Temp: " + tempF5.toFixed(0) + " °F");
      //  Apply humidity to 5-Day Forecast cards
      $(".humid1").html("Humidity: " + response.list[1].main.humidity + " %");
      $(".humid2").html("Humidity: " + response.list[2].main.humidity + " %");
      $(".humid3").html("Humidity: " + response.list[3].main.humidity + " %");
      $(".humid4").html("Humidity: " + response.list[4].main.humidity + " %");
      $(".humid5").html("Humidity: " + response.list[5].main.humidity + " %");
    });
  }

  // -----Create City Search History Function-----------------
  function createCityListing() {
    var cityListing = $("<li>").addClass("list-group-item").text(cityInput);
    $(".list-group").append(cityListing);
    console.log(cityListing);
  }

  // -----UV Index Return and Condition Application Function ---
  function uvIndex() {
    //  AJAX API Call Function
    //  API call via documents: http://api.openweathermap.org/data/2.5/uvi?appid={appid}&lat={lat}&lon={lon}
    //  Build the URL we need to query
    var longitude = JSON.parse(localStorage.getItem("longitude"));
    console.log(longitude);
    var latitude = JSON.parse(localStorage.getItem("latitude"));
    console.log(latitude);
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var queryURL =
      "https://api.openweathermap.org/data/2.5/uvi?appid=" +
      APIKey +
      "&lat=" +
      latitude +
      "&lon=" +
      longitude;
    console.log(queryURL);
    //  Make the AJAX request
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      //  console log the response object targeted data
      console.log(response);
      console.log(response.value);
      var uvIndex = response.value;
      console.log(uvIndex);
      if (uvIndex >= 11) {
        $(".current-uv").html("UV Index: " + uvIndex);
        $(".current-uv").css("background-color", "purple");
      } else if (uvIndex >= 8) {
        $(".current-uv").html("UV Index: " + uvIndex);
        $(".current-uv").css("background-color", "red");
      } else if (uvIndex >= 6) {
        $(".current-uv").html("UV Index: " + uvIndex);
        $(".current-uv").css("background-color", "orange");
      } else if (uvIndex >= 3) {
        $(".current-uv").html("UV Index: " + uvIndex);
        $(".current-uv").css("background-color", "yellow");
      } else if (uvIndex >= 0) {
        $(".current-uv").html("UV Index: " + uvIndex);
        $(".current-uv").css("background-color", "green");
      }
    });
  }
});

// -----City Search Save to Local Storage Function------------

// -----Output Current City Data on Page Load-----------------

$(document).ready(function () {
  
  var api = "https://fcc-weather-api.glitch.me/api/current?";
  var tempSwap = true;
  var celsius;
  var tempString = "The temperature is: ";
  
  //Get Longitude and Latitude using HTML5
 
  navigator.geolocation.getCurrentPosition(success, failure);
  
  function success(position) {
    var lat = "lat=" + position.coords.latitude;
    var long = "lon=" + position.coords.longitude;
    codeLatLng (lat, long);
  }
  
  function failure () {
    $("#textOutput").html("<p>This browser does not support Geolocation.</p>")
  }
  
  // Get data from API
  function codeLatLng (lat, long) {
    var urlString = api + lat + "&" + long;
    $.ajax  ({
      url: urlString, success: function (result) {
        celsius = result.main.temp;
      $("#location").html('You are in: ' + result.name + ", " + result.sys.country);
      $("#weather").html('The weather there is: ' + result.weather[0].main + '<img src='+ result.weather[0].icon + '/>');
      $("#temp").html(tempString + celsius + ' °C');
        
    }
    });
    
   //Convert Celsius to Fahrenheit
  $("#temp").click(function () {
    if (tempSwap === true) {
      $("#temp").html(tempString + celsius + ' °C');
      tempSwap = false;
    } else {
      $("#temp").html(tempString + (celsius * 9/5 + 32) + ' °F');
      tempSwap = true;
    }
      
  });
    
  }
  
  
});
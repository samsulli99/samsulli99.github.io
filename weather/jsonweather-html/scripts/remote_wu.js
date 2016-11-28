// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
    $.ajax({
      url : "https://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/" + lat + ',' + long + ".json",
      dataType : "jsonp",
      success : function(data) {
        console.log(data);
        var roundtemp = Math.round($('#currentTemp'), $('#current_conditions'));// I love you Sammy!

        $("#cityDisplay").text((data['location']['city']) + "," + (data['location']['state']));
        $("#titlehead").prepend((data['location']['city']) + ", " + (data['location']['state']));
        $("#sunny2").html(Math.round(data['current_observation']['temp_f']));
        $("#sunny2").append('\xB0' + "F");
        $("#summary").text("Summary: " + (data['current_observation']['icon']));
        $('#summary').css('textTransform', 'capitalize')
        $("#add1").text(data['current_observation']['wind_mph']);
        $("#add1").append(" " + 'mph');
        $("#add2").text(data['current_observation']['relative_humidity']);
        $("#add2").prepend('Humidity:' + " ");
        $("#add3").text(data['current_observation']['feelslike_string']);
        $("#add3").prepend("Feels Like" + " ");
        $(".city-state").html(data['location']['city'] + ", " + (data['location']['state']));
        $("#city").html("City: " + (data['location']['city']));
        $("#state").html("State: " + (data['location']['state']));
        $("#current").html("Current Temperature: " + (data['current_observation']['temp_f']) + '\xB0' + "F");
        $("#precip").html("Humidity: " + (data['current_observation']['relative_humidity']));
        $("#mph").html("Wind: " + (data['current_observation']['wind_mph']) + " mph");
        $("#direction").html("Direction: " + (data['current_observation']['wind_dir']));
        $("#long").html("Longitude: " + (data['location']['lon']));
        $("#lat").html("Latitude: " + (data['location']['lat']));
        $("#zip").html("Zip: " + (data['location']['zip']));

      }
    });
    $("#cover").fadeOut(250);
  }
});

// A function for changing a string to TitleCase
/*
function toTitleCase(str){
  return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}
});
*/


//key for Weather Underground: 58826cceab552ee6


// $.get("http://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/" + lat + "," lon ".json" }, "jsonp");



//      <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
//      <script>
//      jQuery(document).ready(function($) {
//      $.ajax({
//      url : "http://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/IA/Cedar_Rapids.json",
//      dataType : "jsonp",
//      success : function(parsed_json) {
//      var location = parsed_json['location']['city'];
//      var temp_f = parsed_json['current_observation']['temp_f'];
//      alert("Current temperature in " + location + " is: " + temp_f);
//    }
//           });
//  });
////  </script>
//      Latitude and Longtitude thing
//      http://api.wunderground.com/api/58826cceab552ee6/geolookup/q/37.776289,-122.395234.json

//      Get JSONP

//

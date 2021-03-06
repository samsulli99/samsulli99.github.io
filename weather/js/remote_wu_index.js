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
      url : "http://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/" + lat + ',' + long + ".json",
      dataType : "jsonp",
      success : function(data) {
        $("#cityDisplay").text
        ((data['location']['city']) + "," + (data['location']['state']));
        $("#currentTemp").text(data['current_observation']['temperature_string']); $("#summary").text(data['current_observation']['icon']);
        $("#add1").text(data['current_observation']['wind_mph']);
        $("#add2").text(data['current_observation']['relative_humidity']);
        $("#add3").text(data['current_observation']['feelslike_string']);
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
//      ?callback=getData

//$.get("http://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/" + lat + "," lon ".json",
// $.get("http://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/q/" + lat + "," lon ".json";
//

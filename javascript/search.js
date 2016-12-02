//  Key for Weather Underground: 58826cceab552ee6

$('#query').keyup(function () {

  var value = $('#query').val();
  var rExp = new RegExp(value, "i");

  $.getJSON("https://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
    console.log(data);
    // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function (key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="#" onclick="getData('+ val.lat + ',' + val.lon +')" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
    output += '</ol>';
    $("#searchResults").html(output); // send results to the page
  }); // end getJSON
}); // end keyup

// Get weather data from wunderground.com
function getData(lat, lon) {
  // Get the data from the wunderground API
  $.ajax({
    url: "https://api.wunderground.com/api/58826cceab552ee6/geolookup/conditions/forecast/q/" + lat + ',' + lon + ".json",
    dataType: "jsonp",
    success: function (data) {

      console.log(data);
      var location = data['location']['city'] + ', ' + data['location']['state'];
      var temp_f = data['current_observation']['temp_f'];
      var high = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
      var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
      console.log('Location is: ' + location);
      console.log('Temp is: ' + temp_f);
      $("#cityDisplay").text(location);
      $("title").html(location + " | Weather Center");
      $("#currentTemp").html("Current Temperature: " + Math.round(temp_f) + '°');
      $("#currentHigh").html("Current High: " + high + '°');
      $("#currentLow").html("Current Low: " + low + '°');
      $("#summary").text("Weather Summary: " + data['current_observation']['icon']);
      $("#summary").css('textTransform', 'capitalize');
      }
    })
         $("#searchResults").html("");
  };


    // A function for changing a string to TitleCase
    /*
function toTitleCase(str){
  return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
*/

//    //3431 E 100 N, Rigby, ID 83442



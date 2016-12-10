function getData(season) {
  $.ajax({
    url: "/project/js/toronto-weather.json",
    success: function (data) {
      console.log(data);
      $("#introText").html(data[season]['intro']);
      $("#shoeText").html(data[season]['shoes']['shoe']);
      $("#skirtText").html(data[season]['skirt']);
      $("#shirtText").html(data[season]['shirt']);
      $("#coatText").html(data[season]['coat']);
      $("#accessText").html(data[season]['accessories']);
    }
  })
};


//  var location = data['location']['city'] + ', ' + data['location']['state'];
//  var temp_f = data['current_observation']['temp_f'];
//  var high = data['forecast']['simpleforecast']['forecastday']['0']['high']['fahrenheit'];
//  var low = data['forecast']['simpleforecast']['forecastday']['0']['low']['fahrenheit'];
//  console.log('Location is: ' + location);
//  console.log('Temp is: ' + temp_f);
//  $("#cityDisplay").text(location);
//  $("title").html(location + " | Weather Center");
//  $("#currentTemp").html("Current Temperature: " + Math.round(temp_f) + '°');
//  $("#currentHigh").html("Current High: " + high + '°');
//  $("#currentLow").html("Current Low: " + low + '°');
//  $("#summary").text("Weather Summary: " + data['current_observation']['icon']);
//  $("#summary").css('textTransform', 'capitalize');
//}

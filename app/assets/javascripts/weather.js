navigator.geolocation.getCurrentPosition(function(position) {
 lat = (position.coords.latitude);
 long = (position.coords.longitude);

  $.ajax({
    method: "GET",
    url: "/getweather.json",
    data: { lat: lat, long: long},
    success: function(forecast) {
    console.log(forecast)
      var list = $("p.temp").empty();
      list.text(forecast.currently.temperature)

    }
  });
});
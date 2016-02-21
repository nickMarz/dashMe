navigator.geolocation.getCurrentPosition(function(position) {
 lat = (position.coords.latitude);
 long = (position.coords.longitude);

function getWeather() {
  $.ajax({
    method: "GET",
    url: "/getweather.json",
    data: { lat: lat, long: long},
    success: function(forecast) {
    console.log(forecast);
    console.log(forecast.currently.icon);
    var current_temp = forecast.currently.temperature;

      var cTemp = $("p.temp").empty();
          cTemp.text(current_temp).append("˚F");
      var cSum = $("p.sum").empty();

      cSum.text(forecast.currently.summary);
      var weatherIcon = forecast.currently.icon;

      var ctx = document.getElementById('icon1');
        $(ctx).addClass(weatherIcon)
      var icons = new Skycons(),
          list  = ["icon1"]
      icons.color = "white";
      icons.interval = 1000;
      icons.set(list[0], weatherIcon);
      icons.play();

      }
    });
  }
  getWeather();
  setInterval (getWeather, 50000);
});
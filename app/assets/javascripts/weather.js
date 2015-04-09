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
      var cTemp = $("p.temp").empty();
      cTemp.text(forecast.currently.temperature).append("˚F"); 
      var cSum = $("p.sum").empty();
      cSum.text(forecast.currently.summary);
      var cImage = $("svg.image").empty();
      cImage.text(forecast.currently.icon);
    }
    });
  }
  getWeather();
  setInterval (getWeather, 50000);
});
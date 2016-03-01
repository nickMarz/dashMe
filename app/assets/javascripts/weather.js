navigator.geolocation.getCurrentPosition(function(position) {
 lat = (position.coords.latitude);
 long = (position.coords.longitude);

function getWeather() {
  $.ajax({
    method: "GET",
    url: "/getweather.json",
    data: { lat: lat, long: long},
    success: function(forecast) {
    devTestForcast = forecast;
    // console.log(forecast.currently.icon);
    var current_temp = forecast.currently.temperature;

    var dailyForecast = forecast.daily.data;
    $('.forecast').empty();

    $(dailyForecast).each(function(i) {
      var tempForecast = dailyForecast[i];
      var tempHtml = ''

          tempHtml += '<span class="temp_marker low">Low</span> ' + ' <span class="temp low_temp">' + dailyForecast[i].temperatureMin + '˚</span>' +
                      '<span class="temp_marker hi">Hi</span> '   + ' <span class="temp hi_temp">' + dailyForecast[i].temperatureMax + '˚</span>' +
                      ' <span class="summary">'+ dailyForecast[i].summary + '<span>';

      $('.forecast').append('<li class="daily_weather_li>' + tempHtml + '</li>');
    })

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
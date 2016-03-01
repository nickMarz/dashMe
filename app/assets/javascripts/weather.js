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
      var tempHtml = '<table class="daily_weather_table" style="width:100%">'

          tempHtml += '<tr>   <th class="low_temp">Low˚</th>  <th class="hi_temp">Hi˚</th><th class="summary">Summary</th></tr>'
          tempHtml += '<tr>   <td class="low_temp">' + dailyForecast[i].temperatureMin +
                      '</td>  <td class="hi_temp">' + dailyForecast[i].temperatureMax +
                      '</td>  <td class="summary">' + dailyForecast[i].summary + '</td></tr>'



          // tempHtml += '<li class="daily_weather_item low_temp"><span>Low˚</span> '+ dailyForecast[i].temperatureMin + '</li>';
          // tempHtml += '<li class="daily_weather_item hi_temp"><span>Hi˚</span> '+ dailyForecast[i].temperatureMax + '</li>';

          // tempHtml += '<li class="daily_weather_item summary">'+ dailyForecast[i].summary + '</li>';
          tempHtml += '</table>';
      $('.forecast').append('<li>' + tempHtml + '</li>');
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
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
          tempHtml += '<p class="temp_block"><span class="temp_marker low">Low</span> ' + ' <span class="temp low_temp">' + dailyForecast[i].temperatureMin + '</span></p>' +
                      '<p class="temp_block"><span class="temp_marker hi">Hi</span> '   + ' <span class="temp hi_temp">' + dailyForecast[i].temperatureMax + '</span></p>' +
                      '<p class="temp_summary_block"><span class="summary">'+ dailyForecast[i].summary + '<span></p>';
      $('.forecast').append('<li class="daily_weather_li">' + tempHtml + '</li>');
    })

      var cTemp = $("p.temp").empty();
          cTemp.text(current_temp)
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

        $(".temp").addClass("temp_f");

        // reapply click handlers to the newly created extended forecast div's
        $(".temp").not('p').click(function() {
          console.log('Temp Clicked')
          uiTempClassChange();
        });

        if (localStorage.tempPreference === "c") {
          uiTempClassChange();
         console.log("Change temps to user preference")
        }

      } // success end
    }); // Ajax end
  } // End getWeather

      $("p.temp").click(function() {
          console.log('Temp Clicked')
          uiTempClassChange();
        });


  function changeTemp(temp, start) {
    if (start === "F" || start === "f") {
      var calTemp = (temp - 32) * 5 / 9;
      return  calTemp.toFixed(2);
    }
    if (start === "C" || start === "c") {
      var calTemp = temp * 9 /5 + 32;
     return  calTemp.toFixed(2);
    }
  }

  function uiTempClassChange() {
    var allTemps = $(".temp");
    if ($(allTemps).hasClass('temp_f')) {
      $(allTemps).each(function(i) {
        var temp2Change = $(allTemps).eq(i).text()
        var newTemp = changeTemp(temp2Change, "f");
        $(allTemps).eq(i).text(newTemp)
      })
      $(allTemps).addClass('temp_c').removeClass('temp_f');
      localStorage.tempPreference = "c";
      return;
    }
    if ($(allTemps).hasClass('temp_c')) {
      $(allTemps).each(function(i) {
        var temp2Change = $(allTemps).eq(i).text()
        var newTemp = changeTemp(temp2Change, "c");
        $(allTemps).eq(i).text(newTemp)
      })
      $(allTemps).addClass('temp_f').removeClass('temp_c');
      localStorage.tempPreference = "f";
      return;
    }
  }

  getWeather();
  setInterval (getWeather, 50000);
});
navigator.geolocation.getCurrentPosition(function(position) {
 lat = (position.coords.latitude);
 long = (position.coords.longitude);
});

$.ajax({
  method: "POST",
  url: "weather/getweather.json",
  data: { lat: (position.coords.latitude), long: (position.coords.longitude)}
});

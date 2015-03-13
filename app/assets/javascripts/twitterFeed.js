$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {
      var list = $("timeline").empty();
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].text);
      }
    });
  }
  $(getTweets);
  $(getTweets);
});
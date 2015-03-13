$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show.json",function(data){
      var list = $("timelist").empty();
      data.forEach(function (tweet) {
      var item = $("<li>").text(tweet.text);
      list.append(item);
      });
    });  
  }
  $(getTweets);
  var moarTweets = setInterval($(getTweets), 10000); 
}); 

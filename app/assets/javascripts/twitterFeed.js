$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {
      var list = $("p.tweets").empty();
      for (var i = 20; i < 21; i++) { 
        list.html("<img src='"+data[i].user.profile_image_url+"'>"+data[i].text+"by: "+data[i].user.name+"</p>");
      }
    });
  } 
  getTweets();
  setInterval (getTweets, 120000); 
});


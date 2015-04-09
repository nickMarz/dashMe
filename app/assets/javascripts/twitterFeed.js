$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {
      var list = $("p.tweets").empty();
      // for (var i = 0; i < data.length; i++) {
      for (var i = 0; i < 5; i++) {
        list.append("<div class='twitt'><img src='"+data[i].user.profile_image_url+"' class='twitPic'>");
        list.append(data[i].text+" BY: "+data[i].user.name+"</div><br>");
      // $('p.tweets').linkify(); somthing is up with the linkify javascript?
      }
    });
  } 
  getTweets();
  setInterval (getTweets, 180000); 
});

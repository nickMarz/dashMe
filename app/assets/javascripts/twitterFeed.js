$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {
      var list = $("p.tweets").empty();
      for (var i = 0; i < Things.length; i++) {
        list.html("<img src='"+data[i].user.profile_image_url+"'>");
        list.append(data[i].text+"by: "+data[i].user.name);
      // $('p.tweets').linkify(); somthing is up with the linkify javascript?
      }
    });
  } 
  getTweets();
  setInterval (getTweets, 120000); 
});

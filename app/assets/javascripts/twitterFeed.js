$(document).ready(function() {
  function getTweets() {
    //TODO: add connection if check to handle errors
    $.getJSON("/tweets/show",function (data) {
      var list = $(".tweets").empty();
      for (var i = 0; i < 10; i++) {
        var profilePic = data[i].user.profile_image_url;
        var userName = data[i].user.name;
        var userTweet = data[i].text;
        list.append('<div class="twitt"><img src="'+ profilePic +'" class="twitPic"><p>' userTweet +' BY: '+ userName +'</p></div>');
      // $('p.tweets').linkify(); somthing is up with the linkify javascript?
      console.log(data);
      }
      $('.tweets').linkify();
    });

  }
  getTweets();
  setInterval (getTweets, 180000);
  setInterval ($('.tweets').linkify(), 180000);
});

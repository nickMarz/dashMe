$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {

    })
    .done(function(data) {
    console.log( "Done/Success" );
    var list = $(".tweets").empty();

      var allTweets = "";
      for (var i = 0; i < 15; i++) {
        var profilePic    = data[i].user.profile_image_url;
            profilePic    = profilePic.replace('http', 'https');
        var userName      = data[i].user.name;
        var userTweet     = data[i].text;
        var finishedTweet = '<div class="twitt"><img src="' + profilePic + '" class="twitPic"><p>' + userTweet +'<br> BY: <a href="https://twitter.com/'+'userName" target="_blank">' + ('@' + userName) + '</a></p> <p class="tweetAt">tweet@ '+userName+'</p> </div>';
            allTweets    += finishedTweet;
        $(".tweets").eq(0).append(finishedTweet);
        }
        devTestData = data[i];
        // console.log("allTweets " + allTweets);

        // $(".tweets").eq(0).html(allTweets);
        // list.innerHTML = allTweets;
      $('.tweets').linkify();
    })
    .fail(function() {
      // $('body').append('<div class="timeline" id="timeline"> <h2 class="twiTitle">@Twitter</h2> <div class="tweets"></div></div>');
      var load_error = '<div class="load_error">Connection Error</div>';

      $(".tweets").eq(0).append(load_error);
      console.log( "Error/Fail" );
    });

  }
  getTweets();
  setInterval (getTweets, 180000);
});

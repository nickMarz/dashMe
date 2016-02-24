$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {

    })
    .done(function() {
    console.log( "Done/Success" );
    var list = $(".tweets").empty();

      var allTweets = "";
      for (var i = 0; i < 15; i++) {
        var profilePic = data[i].user.profile_image_url;
        var userName = data[i].user.name;
        var userTweet = data[i].text;
        var finishedTweet = '<div class="twitt"><img src="' + profilePic + '" class="twitPic"><p>' + userTweet +'<br> BY: ' + userName + '</p></div>';
        allTweets += finishedTweet;
        $(".tweets").eq(0).append(finishedTweet);
        }
        console.log("allTweets " + allTweets);

        // $(".tweets").eq(0).html(allTweets);
        // list.innerHTML = allTweets;
      $('.tweets').linkify();
    })
    .fail(function() {
      $('body').append('<div class="timeline" id="timeline"> <h2 class="twiTitle">@Twitter</h2> <div class="tweets"></div></div>');
      var load_error = '<div class="load_error">Load Error</div>';

      $(".tweets").eq(0).append(load_error);
    console.log( "Error/Fail" );
    });

  }
  getTweets();
  setInterval (getTweets, 180000);
});

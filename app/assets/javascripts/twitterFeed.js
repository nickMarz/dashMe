$(document).ready(function() {
  function getTweets() {
    //TODO: add connection if check to handle errors
    $.getJSON("/tweets/show",function (data) {

    })
    .done(function() {
    console.log( "second success" );
    var list = $(".tweets").empty();

      var allTweets = "";
      for (var i = 0; i < 15; i++) {
        var profilePic = data[i].user.profile_image_url;
        var userName = data[i].user.name;
        var userTweet = data[i].text;
        var finishedTweet = '<div class="twitt"><img src="' + profilePic + '" class="twitPic"><p>' + userTweet +'<br> BY: ' + userName + '</p></div>';
        // list.append(finishedTweet);

        // $(".tweets").innerHTML = finishedTweet;
        // $('p.tweets').linkify(); somthing is up with the linkify javascript?
        allTweets += finishedTweet;
        console.log(profilePic);
        console.log(userName);
        console.log(userTweet);
        $(".tweets").eq(0).append(finishedTweet);
        }
        console.log("allTweets " + allTweets);

        // $(".tweets").eq(0).html(allTweets);
        // list.innerHTML = allTweets;
      $('.tweets').linkify();
    })
    .fail(function() {
    console.log( "error" )
    });

  }
  getTweets();
  setInterval (getTweets, 180000);
  // setInterval ($('.tweets').linkify(), 180000);
});

$(document).ready(function() {
  function getTweets() {
    $.getJSON("/tweets/show",function (data) {

    })
    .done(function(data) {
    console.log( "Done/Success" );
    var list = $(".tweets").empty();
    var allTweets = "";


    // need to update to another number beside 15, also need to
    // figure out a storage option for older tweets and how to
      for (var i = 0; i < 15; i++) {
        var profilePic    = data[i].user.profile_image_url;
            profilePic    = profilePic.replace('http', 'https');
        var userName      = data[i].user.name;
        var screenName    = data[i].user.screen_name;
        var userTweet     = data[i].text;
        var finishedTweet = '<div class="twitt light_text_color"><img src="' + profilePic + '" class="twitPic"><p>' + userTweet +'</p> <p class="tweet_author">BY: <a href="https://twitter.com/'+userName+'" target="_blank">' + '@' + userName + '</a></p> <p class="tweetAt">tweet @'+screenName+'</p> </div>';
            allTweets    += finishedTweet;
        $(".tweets").eq(0).append(finishedTweet);
        }
        devTestData = data[i];

      $('.tweets').linkify();

      //adds the ability to click on the screen name and
      // fill in the new tweet input with their @screen_name
      $('.tweetAt').click(function(){
        $('#message').val('')
        var reply = $(this).text().replace('tweet @', '@') + " ";
        $('#message').val( reply )
      });

      // Limits the users tweet char count to the needed <140 and updates the character counter
      // need to switch to to keyup maybe? Also delete does not update the count
      $('#message').keypress(function(e) {
          var charCount = $('#message');
          $('.inputCounter').html(140 - charCount.val().length);
          if (charCount.val().length > 140 ) {
            var newStr = charCount.val().substring(0, charCount.val().length-1);
            $(charCount).val(newStr);
          }
      });

      $('input+.fa-twitter ').click(function() {
          $('input .fa-twitter').click();
      })

    })
    .fail(function() {
      var load_error = '<div class="load_error">Connection Error</div>';
      $(".tweets").eq(0).append(load_error);
      console.log( "Error/Fail" );
    });

  }
  getTweets();
  setInterval (getTweets, 180000);

});
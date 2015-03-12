$(document).ready(function() {
  function getTweets() {
        $.getJSON("/tweets/show.json",function(data){
            console.log(data);
            var list = $("ul").empty();
            data.forEach(function (tweet) {
            var item = $("<li>").text(tweet);
            list.append(tweet);
            });
   });
    }
$(getTweets);
}); 
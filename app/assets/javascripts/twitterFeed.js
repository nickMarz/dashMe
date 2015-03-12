// function getTweets() {
//         $.getJSON("https://api.twitter.com/1.1/statuses/home_timeline.json",function(data){
//             console.log(data);
//             var twitterFeed = [];
//             for (var i = 0; i < data.length; i++) {
//                twitterFeed.push('<p><img src="' + data.results[i].profile_image_url + '" width="40" height="40" />' + data.results[i].text + '</p>');
//             }
//           var pagefeed = $(".timeline").empty();
//           pagefeed.text(twitterFeed);
//         });
//     }
// var timer = setInterval(getTweets, 60000);
// getTweets();

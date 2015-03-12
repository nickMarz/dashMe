$(document).ready(function() {
function getTweets() {
        $.getJSON("/tweets/show",function(data){
            console.log(data);
        });
    }
$(getTweets);
}); 
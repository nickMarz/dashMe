  function showpics(){
	$("#box").val("sunset");
    var pic= $("#box").val();
    var getR = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+pic+'&tagmode=any&format=json&jsoncallback=?';
    console.log(getR);
    $.getJSON(getR, function(data){
      }).done(function() {
      $("#images").hide().html(data).fadeIn('fast');
            var newURL = data.items[10].media.m;
                newURL = newURL.replace("_m", "_h");
            $('body').css('background-image', 'URL(' +newURL+ ')')
            var testing = data;
          // $.each(data.items, function(i,item) {
          //   $("<img/>").attr("src", item.media.m).appendTo("#images");
          // });
      }).fail(function(error) {
        console.log(error);
        console.log('^^^^^^ error');
  })
};
showpics()
setInterval (showpics, 18000000000);
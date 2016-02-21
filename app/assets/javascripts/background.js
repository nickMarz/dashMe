
  function showpics(){
	$("#box").val("popular")
    var pic= $("#box").val();

    $.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags='
      +pic+"&tagmode=any&format=json&jsoncallback=?",
      function(data){ $("#images").hide().html(data).fadeIn('fast');

      $('body').css('background-image', 'URL(' +data.items[10].media.m + ')')
    // $.each(data.items, function(i,item) {
    //   $("<img/>").attr("src", item.media.m).appendTo("#images");
    // });
  })
};
showpics()
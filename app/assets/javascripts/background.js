
  function showpics(){
	$("#box").val("sunset");
    var pic= $("#box").val();

    $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags='
      +pic+"&tagmode=any&format=json&jsoncallback=?",
      function(data){ $("#images").hide().html(data).fadeIn('fast');

      $('body').css('background-image', 'URL(' +data.items[10].media.m + ')')
      console.log(data)
      testing = data;
    // $.each(data.items, function(i,item) {
    //   $("<img/>").attr("src", item.media.m).appendTo("#images");
    // });
  })
};
showpics()
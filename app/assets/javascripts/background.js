  function showpics(){
    var picked = 0;
    var date = new Date();
    var hour = date.getHours();
    var searchItem = ['moonlight', 'sunrise', 'beach', 'sunset', 'night' ];

    function checkTime(timeCheck) {
      if (timeCheck < 4) {
        // night/moon
        picked = 0;
      }
      if (timeCheck > 5 && timeCheck <= 12) {
        // sunrise
        picked = 1;
      }

      if (timeCheck > 12 && timeCheck <= 18) {
        // beach
        picked = 2;
      }
      if (timeCheck > 18 && timeCheck <= 21) {
        // sunset
        picked = 3;
      }

      if (timeCheck > 21 ) {
        // moon
        picked = 4;
      }

      $('#box').val( searchItem[picked] );
    }


    checkTime(hour);
    var pic= $('#box').val();
    var getR = 'https://api.flickr.com/services/feeds/photos_public.gne?tags='+pic+'&tagmode=any&format=json&jsoncallback=?';
    console.log(getR);

    $.getJSON(getR, function(data){
      }).done(function(data) {
      $('#images').hide().html(data).fadeIn('fast');
            var newURL = data.items[10].media.m;
                newURL = newURL.replace('_m', '_h');
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
function showpics(){
  var picked = 0;
  var date = new Date();
  var hour = date.getHours();
  var searchItem = ['moonlight', 'sunrise', 'beach', 'sunset', 'moon' ];

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
    };


  checkTime(hour);

  var pic = $('#box').val();
  // var getR = ;

  $.getJSON('https://api.flickr.com/services/feeds/photos_public.gne?tags='+pic+'&tagmode=any&format=json&jsoncallback=?', function(data){
  }).done(function(data) {
    // console.log(data);

    
    $('#images').hide().html(data).fadeIn('fast');
    var mathR = Math.round (Math.random() * (20 - 0) + 0);
    var imgObj = data.items[mathR];
    
    var newURL = imgObj.media.m;
    newURL = newURL.replace('_m', '_h');
    $('.background-overlay').css('background', 'url(' +newURL+ ')');
    $('.background-overlay').addClass('fadein');
    var testing = data;
      // $.each(data.items, function(i,item) {
      //   $("<img/>").attr("src", item.media.m).appendTo("#images");
      // });
      }).fail(function(error) {
      console.log(error);
      console.log('^^^^^^ error');
      $('.background-overlay').addClass('fadein');      
    });
  };// showpics();

  showpics();
  setInterval (showpics, 18000000000);
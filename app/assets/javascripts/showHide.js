$(document).ready(function(){

  function Visibility_tracking(id, name ) {
    this.id     = id;
    this.name     = name;
    this.hidden  = "false";
  // }
  // Visibility_tracking
    this.save = function () {
      var storageName = this.name+"Data";
      var storageId = this.id;
      var storageHidden = this.hidden;
      var obj = JSON.stringify(this);
      console.log(storageName+" / "+storageId.selector+" / "+storageHidden);
      localStorage.setItem( storageName, obj );
      localStorage.getItem( storageName );
    };

    this.display = function () {
      if (this.hidden === 'true') {
        console.log('Hidden TRUE!');
      }

      if (this.hidden === 'false') {
        console.log('Not hidden false!');

      }
    };
  };

   clock = new Visibility_tracking( $("#clock"), 'clock' );
   todoList = new Visibility_tracking( $("#todo_list"), 'todoList' );
   forecast = new Visibility_tracking( $(".forecast_daily"), 'forecast' );

  clock.save();
  todoList.save();
  forecast.save();

// var degArrow = [0,180,360];
// var counter = 0;

// function AnimateRotate(d, target){
//   console.log('ani ro')
//     $({deg: degArrow}).animate({deg: d}, {
//         step: function(now, fx){
//             $(target).css({
//                  transform: 'rotate(' + now + 'deg)'
//             });
//         }

//     });


//       if (degArrow[counter] > 0) {
//         if (degArrow[counter] === 2) {counter = 0};
//         if (degArrow[counter] === 1) {counter = 2};

//       };


//                 degArrow[counter];
//             console.log(degArrow);
//             console.log(counter);

// }





// console.log(clock);
// console.log(todoList);
// About dev's show hide function
  $(".slidingDiv").hide();
	$(".show_hide").show();
  $('.forecast_daily').hide();

	$('.show_hide').click(function(e){
    e.preventDefault();
      console.log('.show_hide click')
	   $(".slidingDiv").slideToggle();
  });

    $('#hide_forecast').click(function(e){
      $(".forecast_daily").slideToggle();
      // AnimateRotate(degArrow,'.fa-arrow-circle-down');
  });

// Options Panel
  $(".optionsDiv").hide();
  // $(".show_hide_opt").show();
// Options Panel

  $('.show_hide_opt').click(function(e){
    e.preventDefault();
    console.log('show/hide Options')

  $(".optionsDiv").slideToggle();

  });

// Hide todo
  // $("#clock").show();
  // $("#show_hide_todo_container").show();

  $('#show_hide_todo_container').click(function(e){
    e.preventDefault();
    $("#todo_list").slideToggle();

      var t = "todoListData";
      if (localStorage.getItem(t) === "true") {
        console.log('!list data');
          todoList.hidden = 'false';

          localStorage.setItem(t, 'false');
          $('#show_hide_todo_container').text('Hide Todo\'s');

    } else
      if (localStorage.getItem(t) === 'false'){
        console.log('list data');
        todoList.hidden = 'true';
        localStorage.setItem(t, 'true');
        $('#show_hide_todo_container').text('Show Todo\'s');
      }
    });

  $('#show_hide_clock').click(function(e){
      e.preventDefault();
      $('#clock').slideToggle();


      var t = 'clockData';
      if (localStorage.getItem(t) === 'true') {
        console.log('!clock data');
          clock.hidden = 'false';
          localStorage.setItem(t, 'false');
      $('#show_hide_clock').text('Hide Clock');

    } else
      if (localStorage.getItem(t) === 'false'){
        console.log('clock data');
          clock.hidden = 'true';
          localStorage.setItem(t, 'true');
      $('#show_hide_clock').text('Show Clock');
    }
  });

  // load settings from localStorage //
  function loadHideSettings() {
    if (localStorage.clockData === 'true') { $('#clock').hide(); console.log('hidden true');}
    if (localStorage.clockData === 'false') { $('#clock').show();  console.log('show');}

    if (localStorage.todoListData === 'true') { $('#todo_list').hide(); console.log('hidden true');}
    if (localStorage.todoListData === 'false') { $('#todo_list').show();  console.log('show');}
    console.log("set state");

  }



// run functions onload //
loadHideSettings();
});

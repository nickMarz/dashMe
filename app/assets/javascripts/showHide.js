$(document).ready(function(){

// About dev's show hide function
  $(".slidingDiv").hide();
	$(".show_hide").show();

	$('.show_hide').click(function(e){
	$(".slidingDiv").slideToggle();
	e.preventDefault();
  });

// Options Panel
  $(".optionsDiv").hide();
  $(".show_hide_opt").show();

  $('.show_hide_opt').click(function(e){
  $(".optionsDiv").slideToggle();
  e.preventDefault();
  });

// Hide todo
  $("#clock").show();
  $("#show_hide_todo_container").show();

  $('#show_hide_todo_container').click(function(e){
    e.preventDefault();
    $("#todo_containerID").slideToggle();

  });

// Hide Clock
  $("#clock").show();
  $("#show_hide_clock").show();

  $('#show_hide_clock').click(function(e){
    e.preventDefault();
    $("#clock").slideToggle();

  });

$('.show_hide_clock').click(function(){
   if (localStorage.clockshowHide === "0") {
    localStorage.clockshowHide = 1;
    $("#clock").css('display', 'none');
    var shod = $("#clock").css('display', 'none');
    console.log(shod);
    // e.preventDefault();
   } else  if (localStorage.clockshowHide === "1"){
    localStorage.clockshowHide = 0;
    $("#clock").css('display', 'block');
    var shod2 = $("#clock").css('display', 'block');
      console.log(shod2);
      // e.preventDefault();
  }
});
  // load settings from localStorage //
  function loadHideSettings() {
    clockVisible = $( "#clock" ).css('display', localStorage.clockVisible);
    $( "#clock" ).css('display', localStorage.clockVisible);
    console.log(clockVisible);
    console.log("set state");

  }


// run functions onload //
  $(loadHideSettings);
$( '#datepicker' ).datepicker();
});

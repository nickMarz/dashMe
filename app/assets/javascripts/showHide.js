$(document).ready(function(){

  function Visibility_tracking(name) {
    this.name     = name;
    this.hidden  = false;
  }
var clock = new Visibility_tracking( $("#clock") );
var todoList = new Visibility_tracking( $("#todo_containerID") );

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

    if (localStorage.clockshowHide === false) {
    localStorage.clockshowHide = true;
   } else  if (localStorage.clockshowHide === true){
    localStorage.clockshowHide = false;
  }
});
  // load settings from localStorage //
  function loadHideSettings() {
    if (localStorage.clockshowHide === false) { $("#clock").show();}
    if (localStorage.clockshowHide === true) { $("#clock").hide();}

    // clockVisible = $( "#clock" ).css('display', localStorage.clockVisible);
    // $( "#clock" ).css('display', localStorage.clockVisible);
    // console.log(clockVisible);
    console.log("set state");

  }


// run functions onload //
  $(loadHideSettings);
$( '#datepicker' ).datepicker();
});

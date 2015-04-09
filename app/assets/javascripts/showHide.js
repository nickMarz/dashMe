$(document).ready(function(){

// About dev's show hide function
$(".slidingDiv").hide();
	$(".show_hide").show();
	
	$('.show_hide').click(function(){
	$(".slidingDiv").slideToggle();
	});

// Options Panel
$(".optionsDiv").hide();
  $(".show_hide_opt").show();
  
  $('.show_hide_opt').click(function(){
  $(".optionsDiv").slideToggle();
  });

// Hide Clock
$("#clock").hide();
  $(".show_hide_clock").show();
  
  $('.show_hide_clock').click(function(){
  $("#clock").slideToggle();
  });


});

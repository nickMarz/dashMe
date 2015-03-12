$(document).ready(function() {
  
  function draggableApply() {
    $('#clock-container').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 20, 20 ]});
    $('#signFrom').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag" , containment: 'parent', grid: [ 20, 20 ]});
    $('#todo-container').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 20, 20 ]});
    $('.tweetSignIn').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: '#body', grid: [ 20, 20 ]});
    $('.tweetBox').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 20, 20 ]});
    $('.timeline').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag", containment: 'parent', grid: [ 20, 20 ]});
  }
  
  // to do list functionality
  function flexibleList() {
    // $( "#todo-container" ).resizable();
  }

  $( "#clock-container" ).on( "click", function() {
  // grab values onClick //
    var clockPosTop = $("#clock-container").css("top");
    var clockPosLeft = $("#clock-container").css("left");
  // store settings in localStorage //
    localStorage.clockTop = clockPosTop;
    localStorage.clockLeft = clockPosLeft; 
  });
 
  $( ".tweetBox" ).on( "click", function() {
  // grab values onClick //
    var tweetBoxPosTop = $(".tweetBox").css("top");
    var tweetBoxPosLeft = $(".tweetBox").css("left");
  // store settings in localStorage //
    localStorage.tweetBoxTop = tweetBoxPosTop;
    localStorage.tweetBoxLeft = tweetBoxPosLeft; 
  });

  $( "#todo-container" ).on( "click", function() {
  // grab values onClick //
    var todoPosTop = $("#todo-container").css("top");
    var todoPosLeft = $("#todo-container").css("left");
    // var todoPosBottom = $("#todo-container").css("left");
    // var todoPosRight = $("#todo-container").css("left");
  // store settings in localStorage //
    localStorage.todoTop = todoPosTop;
    localStorage.todoLeft = todoPosLeft;
  });

  $( ".timeline" ).on( "click", function() {
  // grab values onClick //
    var timelinePosTop = $(".timeline").css("top");
    var timelinePosLeft = $(".timeline").css("left");
  // store settings in localStorage //
    localStorage.timelineTop = timelinePosTop;
    localStorage.timelineLeft = timelinePosLeft; 
  });

  // load settings from localStorage //
  function loadSettings() {
    $( "#clock-container" ).css("top", localStorage.clockTop);
    $( "#clock-container" ).css("left", localStorage.clockLeft);
    $( "#todo-container" ).css("top", localStorage.todoTop);
    $( "#todo-container" ).css("left", localStorage.todoLeft);
    $( ".tweetBox" ).css("top", localStorage.tweetBoxTop);
    $( ".tweetBox" ).css("left", localStorage.tweetBoxLeft);
    $( ".timeline" ).css("top", localStorage.timelineTop);
    $( ".timeline" ).css("left", localStorage.timelineLeft);
  }


// run functions onload //
  $(draggableApply);
  $(loadSettings);
  $(flexibleList);

});


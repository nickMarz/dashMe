$(document).ready(function() {
  
  function draggableApply() {
    $('#clock-container').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag"});
    $('#signFrom').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag" } );
    $('#todo-container').draggable({ scroll: false, cursor: 'move', snap: true, stack: ".drag"});
  }
  
  // to do list functionality
  function flexibleList() {
    $( "#todo-container" ).resizable();
  }

  $( "#clock-container" ).on( "click", function() {
  // grab values onClick //
    var clockPosTop = $("#clock-container").css("top");
    var clockPosLeft = $("#clock-container").css("left");
  // store settings in localStorage //
    localStorage.clockTop = clockPosTop;
    localStorage.clockLeft = clockPosLeft; 
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

  // load settings from localStorage //
  function loadSettings() {
    $( "#clock-container" ).css("top", localStorage.clockTop);
    $( "#clock-container" ).css("left", localStorage.clockLeft);
    $( "#todo-container" ).css("top", localStorage.todoTop);
    $( "#todo-container" ).css("left", localStorage.todoLeft);
  }


// run functions onload //
  $(draggableApply);
  $(loadSettings);
  $(flexibleList);

});


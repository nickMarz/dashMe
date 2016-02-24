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
      // console.log(obj);
      // console.log();

      localStorage.setItem( storageName, storageHidden );
    };

    this.display = function () {
      if (this.hidden) {
        console.log('TRUE!');
      }

      if (!this.hidden) {
        console.log('false!');

      }
    };
  };

   clock = new Visibility_tracking( $("#clock"), 'clock' );
   todoList = new Visibility_tracking( $("#todo_containerID"), 'todoList' );

  clock.save();
  todoList.save();

// console.log(clock);
// console.log(todoList);
// About dev's show hide function
  $(".slidingDiv").hide();
	$(".show_hide").show();

	$('.show_hide').click(function(e){
	$(".slidingDiv").slideToggle();
	e.preventDefault();
  });

// Options Panel
  $(".optionsDiv").hide();
  // $(".show_hide_opt").show();
// Options Panel

  $('.show_hide_opt').click(function(e){
  $(".optionsDiv").slideToggle();
  e.preventDefault();
  });

// Hide todo
  // $("#clock").show();
  // $("#show_hide_todo_container").show();

  $('#show_hide_todo_container').click(function(e){
    e.preventDefault();
    $("#todo_containerID").slideToggle();

      var t = "todoListData";
      if (localStorage.getItem(t) === "true") {
        console.log('!list data');
          todoList.hidden = "false";

          localStorage.setItem(t, "false");
          $('#show_hide_todo_container').text("Show Todo's");

    } else
      if (localStorage.getItem(t) === "false"){
        console.log('list data');
        todoList.hidden = "true";
        localStorage.setItem(t, "true");
        $('#show_hide_todo_container').text("Hide Todo's");
      }
    });

  $('#show_hide_clock').click(function(e){
      e.preventDefault();
      $("#clock").slideToggle();


      var t = "clockData";
      if (localStorage.getItem(t) === "true") {
        console.log('!clock data');
          clock.hidden = "false";
          localStorage.setItem(t, "false");
      $('#show_hide_clock').text("Show Clock");

    } else
      if (localStorage.getItem(t) === "false"){
        console.log('clock data');
          clock.hidden = "true";
          localStorage.setItem(t, "true");
      $('#show_hide_clock').text("Hide Clock");
    }
  });

  // load settings from localStorage //
  function loadHideSettings() {
    if (localStorage.clockData === "true") { $("#clock").hide(); console.log("hidden true");}
    if (localStorage.clockData === "false") { $("#clock").show();  console.log("show");}

    if (localStorage.todoListData === "true") { $("#todo_containerID").hide(); console.log("hidden true");}
    if (localStorage.todoListData === "false") { $("#todo_containerID").show();  console.log("show");}
    console.log("set state");

  }



// run functions onload //
loadHideSettings();
$( '#datepicker' ).datepicker();
localStorage.todoListData = "tutiuui"
});

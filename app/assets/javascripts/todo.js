$(document).ready(function() {
// // $('.todoForm').submit(function (e) {
// //     e.preventDefault();
// //     if ($('.todosubmit').val() !== '') {
// //         var todosubmit_value = $('.todosubmit').val();
// //         $('ul').append('<li class="todoitem">' + todosubmit_value + '<a href="#" class="deleteX" id="deleteX">x</a> </li>');
// //     }
// //     $('.todosubmit').val('');
// //     return false;
// // });


// // $('#deleteX').on('click', '.deleteX',function (e) {
// //     e.preventDefault();
// //     $(this).parent().remove();
// //     console.log('removed item');
// //     console.log(this);

// // });

// function todoDelay () {
  function appendTaskToList(val) {
    $('#list').append("<li.todoitem>" + val + "  <a href='#' class='done-btn'>Done</a> <a href='#' class='cancel-btn'>Cancel Task</a></li>");
  }
  var task;

  if (localStorage.tasks) {
    tasks = JSON.parse(localStorage.tasks);
  }else {
    tasks = [];
  }

  for(var i=0;i<tasks.length;i++) {
    appendTaskToList(tasks[i]);
  }

  var addTask = function(){
    // get value from #name input
    var val = $('#name').val();
    
    // add the task to the array
    tasks.push(val);
    
    // save to local storage
    localStorage.tasks = JSON.stringify(tasks);
    
    // append the name to the list
    appendTaskToList(val);
    
    // reset the input field and focus it.
    $('#name').val("").focus();
  };

  $('#add-btn').click(addTask);
  $('#name').keyup(function(e){
    if (e.keyCode === 13) {
      addTask();
    }
  });


// approach 1
/*$('.done-btn').click(function(){
    $(this).parent('li').addClass('done');
  });*/

// correct approach
    $('.done-btn').on( 'click', function() {
      $(this).parent('li.todoitem').addClass('done');
    });    

    $('.cancel-btn').on( 'click', function() {
      $(this).parent('li.todoitem').fadeOut();
    });    


  // }
// todoDelay();
// setInterval(todoDelay(), 1000);
// setInterval(console.log("todoDelay"), 1000);

});

// // Need to add localStorage and fix page reload on the deleteX
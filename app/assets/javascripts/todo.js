// $(document).ready(function() {

 var storageEnv = 'dashMe_todos_dev';

  var listItemHelper = '<li class="todo-item" data-due="%dueDate%" data-done="%done%">%data% <span class="todo-item-controls"> <input type=checkbox class="done-btn"></input>  <a href="#" class="del-btn">Delete</a><span></li>';
  var todoList = ('#todo-list');
  // var todo_item = new Create_todo_item();
  // console.log( todo_item );
  // $('#todoEnter').val("SET VALUE");


  function Create_todo_item(todo) {
    this.todo     = todo;
    this.completed  = false;
    this.createdAt  = Date();
    this.dueDate  = $( '#datepicker' ).datepicker( 'getDate' );
  }

  function logItems(arg) {
    if (arg === null) { return false };
  for (var i = 0; i < arg.length; i++) {
    console.log(arg[i].todo);
    console.log(arg[i].dueDate);
    console.log(arg[i].completed);
    console.log(arg[i].createdAt);
    }
  }

  function refreshClicks() {

    $('.done-btn').click(function() {
      // e.preventDefault();
      // console.log($(this).parent());
      // console.log( 'Done Button Clicked ' );
      var itemIndex = $(this).parent().parent().index();
      // console.log( itemIndex);
      $(this).parent().parent().toggleClass( 'done-item' );

        var state = 'false';
      if ( $(this).parent().parent().attr('data-done') === 'false') {
        $(this).parent().parent().attr('data-done', 'true');
        state = 'true';
        // console.log( state );
        updateItem( itemIndex, state);
      } else if ( $(this).parent().parent().attr('data-done') === 'true') {
        $(this).parent().parent().attr('data-done', 'false');
        state = 'false';
        // console.log( state );
        updateItem( itemIndex, state);
      }

      // console.log( 'Done State ' + state );


    });

    $('.del-btn').click(function(e) {
      e.preventDefault();
      // console.log( 'Delete Button Clicked ' );
      var itemIndex = $(this).parent().parent().index();
      deleteItem( itemIndex );
      $(this).parent().parent().fadeOut( "slow", function() {
          $(this).remove();
          });
    });


  }
   function uiUpdates() {
    var upDateItems = $('.todo-item');

    for (var i = upDateItems.length - 1; i >= 0; i--) {
      // upDateItems[i]

      if ( $(upDateItems).eq(i).attr('data-done') === 'true' ) {
        // console.log( 'Item Done:' +  $(upDateItems).eq(i).find('input').attr('checked') );
        $(upDateItems).eq(i).find('input').attr('checked','checked');
        $(upDateItems).eq(i).addClass('done-item');
      }
    }
  }

  function addItem(arg) {
    // console.log(" addItem function");
    var newItem = listItemHelper.replace('%data%', arg.todo)
      .replace('%dueDate%', arg.dueDate)
      .replace('%done%', arg.completed);
    $(todoList).prepend(newItem);
    // logItems(arg);
  }

  function deleteItem(arg) {
    // console.log(" Delete function");
    var getItems = JSON.parse(localStorage.getItem(storageEnv) );
    getItems.splice(arg, 1);
    localStorage.setItem(storageEnv, JSON.stringify(getItems) );

  }
  function updateItem(arg, state) {
    var getItems = JSON.parse(localStorage.getItem(storageEnv) );
    // console.log ('Update Item: ' + state);
    getItems[arg].completed = state;
    // console.log (getItems[arg].completed);
    localStorage.setItem(storageEnv, JSON.stringify(getItems) );
    // console.log (getItems);
    // return getItems;
  }

  $('#add-btn').click(function(e) {
    e.preventDefault();
    var newTodoVal = $('#todoEnter').val();
    if (newTodoVal === '') { return false; }
    var todo_item = new Create_todo_item(newTodoVal);

    $(todoList).children().remove();
    addItem(todo_item);
    saveItems(todo_item);
    $('#todoEnter').val("");
    refreshClicks();
    uiUpdates();
  });

  function loadItems() {
    var getItems = JSON.parse(localStorage.getItem(storageEnv) );
    // for (var i = 0; i < getItems.length; i++) {
    //  addItem(getItems[i]);
    // }
    if (getItems !== null) {
      for (var i = getItems.length - 1; i >= 0; i--) {
      addItem(getItems[i]);
      }
      if (getItems === null) {
        getItems = []
      }
    }
    refreshClicks();
    uiUpdates();
    return getItems;
  }

  function saveItems(itemArg) {
    var localData = loadItems();
    if (localData === null) { localData = []; }

    localData.push( itemArg );
    localStorage.setItem(storageEnv, JSON.stringify(localData) );
  }

  function pageLoad() {
    var pageLoadData = loadItems();
    $( '#datepicker' ).datepicker({
      defaultDate: +7,
      nextText: 'Later'
    });
    // logItems(pageLoadData);
    // console.log(  "pageLoadData" );
  };
pageLoad();
// });
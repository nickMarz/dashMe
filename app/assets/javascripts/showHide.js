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


// Twitter Panel Reveal //
    $('.right-panel-reveal').click(function() {
        $('.right-panel').toggleClass('active');
    });
// Twitter Panel Reveal //

// About dev's Reveal //
    $('.about_us_reveal').click(function(e){
        e.preventDefault();
        console.log('.show_hide click')
        $(".about_us").toggleClass('active');
    });
// About dev's Reveal //


// Weather Panel //

// Weather Panel
    $('#hide_forecast').click(function(e){
        console.log('FOrcast')
        $(".forecast_daily").toggleClass('active');
    // AnimateRotate(degArrow,'.fa-arrow-circle-down');
    });
// Weather Panel //


// Options Panel
    $('.options_menu').click(function(e){
        e.preventDefault();
        $(".options_menu_container").toggleClass('active');
        $(".about_us").removeClass('active'); // closes about us if it's open //
        $(this).toggleClass('active');
    });
// Options Panel


// Hide todo

$('#show_hide_todo_container').click(function(e){
    // e.preventDefault();
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
    $('.analog-digital').toggleClass('digital');
    
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

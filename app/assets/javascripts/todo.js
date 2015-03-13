$(document).ready(function() {
$('.todoForm').submit(function (e) {
    e.preventDefault();
    if ($('.todosubmit').val() !== '') {
        var todosubmit_value = $('.todosubmit').val();
        $('ul').append('<li class="todoItem">' + todosubmit_value + '<a href="#" class="deleteX" id="deleteX">x</a> </li>');
    }
    $('.todosubmit').val('');
    return false;
});


$('#deleteX').on('click', '.deleteX',function (e) {
    e.preventDefault();
    $(this).parent().remove();
    console.log('removed item');
    console.log(this);

});

});

// Need to add localStorage and fix page reload on the deleteX
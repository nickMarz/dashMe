$(document).ready(function() {
$('.todoFrom').submit(function (e) {
    e.preventDefault();
    if ($('.todosubmit').val() !== '') {
        var todosubmit_value = $('.todosubmit').val();
        $('ul').append('<li class="todoItem">' + todosubmit_value + '<a href=" " class="deleteX" id="deleteX">x</a></li>');
    };
    $('.todosubmit').val('');
    return false
});
// Need to look it to where the href needs to point to, and how ot prevent page reload

$('deleteX').on('click', function (e) {
    e.preventDefault();
    $(this).parent().remove();
    console.log('removed item')
})

});

// Need to add localStorage and fix page reload on the deleteX
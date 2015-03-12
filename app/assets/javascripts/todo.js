$(document).ready(function() {
$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li class="todoItem">' + input_value + '<a href=" " class="deleteX" id="deleteX">x</a></li>');
    };
    $('input').val('');
    return false;
});
// Need to look it to where the href needs to point to, and how ot prevent page reload

$('deleteX').on('click', function (e) {
    e.preventDefault();
    $(this).parent().remove();
    console.log('removed item')
})

});

// Need to add localStorage and fix page reload on the deleteX
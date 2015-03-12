$(document).ready(function() {
$('form').submit(function () {
    if ($('input').val() !== '') {
        var input_value = $('input').val();
        $('ul').append('<li>' + input_value + '<a href="" class="deleteX" id="deleteX">x</a></li>');
    };
    $('input').val('');
    return false;
});

$(document).on('click', 'deleteX', function (e) {
    e.preventDefault();
    $(this).parent().remove();
})

});


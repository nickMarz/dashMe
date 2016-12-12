$(document).ready(function() {

  $('#colorSelector_textcolor').colorpicker({
    format: 'rgb', // force this format
    horizontal: true
  }).on('changeColor', function(ev) {
    var color = ev.color.toRGB();
    var allColor = 'rgb('+ color.r + ',' + color.g + ',' + color.b + ')';
    $('.light_text_color').css('color', allColor );
  });

  $('#colorSelector_backcolor').colorpicker({
    format: 'rgba', // force this format
    horizontal: true
  }).on('changeColor', function(ev) {
    var color = ev.color.toRGB();
    var allColor = 'rgba('+ color.r + ',' + color.g + ',' + color.b + ',' + color.a +')';
    $('.primary_back_color').css('backgroundColor', allColor )
  });

});
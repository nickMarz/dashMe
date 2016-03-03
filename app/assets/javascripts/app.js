$(document).ready(function() {

//   $('#colorSelector_backcolor').ColorPicker({
// 	color: '#0000ff',
// 	onShow: function (colpkr) {
// 		$(colpkr).fadeIn(500);
// 		return false;
// 	},
// 	onHide: function (colpkr) {
// 		$(colpkr).fadeOut(500);
// 		return false;
// 	},
// 	onChange: function (hsb, hex, rgb) {
// 		$('#colorSelector_backcolor div').css('backgroundColor', '#' + hex);
// 		$('.primary_back_color').css('backgroundColor', '#' + hex);
// 	}
// });

//   $('#colorSelector_textcolor').ColorPicker({
// 	color: '#ffffff',
// 	onShow: function (colpkr) {
// 		$(colpkr).fadeIn(500);
// 		return false;
// 	},
// 	onHide: function (colpkr) {
// 		$(colpkr).fadeOut(500);
// 		return false;
// 	},
// 	onChange: function (hsb, hex, rgb) {
// 		$('#colorSelector_textcolor div').css('backgroundColor', '#' + hex);
// 		$('.light_text_color').css('color', '#' + hex);
// 	}
// });
$('#colorSelector_backcolor').colorpicker({
      format: 'rgb', // force this format
      horizontal: true
    }).on('changeColor', function(ev) {
    	var color = ev.color.toRGB();
    	var allColor = 'rgb('+ color.r + ',' + color.g + ',' + color.b + ')';
    	$('.light_text_color').css('color', allColor )


    });
$('#colorSelector_textcolor').colorpicker({
      format: 'rgba', // force this format
      horizontal: true
    }).on('changeColor', function(ev) {
    	var color = ev.color.toRGB();
    	var allColor = 'rgba('+ color.r + ',' + color.g + ',' + color.b + ',' + color.a +')';
    	$('.primary_back_color').css('backgroundColor', allColor )



    });


// $( '#datepicker' ).datepicker();

});
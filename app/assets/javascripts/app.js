$(document).ready(function() {



  $('#colorSelector_backcolor').ColorPicker({
	color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector_backcolor div').css('backgroundColor', '#' + hex);
		$('.primary_back_color').css('backgroundColor', '#' + hex);
	}
});

  $('#colorSelector_textcolor').ColorPicker({
	color: '#ffffff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
		$('#colorSelector_textcolor div').css('backgroundColor', '#' + hex);
		$('.light_text_color').css('color', '#' + hex);
	}
});


$( '#datepicker' ).datepicker();

});
(function(window, $) {

	function resizeSpacers() {
		var $spacers = $('.table .spacer'),
			spacerWidth = (window.outerWidth - 1450) / 2;

		if(window.outerWidth <= 1366) {
			spacerWidth = 0;
			$spacers.hide();
		} else {
			$spacers.show();
			$spacers.width(spacerWidth);
		}
	}

	resizeSpacers();

	$(window).on('resize', resizeSpacers);
	
})(window, jQuery);
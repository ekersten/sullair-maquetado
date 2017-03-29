(function(window, $) {
	var $navContainer = $('.nav-container'),
		$navLinks = $navContainer.find('.navigation a');


	$navLinks.on('click', function(e) {
		var $el = $(e.currentTarget);

		$('.sub-nav').not('#' + $el.data('subnav-toggle')).fadeOut(200);

		if($el.data('subnav-toggle')) {
			e.preventDefault();
			
			$('#' + $el.data('subnav-toggle')).fadeToggle(200);
		}
	});
})(window, jQuery);
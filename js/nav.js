(function(window, $) {
	var $navContainer = $('.nav-container'),
		$navLinks = $navContainer.find('.navigation a');


	$navLinks.on('click', function(e) {
		var $el = $(e.currentTarget);

		$('.sub-nav').hide();

		if($el.data('subnav-toggle')) {
			e.preventDefault();
			
			$('#' + $el.data('subnav-toggle')).show();
		}
	});
})(window, jQuery);
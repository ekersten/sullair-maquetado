(function(window, $) {

	var $navContainer = $('header nav'),
		$navLinks = $navContainer.find('a'),
		$overlay = $('.overlay'),
		$subnavs = $('.subnav'),
		$searchIcon = $('.search > i');

	hideSubNavs();

	$overlay.fadeOut(0);


	$navLinks.on('click', function(e) {
		var $el = $(e.currentTarget);

		if($el.data('subnav-toggle')) {
			e.preventDefault();

			$el.toggleClass('active');

			if($el.hasClass('active')) {
				$overlay.fadeIn();
				$('#sub-' + $el.data('subnav-toggle')).css('top', '83px');
			} else {
				$overlay.fadeOut();
				$('#sub-' + $el.data('subnav-toggle')).css('top', $('#sub-' + $el.data('subnav-toggle')).height() * -1);
			}
		}
	});


	$overlay.on('click', function(e) {
		$overlay.fadeOut();
		hideSubNavs();
		$navLinks.removeClass('active');
	});

	function hideSubNavs() {
		$subnavs.each(function(index, item) {
			$sub = $(item);
			$sub.css('top', $sub.height() * -1);
		});
	}

})(window, jQuery);
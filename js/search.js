(function(window, $) {

	var $searchContainer = $('.search'),
		$searchForm = $searchContainer.find('form'),
		$searchBox = $searchForm.find('input[type="text"]'),
		$icons = $searchContainer.find('i'),
		$pills = $searchContainer.find('.pill'),
		$navElements = $('nav li a');



	$searchContainer.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(e) {
		if($searchContainer.hasClass('open')) {
			$searchBox.focus();
		}
	});

	$icons.on('click', function(e) {
		$searchContainer.toggleClass('open');
		$pills.removeClass('selected');

		if($searchContainer.hasClass('open')) {
			// si abro search con el menu de equipos desplegado
			// activar el filtro para equipos
			if($($navElements.filter('.active')[0]).data('subnav-toggle') == 'equipos') {
				$pills.first().addClass('selected');
			} else {
				$pills.last().addClass('selected');		
			}
		} else {
			// resetear el formulario cuando se cierra
			$searchForm[0].reset();
		}
	});

	

	$pills.on('click', function(e) {
		$pills.removeClass('selected');
		$(this).addClass('selected');
	});

})(window, jQuery);
(function(window, $) {
	'use strict';
	$('#toolbar').lobiPanel({
                resize: 'none',
                reload: false,
                close: false,
                editTitle: false,
            });

	var $toolbar = $('#toolbar'),
		$containers = $('#toolbar #containers button'),
		$components = $('#toolbar #components button');

	console.log($toolbar, $containers, $components);

})(window, jQuery);
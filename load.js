function load() {
	setTimeout(function() {
		$('span.loading').fadeOut('medium').fadeIn('medium');
		load();
	}, 0);
}
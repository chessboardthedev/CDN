function load() {
      setTimeout(function() {
        $('span.loading').fadeOut('medium').fadeIn('medium');
        load();
      }, 0);
}

$(document).ready(function() {
      setTimeout(function() {
        challenge();
      }, 5000);
    });
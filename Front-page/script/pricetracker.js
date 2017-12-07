// sticky-header
$(window).scroll(function(){
    if ($(window).scrollTop() >= 80) {
       $('.header-fixed').addClass('is-sticky');
       // $('.sticky-area').addClass('container');
    }
    else {
       $('.header-fixed').removeClass('is-sticky');
       // $('.sticky-area').removeClass('container');
    }
});

// navbar-toggle-button

$('.navbar-toggler').click(function(event) {
	/* Act on the event */
  $(this).toggleClass('icon-android-close');
	$('.navbar-end').toggleClass('open');
});
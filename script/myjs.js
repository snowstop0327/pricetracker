$(function(){
	$('.show-more-shop').mouseover(function(event) {
	  $(this).css('z-index', '5');
	});
	$('.show-more-shop').mouseleave(function(event) {
	  $(this).css('z-index', '2');
	});
})
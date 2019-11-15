jQuery(document).ready(function($) {
	$(".top-burger").click(function(event) {
		$(".menu-mobile").toggleClass('active');
		$(".top-burger").toggleClass('active');
		$("body").toggleClass('lock');
	});
});
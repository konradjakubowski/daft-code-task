$(function() {
	var i = 1;
	$('#svg-logo').on("click", function() {
		$(this).css('transform', 'rotate('+ (i * 360) + 'deg)');
		i++;
	});
});

$(function() {
	$('.burger-nav').on("click", function() {
		$('.top-wrapper').toggleClass("open");
	});
});
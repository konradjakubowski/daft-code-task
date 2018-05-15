$(function() {
	var i = 1;
	$('#svg-logo').on("click", function() {
		$(this).css('transform', 'rotate('+ (i * 360) + 'deg)');
		i++;
	});

	$('#js-burger-nav').on("click", function() {
		$('.top-wrapper, .js-dropdown').toggleClass("open");
	});

	$('#js-close-nav').on("click", function() {
		$('.top-wrapper, .js-dropdown').toggleClass("open");
	});
	/*
	$("#js-close-nav").click(function () {
    	$(".burger-wrapper").hide();
	});*/

});

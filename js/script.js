$(function() {
	var i = 1;
	$('#svg-logo').on("click", function() {
		$(this).css('transform', 'rotate('+ (i * 360) + 'deg)');
		i++;
	});

	$('#js-burger-nav, #js-close-nav').on("click", function() {
		$('.top-wrapper, .js-dropdown').toggleClass("open");
	});

	$('#js-burger-nav').on("click", function() {
		$('.mobile-socials').css({"display":"inline-block", "margin":"26px 0 0 0", "padding-left":"21px"});
	});
	
	$('.burger-wrapper').click( function() {
       $('.close-wrapper').toggle();
        $('.burger-wrapper').toggle();
        $('.close-wrapper').css({"transform": "translateY(50px)"});
    });

    $('.close-wrapper').click( function() {
       $('.burger-wrapper').toggle();
        $('.close-wrapper').toggle();
        $('.mobile-socials').toggle();
    });
});
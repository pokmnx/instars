$(document).ready(function () {
	new WOW().init();
	$('html').addClass('wow_active');

	const startDate = new Date(2019, 9, 1);
	const date = new Date();
	const diff = (date.getTime() - startDate.getTime())/1000;
	$('.countdown').FlipClock(3600*72 - diff, {
		countdown: true
	});

	$(".js-modal-btn").modalVideo({channel:'vimeo'});

	$("#top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});
$(document).ready(function () {
	new WOW().init();
	$('html').addClass('wow_active');

	const startDate = new Date(2019, 9, 4);
	const date = new Date();
	const diff = (date.getTime() - startDate.getTime())/1000;

	$('.countdown').FlipClock(3600*24*7 - diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});

	$(".js-modal-btn").modalVideo({channel:'vimeo', autoplay: true});

	$("#top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});
});
$(document).ready(function() {
	$('.header__burger').click(function (_event) {
		$('.header__burger,.menu-header').toggleClass('active');
		$('body').toggleClass('lock');
	});
});
$("#linkAbout").click(function(e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $("#about").offset().top},
		'slow');
});

$("#linkFeatures").click(function(e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $("#features").offset().top},
		'slow');
});

$("#linkNews").click(function(e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $("#news").offset().top},
		'slow');
});

$("#linkHome").click(function(e) {
	e.preventDefault();
	$('html,body').animate({
		scrollTop: $("#home").offset().top},
		'slow');
});

$("#item").hover(function() {
	$("#title").addClass(".hidden");
	$("#snippet").removeClass(".hidden");
});

$(".btn-submit").click(function() {
	var $form = $(this).closest('form');
	$form.submit();
});
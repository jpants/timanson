$(function() {

	$('#menuButton').click(function(){
		$('#navWrap').toggle('slide', {direction:'up'}, 'slow');
	});

	$(window).resize(function(){
		if ($(window).width()>890) {
			$('#navWrap').css({display: 'inline-block'});
		}
		else {
			$('#navWrap').css({display: 'none'});
		};
	});

});
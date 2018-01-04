$(function(){
	var obj = $("#sidebar");
	var offset = $(obj).offset();
	var topPadding = 20;
	$(window).scroll(function() {
		if ($(window).scrollTop() > offset.top) {
			$(obj).stop().animate({
				duration: 'fast',
				marginTop: $(window).scrollTop() - offset.top + topPadding
			});
		} else {
			$(obj).stop().animate({
				marginTop: 0
			});
		}
	});
});

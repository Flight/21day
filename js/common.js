$(document).ready(function(){
	$('input, textarea').placeholder();

	$('.b-comments__content').cycle({
		timeout: 2000,
		pager:  '.b-comments-pages__list'
	});
});
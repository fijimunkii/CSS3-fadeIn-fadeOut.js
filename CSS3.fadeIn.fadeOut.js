function fadeOutIn(a,b){
	$(a).css({'-webkit-animation-name':'fadeOut'});
	setTimeout(function(){
		$(a).addClass('not_visible');
	}, 501);
	setTimeout(function(){
		$(b).removeClass('not_visible');
		$(b).css({'-webkit-animation-name':'fadeIn'});
	}, 500);
}

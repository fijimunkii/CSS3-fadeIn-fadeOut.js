function fadeOutIn(a,b){
	var c = document.getElementById(a);
	c.className = c.className + " fadeOut";
	setTimeout(function(){
		c.className = c.className + " not_visible";
	}, 500);
	setTimeout(function(){
		c.className = c.className.replace(/\bfadeOut\b/,'');
		var d = document.getElementById(b);
		d.className = d.className.replace(/\bnot_visible\b/,'');
		d.className = d.className + " fadeIn";
		setTimeout(function(){
			d.className = d.className.replace(/\bfadeIn\b/,'');
		}, 1000);
	}, 500);
}

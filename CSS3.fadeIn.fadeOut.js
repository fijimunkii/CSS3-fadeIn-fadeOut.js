function fadeOutIn(a,b){
	var c = document.getElementById(a);
	c.className += " fadeOut";
	setTimeout(function(){
		c.className += " not_visible";
	}, 500);
	setTimeout(function(){
		c.className = c.className.replace(/\bfadeOut\b/,'');
		var d = document.getElementById(b);
		d.className = d.className.replace(/\bnot_visible\b/,'');
		d.className += " fadeIn";
		setTimeout(function(){
			d.className = d.className.replace(/\bfadeIn\b/,'');
		}, 1000);
	}, 500);
}

function fade(a){
	var b = document.getElementById(a);
	if (!b.classList.contains('not_visible')) {
		b.className += " fadeOut";
		setTimeout(function(){
			b.className += " not_visible";
			b.className = b.className.replace(/\bfadeOut\b/,'');
		}, 500);
	} else {
		b.className = b.className.replace(/\bnot_visible\b/,'');
		b.className += " fadeIn";
		setTimeout(function(){
		b.className = b.className.replace(/\bfadeIn\b/,'');
		}, 1000);	
	}
}

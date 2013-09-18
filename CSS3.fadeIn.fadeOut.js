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

function fade(a){
	var b = document.getElementById(a);
	var test = b.classList.contains('not_visible');
	if (test === false){
		b.className = b.className + " fadeOut";
		setTimeout(function(){
			b.className = b.className + " not_visible";
			b.className = b.className.replace(/\bfadeOut\b/,'');
		}, 500);
	}
	else if (test === true){
		b.className = b.className.replace(/\bnot_visible\b/,'');
		b.className = b.className + " fadeIn";
		setTimeout(function(){
		b.className = b.className.replace(/\bfadeIn\b/,'');
		}, 1000);	
	}
}

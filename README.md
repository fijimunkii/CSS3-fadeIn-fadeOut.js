Do you enjoy using jQuery fadeIn() and fadeOut()? It sure is convenient isn't it?

Too bad it doesn't run all that smoothly on low-CPU webkit devices.



Ever try using CSS3 animations to do the same thing and run into the issue of animations not playing well with the display property? CSS animations will not run on elements hidden with display:none;


Long story short, I wrote a simple script that works around this issue.

usage
=====

**NB: This script only detects element IDs.**


*To fade in or fade out an element (detects visibility and applies the proper transition):*
```javascript
fade('splash');
```

```javascript
fade('main_content');
```

*To fade out an element and queue the fade in:*
```javascript
fadeOutIn('splash','main_content');
```

compatibility
====
CSS3 animations are not supported by legacy browsers. Use a detection system to fall back to other fade scripts if you plan on using this code.

Do you enjoy using jQuery fade()? It sure is convenient isn't it? Too bad it doesn't run all that smoothly on low-CPU webkit devices. To make matters worse, CSS3 animations do not play well with the ```display:none;``` property.

Here is a simple script that works around this issue.

usage
=====

**NB: This script targets element IDs.**


```javascript
// To fade in or fade out an element (detects visibility and applies the proper transition)

fade('splash');

fade('main_content');
```

```javascript
// To fade out an element and queue the fade in

fadeOutIn('splash','main_content');
```

compatibility
====
CSS3 animations are not supported by legacy browsers. Use a detection system to fall back to another solution.

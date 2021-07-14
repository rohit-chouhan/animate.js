<p align="center">
  <img src="https://i.postimg.cc/Qt6Yb4Gm/WgYIPblo.gif"/><br>
Apply amazing animation to your HTML5 elemets easily using JavaScript<br>
  <b>This framework is based on <a href="https://github.com/animate-css/animate.css">animate.css</a></b>
  </p>
  
 ### Installation
 Include the Animate.css CDN inside your head tag.
  ```html
<link ref="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" type="text/css">
```

Then add our <b>animate.js</b> CDN also
  ```html
<script src="https://cdn.jsdelivr.net/gh/rohit-chouhan/animate.js/animate.js"></script>
```

 ### Animation Styles & Types
 Go to <a href="https://animate.style">animate.css</a> official website to find all the animation css class name, then use it with animate.js
 
 ### How to apply
 Here the syntex code to apply animation using animate.js
 ```js
 //Syntex
 animate.apply({
	selector:'<selector>',
	style:'<animate_class>',
	delay:<delay_time_in_sec>,
	speed:'<speed of animation>',
	repeat:<loop time of animation>
});

//Example
animate.apply({
	selector:'#text', 
	style:'animate__backInDown',
	delay:1, // 1, 2, 3, 4 
	speed:'slow', // 'slow', 'slower', 'fast', 'faster'
	repeat:1 // 1, 2, 3, 4, 'infinite'
});
 ```
### Complete Example
```html

```
 

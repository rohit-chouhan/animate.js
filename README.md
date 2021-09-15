<p align="center">
  <img src="https://i.postimg.cc/Qt6Yb4Gm/WgYIPblo.gif"/><br>
animate.js is a tiny JavaScript library that provides a convenient way to apply Animate.css powered CSS animations to DOM elements without writing any CSS.<br>
  <b>This framework is based on <a href="https://github.com/animate-css/animate.css">animate.css</a></b>
  </p>
  
 ### Installation
 Include the Animate.css CDN inside your head tag.
  ```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" type="text/css">
```

Then add our <b>animate.js</b> CDN also, powered by <img width="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/JsDelivr_Logo.svg/1200px-JsDelivr_Logo.svg.png"/>
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
	style:'animate__rubberBand',
	delay:1, // 1, 2, 3, 4 
	speed:'slow', // 'slow', 'slower', 'fast', 'faster'
	repeat:1 // 1, 2, 3, 4, 'infinite'
});
 ```
### Complete Example Code
Try Live Test <a href="https://jsfiddle.net/e9a1rm7x/">https://jsfiddle.net/e9a1rm7x</a>

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Animate.js</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@4.1.1/animate.min.css" type="text/css" />
	<script src="https://cdn.jsdelivr.net/gh/rohit-chouhan/animate.js/animate.js"></script>
    </head>
    <body>
        <center>
            <h1 id="text">Animate Me</h1>
            <br />
            <button onclick="myfun()">Animate the Text</button>
        </center>
    </body>
    <script>
        function myfun() {
            animate.apply({
                selector: "#text",
                style: "animate__rubberBand",
                delay: 1,
                speed: "fast",
                repeat: 1,
            });
        }
    </script>
</html>
```
 
Developed by <a href="https://rohitchouhan.com">Rohit Chouhan</a>

/*
animate.js
developed by: Rohit Chouhan
repository: https://github.com/rohit-chouhan/animate.js
*/
var animate = {
    data: {},
    apply: function(value) {
        animate.data.selector = value.selector;
        animate.data.style = value.style;
        animate.data.delay = value.delay;
        animate.data.speed = value.speed;
        animate.data.repeat = value.repeat;
        if (animate.data.delay != '') {
            var delay = 'animate__delay-' + animate.data.delay + 's';
        }
      
        if (animate.data.speed != '') {
            var speed = 'animate__' + animate.data.speed;
        }

        if (animate.data.repeat != '') {
            if (typeof(animate.data.repeat) == 'number') {
                var repeat = 'animate__repeat-' + animate.data.repeat;
            } else {
                var repeat = 'animate__' + animate.data.repeat;
            }
        }

        x = this.data.selector;
        document.querySelector(x).className = 'animate__animated ' + this.data.style + ' ' + delay + ' ' + speed + ' ' + repeat;
    }
};

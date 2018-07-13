export default {
    bind(element) {
        const chars = element.textContent.split('');
        const length = chars.length;
        const shift = 360 / length;
        let angle = 0;
        let span;
        let t;

        element.innerHTML = chars.map(function (char) {
            return '<span>' + char + '</span>';
        }).join('');

        span = element.children;

        function frame() {
            for (let i = 0; i < length; i++) {
                span[i].style.color = 'hsl(' + (angle + Math.floor(i * shift)) + ', 60%, 70%)';
            }
            angle++;
        }

        t = setInterval(frame, 10);

        element.unbindRainbow = () => {
            clearInterval(t);
        };
    },
    unbind(element) {
        if (element.unbindRainbow) {
            element.unbindRainbow();
        }
    }
};

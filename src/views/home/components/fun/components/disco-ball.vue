<template>
    <div>
        <div id="discoBallLight"></div>
        <div id="discoBall" ref="discoBall">
            <div id="discoBallMiddle"></div>
        </div>
    </div>
</template>

<style lang="scss">

    // Disco ball from awesome Marty Saetre!
    // https://codepen.io/msaetre/pen/fDuzC

    @-webkit-keyframes rotateDiscoBall {
        0% {-webkit-transform: rotateX(90deg) rotateZ(0deg) rotate(0deg); }
        100% {-webkit-transform: rotateX(90deg) rotateZ(360deg) rotate(0deg); }
    }

    @keyframes rotateDiscoBall {
        0% {transform: rotateX(90deg) rotateZ(0deg) rotate(0deg); }
        100% {transform: rotateX(90deg) rotateZ(360deg) rotate(0deg); }
    }

    @-webkit-keyframes rotateDiscoBallMiddle {
        0% {-webkit-transform: rotateX(90deg) rotateY(0deg) rotate(0deg); }
        100% {-webkit-transform: rotateX(90deg) rotateY(-360deg) rotate(0deg); }
    }

    @keyframes rotateDiscoBallMiddle {
        0% {transform: rotateX(90deg) rotateY(0deg) rotate(0deg); }
        100% {transform: rotateX(90deg) rotateY(-360deg) rotate(0deg); }
    }

    @-webkit-keyframes reflect {
        0% {-webkit-filter: brightness(60%);}
        50% {-webkit-filter: brightness(120%);}
        100% {-webkit-filter: brightness(90%);}
    }

    @keyframes reflect {
        0% {opacity: 1;}
        50% {opacity: 0.4;}
        100% {opacity: 1;}
    }

    #discoBall {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        width: 100px;
        height: 100px;
        -webkit-animation: rotateDiscoBall 18s linear infinite;
        animation: rotateDiscoBall 18s linear infinite;
    }

    #discoBallLight {
        width: 100px;
        height: 100px;
        position: absolute;
        border-radius: 100%;
        background-color: white;
        opacity: 0.2;
        -webkit-filter: blur(20px);
    }

    .disco-square {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: absolute;
        top: 50px;
        left: 50px;
        width: 6px;
        height: 6px;
        position: absolute;
        transform: rotateX(90deg) rotateY(0deg) translateZ(0px);
    }

    #discoBallMiddle {
        height: 100%;
        border-radius: 100%;
        background-color: #111;
        position: absolute;
        background: -webkit-linear-gradient(top, #111, #333);
        background: -moz-linear-gradient(top, #111, #333);
        background: linear-gradient(top, #111, #333);
        -webkit-animation: rotateDiscoBallMiddle 18s linear infinite;
        animation: rotateDiscoBallMiddle 18s linear infinite;
    }
</style>

<script>
    export default {
        name: 'ob-disco-ball',
        mounted() {
            var t = 1;
            var radius = 50;
            var squareSize = 6.5;
            var prec = 19.55;
            var fuzzy = 0.001;
            var inc = (Math.PI-fuzzy)/prec;
            var discoBall = this.$refs['discoBall'];

            for(var t=fuzzy; t<Math.PI; t+=inc) {
                var z = radius * Math.cos(t);
                var currentRadius = Math.abs((radius * Math.cos(0) * Math.sin(t)) - (radius * Math.cos(Math.PI) * Math.sin(t))) / 2.5;
                var circumference = Math.abs(2 * Math.PI * currentRadius);
                var squaresThatFit = Math.floor(circumference / squareSize);
                var angleInc = (Math.PI*2-fuzzy) / squaresThatFit;
                for(var i=angleInc/2+fuzzy; i<(Math.PI*2); i+=angleInc) {
                    var square = document.createElement("div");
                    var squareTile = document.createElement("div");
                    squareTile.style.width = squareSize + "px";
                    squareTile.style.height = squareSize + "px";
                    squareTile.style.transformOrigin = "0 0 0";
                    squareTile.style.webkitTransformOrigin = "0 0 0";
                    squareTile.style.webkitTransform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
                    squareTile.style.transform = "rotate(" + i + "rad) rotateY(" + t + "rad)";
                    if((t>1.3 && t<1.9) || (t<-1.3 && t>-1.9)) {
                        squareTile.style.backgroundColor = randomColor("bright");
                    } else {
                        squareTile.style.backgroundColor = randomColor("any");
                    }
                    square.appendChild(squareTile);
                    square.className = "disco-square";
                    squareTile.style.webkitAnimation = "reflect 2s linear infinite";
                    squareTile.style.webkitAnimationDelay = String(randomNumber(0,20)/10) + "s";
                    squareTile.style.animation = "reflect 2s linear infinite";
                    squareTile.style.animationDelay = String(randomNumber(0,20)/10) + "s";
                    squareTile.style.backfaceVisibility = "hidden";
                    var x = radius * Math.cos(i) * Math.sin(t);
                    var y = radius * Math.sin(i) * Math.sin(t);
                    square.style.webkitTransform = "translateX(" + Math.ceil(x) + "px) translateY(" + y + "px) translateZ(" + z + "px)";
                    square.style.transform = "translateX(" + x + "px) translateY(" + y + "px) translateZ(" + z + "px)";
                    discoBall.appendChild(square);
                }
            }

            function randomColor(type) {
                var c;
                if(type == "bright") {
                    c = randomNumber(130, 255);
                } else {
                    c = randomNumber(110, 190);
                }
                return "rgb(" + c + "," + c + "," + c + ")";
            }

            function randomNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }
</script>

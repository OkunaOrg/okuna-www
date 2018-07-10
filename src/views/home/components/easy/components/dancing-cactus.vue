<template>
    <div class="centered-box">
        <div class="ludek">
            <div class="facet">
                <figure class="glowa">
      <span class="wlosy">
        <span class="grzywka"></span>
		<span class="kogut"></span>
		<span class="kogut dwa"></span>
		<span class="kogut trzy"></span>
	  </span>
                    <span class="uszy">
        <span class="ucho ucho-lewe"></span>
        <span class="ucho ucho-prawe"></span>
      </span>
                    <span class="oczy">
        <span class="oko oko-lewe"></span>
        <span class="oko oko-prawe"></span>
      </span>
                    <span class="nos"></span>
                    <span class="buzia"></span>
                </figure>
                <figure class="rece">
                    <span class="reka-lewa"></span>
                    <span class="reka-prawa"></span>
                </figure>
                <figure class="tlow">
                    <span class="szyja"></span>
                    <span class="brzuch"></span>
                </figure>
                <figure class="nogi">
                    <span class="noga-lewa"></span>
                    <span class="noga-prawa"></span>
                </figure>
            </div>
            <figure class="facet-cien">
                <span class="cien-lewy"></span>
                <span class="cien-prawy"></span>
            </figure>
        </div>
    </div>
</template>


<style lang="scss">

    .tekst {
        color: #32413d;
        font-family: 'Lato', arial, sans-serif;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 28px;
        font-weight: bold;
        display: block;
        letter-spacing: 2px;
        max-width: 100%;
        position: absolute;
        bottom: 20px;
        left: 30px;
        z-index: 1
    }


    .centered-box {
        font-family: 'Lato', arial, sans-serif;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 28px;
        font-weight: bold;
        display: block;
        letter-spacing: 2px;
        white-space: normal;
        max-width: 100%;
        z-index: 3
    }

    .facet {
        text-align: center;
        position: relative;
        display: inline-block;
        width: 100px;
        z-index: 2
    }

    .facet .glowa {
        width: 100%;
        height: 100px;
        border-radius: 50%;
        position: relative;
        -webkit-animation: ruchGlowa 1.2s ease-in-out infinite;
        animation: ruchGlowa 1.2s ease-in-out infinite
    }

    .facet .glowa:before {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: #fac5c6;
        width: 100%;
        height: 100%;
        border-radius: 100%;
        z-index: 2
    }

    .facet .glowa:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        background: #f0b2bc;
        width: 50%;
        height: 100%;
        border-radius: 100% 0 0 100% / 50% 0 0 50%;
        z-index: 3
    }

    .facet .wlosy {
        width: 110%;
        height: 55%;
        position: absolute;
        top: 0;
        left: 0
    }

    .facet .wlosy:before {
        content: "";
        display: block;
        position: absolute;
        left: -5%;
        top: -10%;
        background: #0a0a0a;
        width: 100%;
        height: 100%;
        border-radius: 50% 50% 0 0 / 100% 100% 0 0
    }

    .facet .wlosy .grzywka {
        position: absolute;
        left: 50%;
        top: -1px;
        background: #0a0a0a;
        width: 50%;
        margin-left: -32px;
        height: 15px;
        border-radius: 50% 50% 40% 40% / 50% 50% 80% 80%;
        z-index: 4
    }

    .facet .wlosy .grzywka:before {
        content: "";
        position: absolute;
        left: -10px;
        top: 0px;
        background: #0a0a0a;
        width: 25px;
        height: 15px;
        border-radius: 100% 0% 0% 0% / 100% 0% 0% 0%;
        z-index: 4
    }

    .facet .wlosy .kogut {
        position: absolute;
        right: 25%;
        top: -7px;
        background: #0a0a0a;
        width: 3px;
        height: 15px;
        border-radius: 3px;
        -webkit-transform-origin: bottom center;
        transform-origin: bottom center
    }

    .facet .wlosy .kogut.dwa {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg)
    }

    .facet .wlosy .kogut.trzy {
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg)
    }

    .facet .oczy {
        width: 100%;
        position: absolute;
        top: 26px;
        left: 0;
        z-index: 6
    }

    .facet .oczy .oko {
        position: absolute;
        width: 14px;
        height: 8px;
        top: 0;
        border: 2px solid #da87a6;
        border-width: 0px 2px 2px 2px;
        border-radius: 0 0 14px 14px
    }

    .facet .oczy .oko.oko-lewe {
        left: 28%
    }

    .facet .oczy .oko.oko-prawe {
        right: 28%
    }

    .facet .nos {
        width: 100%;
        height: 10px;
        position: absolute;
        top: 30px;
        z-index: 6
    }

    .facet .nos:after {
        content: "";
        display: block;
        width: 20px;
        height: 10px;
        background: #fac5c6;
        position: absolute;
        top: 15px;
        left: 50%;
        margin-left: -12px;
        border-radius: 20px
    }

    .facet .buzia {
        width: 80%;
        height: 42%;
        position: absolute;
        top: 45%;
        left: 7%;
        border: 2px solid #da87a6;
        border-width: 0px 2px 2px 2px;
        border-radius: 0 0 50% 50% / 0 0 100% 100%;
        z-index: 6
    }

    .facet .uszy {
        width: 100%;
        height: 20px;
        position: absolute;
        top: 50%;
        left: 0
    }

    .facet .uszy .ucho {
        position: absolute;
        width: 20px;
        height: 18px;
        top: -9px;
        background: #fac5c6;
        border-radius: 50%
    }

    .facet .uszy .ucho.ucho-lewe {
        left: -15px;
        background: #f0b2bc
    }

    .facet .uszy .ucho.ucho-prawe {
        right: -15px
    }

    .facet .tlow {
        display: block;
        width: 100%;
        height: 50px;
        position: relative;
        z-index: -1;
        -webkit-transform-origin: bottom center;
        transform-origin: bottom center;
        -webkit-animation: ruchBiodra 1.2s ease-in-out infinite;
        animation: ruchBiodra 1.2s ease-in-out infinite
    }

    .facet .szyja {
        width: 100%;
        position: absolute;
        top: -5px
    }

    .facet .szyja:after {
        content: "";
        display: block;
        width: 6px;
        height: 20px;
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -3px;
        border-radius: 20px
    }

    .facet .brzuch {
        width: 34%;
        height: 100%;
        background: #fac5c6;
        position: absolute;
        top: 5px;
        left: 33%;
        border-radius: 50% / 30%
    }

    .facet .brzuch:before {
        content: "";
        width: 100%;
        height: 75%;
        background: #ffdd00;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50% 50% 0 0
    }

    .facet .brzuch:after {
        content: "";
        width: 100%;
        height: 25%;
        background: #32413d;
        position: absolute;
        bottom: 0;
        left: 0;
        border-radius: 0 0 50% 50% / 0 0 100% 100%
    }

    .facet .rece {
        display: block;
        width: 100%;
        position: relative;
        top: 7px;
        z-index: -1
    }

    .facet .rece .reka-lewa,
    .facet .rece .reka-prawa {
        position: absolute;
        top: 50%;
        background: #fac5c6;
        width: 50px;
        height: 10px;
        border-radius: 10px
    }

    .facet .rece .reka-lewa {
        left: 0;
        -webkit-transform-origin: center right;
        transform-origin: center right;
        -webkit-animation: ruchRekaLewa 1.2s ease-in-out infinite;
        animation: ruchRekaLewa 1.2s ease-in-out infinite
    }

    .facet .rece .reka-prawa {
        right: 0;
        -webkit-transform-origin: center left;
        transform-origin: center left;
        -webkit-animation: ruchRekaPrawa 1.2s ease-in-out infinite;
        animation: ruchRekaPrawa 1.2s ease-in-out infinite
    }

    .facet .rece .reka-lewa:before,
    .facet .rece .reka-prawa:before {
        content: "";
        width: 30px;
        height: 100%;
        background: #ffdd00;
        position: absolute;
        top: 0
    }

    .facet .rece .reka-lewa:before {
        right: 0
    }

    .facet .rece .reka-prawa:before {
        left: 0
    }

    .facet .rece .reka-lewa:after,
    .facet .rece .reka-prawa:after {
        content: "";
        display: block;
        width: 50px;
        height: 10px;
        background: #fac5c6;
        position: absolute;
        top: 0;
        border-radius: 10px
    }

    .facet .rece .reka-lewa:after {
        left: -100%;
        margin-left: 5px;
        -webkit-transform-origin: center right;
        transform-origin: center right;
        -webkit-animation: ruchRekaLewaAfter 1.2s ease-in-out infinite;
        animation: ruchRekaLewaAfter 1.2s ease-in-out infinite
    }

    .facet .rece .reka-prawa:after {
        right: -100%;
        margin-right: 5px;
        -webkit-transform-origin: center left;
        transform-origin: center left;
        -webkit-animation: ruchRekaPrawaAfter 1.2s ease-in-out infinite;
        animation: ruchRekaPrawaAfter 1.2s ease-in-out infinite
    }

    .facet .nogi {
        display: block;
        width: 100%;
        height: 120px;
        position: relative
    }

    .facet .nogi .noga-lewa,
    .facet .nogi .noga-prawa {
        position: absolute;
        left: 50%;
        top: -2px;
        background: #32413d;
        width: 8px;
        margin-left: -4px;
        height: 50%;
        border-radius: 0 0 8px 8px;
        -webkit-transform-origin: top center;
        transform-origin: top center
    }

    .facet .nogi .noga-lewa {
        margin-left: -9px;
        -webkit-animation: ruchNogaLewa 0.7s ease-in-out infinite;
        animation: ruchNogaLewa 0.7s ease-in-out infinite
    }

    .facet .nogi .noga-prawa {
        margin-left: 1px;
        -webkit-animation: ruchNogaPrawa 0.7s ease-in-out infinite;
        animation: ruchNogaPrawa 0.7s ease-in-out infinite
    }

    .facet .nogi .noga-lewa:after,
    .facet .nogi .noga-prawa:after {
        content: "";
        display: block;
        width: 8px;
        height: 100%;
        background: #32413d;
        position: absolute;
        top: 100%;
        margin-top: -8px;
        border-radius: 8px 8px 0 0
    }

    .facet .nogi .noga-lewa:after {
        right: 0;
        -webkit-transform-origin: top right;
        transform-origin: top right;
        -webkit-animation: ruchNogaLewaAfter 0.7s ease-in-out infinite;
        animation: ruchNogaLewaAfter 0.7s ease-in-out infinite
    }

    .facet .nogi .noga-prawa:after {
        left: 0;
        -webkit-transform-origin: top left;
        transform-origin: top left;
        -webkit-animation: ruchNogaPrawaAfter 0.7s ease-in-out infinite;
        animation: ruchNogaPrawaAfter 0.7s ease-in-out infinite
    }

    .facet-cien {
        display: block;
        width: 80%;
        position: relative;
        margin-left: 10%;
        z-index: 1
    }

    .facet-cien .cien-lewy,
    .facet-cien .cien-prawy {
        position: absolute;
        bottom: 5px;
        display: block;
        width: 90%;
        height: 20px;
        background: #22abb3;
        border-radius: 50%;
        z-index: -1
    }

    .facet-cien .cien-lewy {
        left: 0;
        -webkit-animation: ruchCienLewy 1.2s ease-in-out infinite;
        animation: ruchCienLewy 1.2s ease-in-out infinite
    }

    .facet-cien .cien-prawy {
        right: 0;
        -webkit-animation: ruchCienPrawy 1.2s ease-in-out infinite;
        animation: ruchCienPrawy 1.2s ease-in-out infinite
    }

    /*! animacja noga lewa */
    @-webkit-keyframes ruchNogaLewa {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg)
        }
        25% {
            -webkit-transform: rotateZ(30deg);
            transform: rotateZ(30deg)
        }
    }

    @keyframes ruchNogaLewa {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg)
        }
        25% {
            -webkit-transform: rotateZ(30deg);
            transform: rotateZ(30deg)
        }
    }

    /*! animacja noga lewa after */
    @-webkit-keyframes ruchNogaLewaAfter {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg) translate(0px, 0px);
            transform: rotateZ(0deg) translate(0px, 0px)
        }
        25% {
            -webkit-transform: rotateZ(-60deg) translate(-4px, -4px);
            transform: rotateZ(-60deg) translate(-4px, -4px)
        }
    }

    @keyframes ruchNogaLewaAfter {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg) translate(0px, 0px);
            transform: rotateZ(0deg) translate(0px, 0px)
        }
        25% {
            -webkit-transform: rotateZ(-60deg) translate(-4px, -4px);
            transform: rotateZ(-60deg) translate(-4px, -4px)
        }
    }

    /*! animacja noga prawa */
    @-webkit-keyframes ruchNogaPrawa {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg)
        }
        75% {
            -webkit-transform: rotateZ(-30deg);
            transform: rotateZ(-30deg)
        }
    }

    @keyframes ruchNogaPrawa {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg);
            transform: rotateZ(0deg)
        }
        75% {
            -webkit-transform: rotateZ(-30deg);
            transform: rotateZ(-30deg)
        }
    }

    /*! animacja noga prawa after */
    @-webkit-keyframes ruchNogaPrawaAfter {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg) translate(0px, 0px);
            transform: rotateZ(0deg) translate(0px, 0px)
        }
        75% {
            -webkit-transform: rotateZ(60deg) translate(4px, -4px);
            transform: rotateZ(60deg) translate(4px, -4px)
        }
    }

    @keyframes ruchNogaPrawaAfter {
        0%, 50%, 100% {
            -webkit-transform: rotateZ(0deg) translate(0px, 0px);
            transform: rotateZ(0deg) translate(0px, 0px)
        }
        75% {
            -webkit-transform: rotateZ(60deg) translate(4px, -4px);
            transform: rotateZ(60deg) translate(4px, -4px)
        }
    }

    /*! animacja reka lewa */
    @-webkit-keyframes ruchRekaLewa {
        0%, 100% {
            -webkit-transform: rotateZ(20deg);
            transform: rotateZ(20deg)
        }
        50% {
            -webkit-transform: rotateZ(-20deg);
            transform: rotateZ(-20deg)
        }
    }

    @keyframes ruchRekaLewa {
        0%, 100% {
            -webkit-transform: rotateZ(20deg);
            transform: rotateZ(20deg)
        }
        50% {
            -webkit-transform: rotateZ(-20deg);
            transform: rotateZ(-20deg)
        }
    }

    /*! animacja reka lewa after */
    @-webkit-keyframes ruchRekaLewaAfter {
        0%, 100% {
            -webkit-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg)
        }
        50% {
            -webkit-transform: rotateZ(60deg);
            transform: rotateZ(60deg)
        }
    }

    @keyframes ruchRekaLewaAfter {
        0%, 100% {
            -webkit-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg)
        }
        50% {
            -webkit-transform: rotateZ(60deg);
            transform: rotateZ(60deg)
        }
    }

    /*! animacja reka prawa */
    @-webkit-keyframes ruchRekaPrawa {
        0%, 100% {
            -webkit-transform: rotateZ(20deg);
            transform: rotateZ(20deg)
        }
        50% {
            -webkit-transform: rotateZ(-20deg);
            transform: rotateZ(-20deg)
        }
    }

    @keyframes ruchRekaPrawa {
        0%, 100% {
            -webkit-transform: rotateZ(20deg);
            transform: rotateZ(20deg)
        }
        50% {
            -webkit-transform: rotateZ(-20deg);
            transform: rotateZ(-20deg)
        }
    }

    /*! animacja reka prawa after */
    @-webkit-keyframes ruchRekaPrawaAfter {
        0%, 100% {
            -webkit-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg)
        }
        50% {
            -webkit-transform: rotateZ(60deg);
            transform: rotateZ(60deg)
        }
    }

    @keyframes ruchRekaPrawaAfter {
        0%, 100% {
            -webkit-transform: rotateZ(-60deg);
            transform: rotateZ(-60deg)
        }
        50% {
            -webkit-transform: rotateZ(60deg);
            transform: rotateZ(60deg)
        }
    }

    /*! animacja glowa */
    @-webkit-keyframes ruchGlowa {
        0%, 100% {
            -webkit-transform: rotateZ(-10deg);
            transform: rotateZ(-10deg)
        }
        25% {
            -webkit-transform: rotateZ(-15deg);
            transform: rotateZ(-15deg)
        }
        50% {
            -webkit-transform: rotateZ(10deg);
            transform: rotateZ(10deg)
        }
        75% {
            -webkit-transform: rotateZ(15deg);
            transform: rotateZ(15deg)
        }
    }

    @keyframes ruchGlowa {
        0%, 100% {
            -webkit-transform: rotateZ(-10deg);
            transform: rotateZ(-10deg)
        }
        25% {
            -webkit-transform: rotateZ(-15deg);
            transform: rotateZ(-15deg)
        }
        50% {
            -webkit-transform: rotateZ(10deg);
            transform: rotateZ(10deg)
        }
        75% {
            -webkit-transform: rotateZ(15deg);
            transform: rotateZ(15deg)
        }
    }

    /*! animacja bioderka */
    @-webkit-keyframes ruchBiodra {
        0%, 30%, 100% {
            -webkit-transform: rotateZ(10deg);
            transform: rotateZ(10deg)
        }
        50%, 70% {
            -webkit-transform: rotateZ(-10deg);
            transform: rotateZ(-10deg)
        }
    }

    @keyframes ruchBiodra {
        0%, 30%, 100% {
            -webkit-transform: rotateZ(10deg);
            transform: rotateZ(10deg)
        }
        50%, 70% {
            -webkit-transform: rotateZ(-10deg);
            transform: rotateZ(-10deg)
        }
    }

    /*! animacja cien lewy */
    @-webkit-keyframes ruchCienLewy {
        0%, 10%, 100% {
            width: 110%
        }
        60% {
            width: 100%
        }
    }

    @keyframes ruchCienLewy {
        0%, 10%, 100% {
            width: 110%
        }
        60% {
            width: 100%
        }
    }

    /*! animacja cien prawy */
    @-webkit-keyframes ruchCienPrawy {
        0%, 90%, 100% {
            width: 100%
        }
        40% {
            width: 110%
        }
    }

    @keyframes ruchCienPrawy {
        0%, 90%, 100% {
            width: 100%
        }
        40% {
            width: 110%
        }
    }

</style>

<script>
    export default {
        name: 'ob-dancing-cactus'
    }
</script>

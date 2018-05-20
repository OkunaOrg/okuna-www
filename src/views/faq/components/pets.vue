<template>
    <div class="columns">
        <div class="pets-right column">
            <div class="dog">
                <div class="ears2"></div>
                <div class="head2">
                    <div class="eyes2"></div>
                    <div class="nose2"></div>
                </div>
                <div class="body2">
                    <div class="left-paw2"></div>
                    <div class="right-paw2"></div>
                </div>
                <div class="tail2"></div>
                <div class="ORlaptop">
                    <div class="ORscreen"></div>
                    <div class="ORkeyboard"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">
    // Pet courtesy of the amazing Clara Song https://codepen.io/clarawrsong/
    // https://codepen.io/clarawrsong/pen/JMMdOz

    .pets-right {
        position: relative;
        height: 100%;
        width: 50%;
    }
    .dog {
        height: 182px;
        position: relative;
        top: 50%;
        padding-left: 85px;
    }
    .dog .ears2 {
        height: 0;
        width: 0;
        position: relative;
        left: 30px;
        border-bottom: 27px solid #F07E42;
        border-left: 23px solid transparent;
        border-right: 10px solid transparent;
    }
    .dog .ears2::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        left: 33px;
        border-bottom: 27px solid #F07E42;
        border-left: 10px solid transparent;
        border-right: 23px solid transparent;
    }
    .dog .head2 {
        height: 74px;
        width: 140px;
        position: relative;
        z-index: 2;
        box-shadow: 8px 0 0 #F07E42;
        border-radius: 35px;
        background: #FFA852;
    }
    .dog .head2 .eyes2 {
        height: 12px;
        width: 12px;
        position: relative;
        top: 37px;
        left: 50px;
        border-radius: 100%;
        animation: 9s dogRead infinite;
        background: black;
    }
    .dog .head2 .eyes2::before {
        display: block;
        content: "";
        height: 12px;
        width: 12px;
        position: relative;
        left: 18px;
        border-radius: 100%;
        background: black;
    }
    .dog .head2 .nose2 {
        height: 30px;
        width: 45px;
        position: relative;
        top: 40px;
        left: 37px;
        border-radius: 20px;
        background: #FBF1D8;
    }
    .dog .head2 .nose2::before {
        display: block;
        content: "";
        height: 0;
        width: 0;
        position: relative;
        top: 3px;
        left: 9px;
        border-radius: 10px;
        border-top: 10px solid black;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }
    .dog .body2 {
        height: 110px;
        width: 150px;
        position: relative;
        top: -30px;
        z-index: 1;
        border-radius: 55px;
        background: #FFA852;
    }
    .dog .body2 .pets-left-paw2 {
        height: 25px;
        width: 37px;
        position: relative;
        top: 70px;
        left: 15px;
        border-radius: 12px;
        animation: 9s dogLeftType infinite;
        background: #FBF1D8;
    }
    .dog .body2 .pets-right-paw2 {
        height: 25px;
        width: 37px;
        position: relative;
        top: 45px;
        left: 60px;
        border-radius: 12px;
        animation: 9s dogRightType infinite;
        background: #FBF1D8;
    }
    .dog .tail2 {
        height: 34px;
        width: 70px;
        position: relative;
        top: -64px;
        left: 100px;
        z-index: 0;
        border-radius: 0 17px 17px 0;
        background: #F07E42;
    }
    .dog .ORlaptop {
        position: relative;
        top: -161px;
        left: -103px;
        z-index: 2;
    }
    .dog .ORlaptop .ORscreen {
        height: 85px;
        width: 130px;
        border-radius: 8px;
        transform: skew(18deg);
        background: #f5f5f1;
    }
    .dog .ORlaptop .ORscreen::before {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 38px;
        left: 50px;
        border-radius: 6px;
        background: #690ddc;
    }
    .dog .ORlaptop .ORscreen::after {
        display: block;
        content: "";
        height: 17px;
        width: 10px;
        position: relative;
        top: 21px;
        left: 64px;
        border-radius: 6px;
        background: #690ddc;
    }
    .dog .ORlaptop .ORkeyboard {
        height: 12px;
        width: 132px;
        position: relative;
        left: 14px;
        border-radius: 6px 0 0 6px;
        background: #cbcbc7;
    }
    .dog .ORlaptop .ORkeyboard::before {
        display: block;
        content: "";
        height: 12px;
        width: 72px;
        position: relative;
        left: 128px;
        border-radius: 6px;
        background: #e5e5e1;
    }
    @keyframes catLeftType {
        2% {
            transform: translateY(-8px);
        }
        6% {
            transform: none;
        }
        8% {
            transform: translateY(-8px);
        }
        10% {
            transform: none;
        }
        14% {
            transform: translateY(-8px);
        }
        16% {
            transform: none;
        }
        18% {
            transform: translateY(-8px);
        }
        20% {
            transform: none;
        }
        22% {
            transform: translateY(-8px);
        }
        26% {
            transform: none;
        }
    }
    @keyframes catRightType {
        6% {
            transform: translateY(-8px);
        }
        8% {
            transform: none;
        }
        10% {
            transform: translateY(-8px);
        }
        12% {
            transform: none;
        }
        16% {
            transform: translateY(-8px);
        }
        18% {
            transform: none;
        }
        20% {
            transform: translateY(-8px);
        }
        22% {
            transform: none;
        }
        24% {
            transform: translateY(-8px);
        }
        28% {
            transform: none;
        }
    }
    @keyframes catRead {
        55% {
            transform: none;
        }
        62% {
            transform: translateX(-2px);
        }
        70% {
            transition-timing-function: ease-out;
            transform: translateX(3px);
        }
        82% {
            transform: translateX(-2px);
        }
        90% {
            transition-timing-function: ease-out;
            transform: translateX(3px);
        }
        100% {
            transform: none;
        }
    }
    @keyframes dogLeftType {
        50% {
            transform: none;
        }
        52% {
            transform: translateY(-8px);
        }
        56% {
            transform: none;
        }
        58% {
            transform: translateY(-8px);
        }
        60% {
            transform: none;
        }
        64% {
            transform: translateY(-8px);
        }
        66% {
            transform: none;
        }
        68% {
            transform: translateY(-8px);
        }
        70% {
            transform: none;
        }
        72% {
            transform: translateY(-8px);
        }
        76% {
            transform: none;
        }
    }
    @keyframes dogRightType {
        54% {
            transform: none;
        }
        56% {
            transform: translateY(-8px);
        }
        58% {
            transform: none;
        }
        60% {
            transform: translateY(-8px);
        }
        62% {
            transform: none;
        }
        66% {
            transform: translateY(-8px);
        }
        68% {
            transform: none;
        }
        70% {
            transform: translateY(-8px);
        }
        72% {
            transform: none;
        }
        74% {
            transform: translateY(-8px);
        }
        78% {
            transform: none;
        }
    }
    @keyframes dogRead {
        5% {
            transform: none;
        }
        17% {
            transition-timing-function: ease-out;
            transform: translateX(-5px);
        }
        25% {
            transform: none;
        }
        37% {
            transition-timing-function: ease-out;
            transform: translateX(-5px);
        }
        45% {
            transform: none;
        }
    }

</style>


<script>
    export default{
        name: 'ob-pets'
    }
</script>

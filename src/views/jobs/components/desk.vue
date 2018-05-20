<template>
    <div class="desk-box">
        <div class="computer">
            <div class="screen">
                <div class="bucket">
                    <div class="bucket-lid">
                        <div class="blob-1"></div>
                        <div class="blob-2"></div>
                        <div class="blob-3"></div>
                    </div>
                    <div class="bucket-strip-1"></div>
                    <div class="bucket-strip-2"></div>
                </div>
                <div class="console">
                    <div class="dot-1"></div>
                    <div class="dot-2"></div>
                    <div class="dot-3"></div>
                    <div class="line-1"></div>
                    <div class="line-2"></div>
                    <div class="line-3"></div>
                </div>
                <div class="tube">
                    <div class="tube-overlay-1"></div>
                    <div class="tube-overlay-2"></div>
                    <div class="tube-lid">
                        <div class="lid-overlay-1"></div>
                        <div class="lid-overlay-2"></div>
                    </div>
                </div>
                <div class="big-pencil">
                    <div class="big-pencil-strip-1"></div>
                    <div class="big-pencil-strip-2"></div>
                    <div class="big-pencil-tip">
                        <div class="big-pencil-mark"></div>
                    </div>
                </div>
                <div class="logo">
                    <div class="logo-overlay"></div>
                </div>
                <div class="ruler">
                    <div class="ruler-mark-1"></div>
                    <div class="ruler-mark-2"></div>
                    <div class="ruler-mark-3"></div>
                    <div class="ruler-mark-4"></div>
                    <div class="ruler-mark-5"></div>
                    <div class="ruler-mark-6"></div>
                    <div class="ruler-mark-7"></div>
                    <div class="ruler-mark-8"></div>
                    <div class="ruler-mark-9"></div>
                    <div class="ruler-mark-10"></div>
                </div>
            </div>
            <div class="stem"></div>
            <div class="base"></div>
        </div>
        <div class="desk">
            <div class="sticky-note">
                <div class="bottom-strip"></div>
            </div>
            <div class="pencil">
                <div class="eraser"></div>
                <div class="tip">
                    <div class="mark"></div>
                </div>
            </div>
            <div class="watch">
                <div class="watch-copy"></div>
                <div class="watch-overlay"></div>
                <div class="band-top"></div>
                <div class="band-bottom"></div>
            </div>
            <div class="phone">
                <div class="phone-screen">
                    <div class="phone-bar-1"></div>
                    <div class="phone-bar-2"></div>
                </div>
            </div>
            <div class="notebook">
                <div class="spine"></div>
                <div class="cover"></div>
            </div>
            <div class="calculator">
                <div class="calc-bar"></div>
                <div class="key-1"></div>
                <div class="key-2"></div>
                <div class="key-3"></div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    // Desk courtesy of the incredible Mike Mangialardi
    // https://codepen.io/mikemang/pen/apgQNX?page=1&
    // https://codepen.io/mikemang/pen/apgQNX?page=1&

    .desk-box{
        height: 400px;
        width: 600px;
        position: relative;
        display: block;
        margin: auto;
        margin-top: 8%;
    }

    .desk{
        position: absolute;
        bottom: 0%;
        width: 100%;
        height: 30%;
        z-index: 1;
    }

    .computer{
        position: absolute;
        width: 55%;
        left: 22.5%;
        height: 60%;
        top: 15%;
        background: #C2C5C6;
        z-index: 2;
    }

    .screen{
        position: absolute;
        height: 85%;
        width: 90%;
        top: 7.5%;
        left: 5%;
        background: #B6E4F5;
    }
    .stem{
        position: absolute;
        height: 15%;
        width: 20%;
        left: 40%;
        bottom: -15%;
        background: #C2C5C6;
    }

    .base{
        position: absolute;
        height: 5%;
        width: 40%;
        left: 30%;
        bottom: -20%;
        background: #C2C5C6;
    }

    .sticky-note{
        position: absolute;
        height: 55%;
        width: 12%;
        top: 22.5%;
        left: 1.5%;
        background: #EFBEF0;
        transform: rotate(5deg);
    }

    .bottom-strip{
        position: absolute;
        width: 100%;
        height: 10%;
        bottom: -10%;
        background: #E7BFE8;
    }

    .pencil{
        position: absolute;
        width: 2%;
        height: 70%;
        background: #FCC360;
        left: 17%;
        top: 13%;
        transform: rotate(8deg);
    }

    .tip{
        position: absolute;
        width: 100%;
        height: 15%;
        bottom: -15%;
        background: #F0CF99;
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        transform: rotate(180deg);
    }

    .mark{
        position: absolute;
        background: black;
        height: 40%;
        width: 100%;
        -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    }

    .eraser{
        position: absolute;
        width: 100%;
        height: 8%;
        top: -8%;
        background: #EF8773;
    }

    .watch{
        position: absolute;
        top: 55%;
        height: 20%;
        width: 4%;
        background: white;
        border-radius: 50%;
        left: 28%;
        transform: rotate(-40deg);
    }

    .watch-copy{
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        border-radius: 50%;
        z-index: 3;
    }

    .watch-overlay{
        position: absolute;
        height: 75%;
        width: 75%;
        top: 15%;
        left: 15%;
        background: #EAC181;
        border-radius: 50%;
        z-index: 3;
    }

    .band-top{
        position: absolute;
        width: 50%;
        left: 25%;
        height: 170%;
        background: #C49A70;
        top: -140%;
        border-radius: 40px;
        z-index: 1;
    }

    .band-bottom{
        position: absolute;
        width: 50%;
        left: 25%;
        height: 170%;
        background: #C49A70;
        bottom: -140%;
        border-radius: 40px;
    }

    .phone{
        position: absolute;
        height: 35%;
        bottom: 0%;
        width: 8%;
        left: 50%;
        background: white;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .phone-screen{
        position: absolute;
        height: 80%;
        width: 80%;
        bottom: 0%;
        left: 10%;
        background: #21D083;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }

    .phone-bar-1{
        position: absolute;
        width: 80%;
        height: 15%;
        top: 25%;
        left: 10%;
        background: gray;
        border-radius: 50px;
    }

    .phone-bar-2{
        position: absolute;
        width: 80%;
        height: 15%;
        top: 65%;
        left: 10%;
        background: gray;
        border-radius: 50px;
    }

    .notebook{
        position: absolute;
        height: 60%;
        width: 9%;
        background: #FD7369;
        right: 20%;
        bottom: 11%;
        transform: rotate(40deg);
    }

    .spine{
        position: absolute;
        left: 0%;
        height: 100%;
        width: 13%;
        background: #CE554D;
    }

    .cover{
        position: absolute;
        width: 60%;
        height: 25%;
        top: 20%;
        left: 25%;
        border-radius: 3px;
        background: #CE554D;
    }

    .calculator{
        position: absolute;
        right: 0%;
        width:10%;
        height: 20%;
        bottom: 0%;
        background: white;
    }

    .calc-bar{
        position: absolute;
        width: 80%;
        top: 15%;
        background: gray;
        height: 15%;
        left: 12.5%;
    }

    .key-1{
        position: absolute;
        width: 20%;
        height: 40%;
        bottom: 0%;
        background: #7F93D0;
        border-radius: 1px;
        left: 5%;
    }

    .key-2{
        position: absolute;
        width: 20%;
        height: 40%;
        bottom: 0%;
        background: #7F93D0;
        border-radius: 1px;
        left: 40%;
    }

    .key-3{
        position: absolute;
        width: 20%;
        height: 40%;
        bottom: 0%;
        background: #7F93D0;
        border-radius: 1px;
        left: 75%;
    }

    .console{
        position: absolute;
        width: 35%;
        height: 35%;
        top: 10%;
        left: 10%;
        border-radius: 10px;
        background: #111111;
    }

    .dot-1{
        position: absolute;
        height: 10%;
        width: 7%;
        background: gray;
        border-radius: 50%;
        top: 8%;
        left: 5%;
    }

    .dot-2{
        position: absolute;
        height: 10%;
        width: 7%;
        background: gray;
        border-radius: 50%;
        top: 8%;
        left: 15%;
    }

    .dot-3{
        position: absolute;
        height: 10%;
        width: 7%;
        background: gray;
        border-radius: 50%;
        top: 8%;
        left: 25%;
    }

    .line-1{
        position: absolute;
        width: 45%;
        height: 10%;
        top: 35%;
        left: 5%;
        background: #F9D255;
        border-radius: 30px;
    }

    .line-2{
        position: absolute;
        width: 65%;
        height: 10%;
        top: 55%;
        left: 5%;
        background: #FD7369;
        border-radius: 30px;
    }

    .line-3{
        position: absolute;
        width: 75%;
        height: 10%;
        top: 75%;
        left: 5%;
        background: #21D083;
        border-radius: 30px;
    }

    .logo{
        position: absolute;
        bottom: 6%;
        left: 5%;
        height: 40%;
        width: 32%;
        background: #FE8F23;
    }

    .logo-overlay{
        position: absolute;
        height: 90%;
        width: 90%;
        top: 5%;
        left: 5%;
        background: #3C3A55;
    }

    .tube{
        position: absolute;
        top: 0%;
        height: 30%;
        width: 20%;
        right: 15%;
        background: #5CB96C;
    }

    .tube-lid{
        position: absolute;
        width: 120%;
        height: 25%;
        bottom: -20%;
        left: -10%;
        background: #5CB96C;
    }

    .tube-overlay-1{
        position: absolute;
        width: 33%;
        height: 100%;
        background: #C0D558;
    }
    .tube-overlay-2{
        position: absolute;
        width: 33%;
        left: 33%;
        height: 100%;
        background: #8BC662;
    }

    .lid-overlay-1{
        position: absolute;
        width: 33%;
        height: 100%;
        background: #C0D558;
    }
    .lid-overlay-2{
        position: absolute;
        width: 33%;
        left: 33%;
        height: 100%;
        background: #8BC662;
    }

    .bucket{
        position: absolute;
        bottom: 0%;
        width: 30%;
        height: 40%;
        left: 42.5%;
        background: #277F63;
    }

    .bucket-strip-1{
        position: absolute;
        bottom: 0%;
        width: 33%;
        height: 100%;
        left: 0%;
        background: #74C198;
    }

    .bucket-strip-2{
        position: absolute;
        bottom: 0%;
        width: 33%;
        height: 100%;
        left: 33%;
        background: #36A281;
    }

    .bucket-lid{
        position: absolute;
        width: 100%;
        height: 15%;
        top: -15%;
        left: 0%;
        background: #E9E8E6;
        z-index: 1;
    }

    .blob-1{
        position: absolute;
        height: 300%;
        width: 10%;
        right: 30%;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background: #F1526A;
    }

    .blob-2{
        position: absolute;
        height: 350%;
        width: 10%;
        right: 20%;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background: #F2805A;
    }
    .blob-3{
        position: absolute;
        height: 250%;
        width: 10%;
        right: 10%;
        border-bottom-left-radius: 80px;
        border-bottom-right-radius: 80px;
        background: #7C90CF;
    }

    .big-pencil{
        position: absolute;
        right: 9%;
        width: 8%;
        bottom: 0%;
        height: 40%;
        background: #F9D255;
    }

    .big-pencil-strip-1{
        position: absolute;
        height: 100%;
        width: 33%;
        background: #F5BB52;
        left: 33%;
    }

    .big-pencil-strip-2{
        position: absolute;
        height: 100%;
        width: 33%;
        background: #F1853E;
        left: 66%;
    }

    .big-pencil-tip{
        position: absolute;
        height: 25%;
        width: 100%;
        top: -25%;
        -webkit-clip-path: polygon(50% 31%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 31%, 0% 100%, 100% 100%);
        background: #FDDEB9;
    }

    .big-pencil-mark{
        position: absolute;
        height: 65%;
        width: 100%;
        top: 0%;
        -webkit-clip-path: polygon(50% 31%, 0% 100%, 100% 100%);
        clip-path: polygon(50% 31%, 0% 100%, 100% 100%);
        background: black;
    }

    .ruler{
        position: absolute;
        width: 50%;
        height:8%;
        top: 41%;
        right: 0%;
        background: #F25B51;
    }

    .ruler-mark-1{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 5%;
        bottom: 0%;
        background: #111111;
    }


    .ruler-mark-2{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 15%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-3{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 25%;
        bottom: 0%;
        background: #111111;
    }
    .ruler-mark-4{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 35%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-5{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 45%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-6{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 55%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-7{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 65%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-8{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 75%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-9{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 85%;
        bottom: 0%;
        background: #111111;
    }

    .ruler-mark-10{
        position: absolute;
        height: 60%;
        width: 3%;
        left: 95%;
        bottom: 0%;
        background: #111111;
    }

    @media all and (max-width: 600px) {
        .desk-box{
            width: 250px;
            height: 175px;
        }

        .console{
            border-radius: 2px;
        }

    }
</style>

<script>
    export default{
        name: 'ob-desk'
    }
</script>

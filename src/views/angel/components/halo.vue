<template>
    <div class="columns">
        <div class="column">
            <div class='owl'>
                <div class='owl-body'>
                    <div class='wing'></div>
                    <div class='wing'></div>
                    <div class='feet'></div>
                    <div class='feet right'></div>
                    <div class='feather'></div>
                </div>
                <div class='head'>
                    <div class='eyes'>
                        <div class='beak'></div>
                        <div class='eye'>
                            <div class='pupil'></div>
                        </div>
                        <div class='eye'>
                            <div class='pupil'></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<style lang="scss">

    .owl {
        position: relative;
        width: 155px;
        height: 215px;
    }
    .pupil {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background: #000;
    }
    .pupil::after {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 12px;
        background: #fff;
        content: '';
    }
    .eye {
        position: absolute;
        top: 10px;
        left: 10px;
        width: 90px;
        height: 90px;
        border-radius: 45px;
        background: #fff;
    }
    .eye:nth-child(2){
        left:98px;
    }
    .eyes {
        position: absolute;
        top: 10px;
        left: -20px;
        width: 110px;
        height: 110px;
        border-radius: 55px;
        background: #98e0f8;
    }
    .eyes::before {
        position: absolute;
        left: 88px;
        display: block;
        width: 110px;
        height: 110px;
        border-radius: 55px;
        background: #98e0f8;
        content: '';
    }
    .beak {
        position: absolute;
        top: 60px;
        left: 49px;
        display: block;
        width: 0;
        height: 0;
        border-top: 60px solid #ef8e1b;
        border-right: 50px solid transparent;
        border-left: 50px solid transparent;
        content: '';
    }
    .head {
        position: absolute;
        width: 160px;
        height: 80px;
        border-radius: 80px / 40px;
        background: #64c2de;
    }
    .head::before {
        position: absolute;
        top: 0px;
        left: 15px;
        display: block;
        width: 0;
        height: 0;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #64c2de;
        border-left: 15px solid transparent;
        content: '';
        -webkit-transform: rotate(-15deg);
    }
    .head::after {
        position: absolute;
        top: 0;
        right: 18px;
        z-index:-1;
        display: block;
        width: 0;
        height: 0;
        border-right: 15px solid transparent;
        border-bottom: 15px solid #64c2de;
        border-left: 15px solid transparent;
        content: '';
        -webkit-transform: rotate(15deg);
    }
    .owl-body {
        position: absolute;
        top: 100px;
        width: 160px;
        height: 100px;
        border-radius: 80px / 50px;
        background: #98e0f8;
    }
    .wing {
        position: absolute;
        top: 0;
        left: -20px;
        width: 50px;
        height: 100px;
        border-radius: 50px 0;
        background: #64c2de;
        -webkit-transform-origin: 30px 10px;
        -webkit-transform: rotate(-20deg);
        transition: all 0.5s ease;
    }

    .wing:nth-child(2){
        left: 130px;
        border-radius: 0 50px;
        -webkit-transform-origin: 20px 10px;
        -webkit-transform: rotate(20deg);
    }
    .feet {
        position: absolute;
        bottom: -5px;
        left: 50px;
        width: 6px;
        height: 18px;
        border-radius: 3px / 9px;
        background: #ef8e1b;
        -webkit-transform: rotate(10deg);
    }
    .feet::before {
        position: absolute;
        bottom: 0;
        left: -6px;
        display: block;
        width: 6px;
        height: 18px;
        border-radius: 3px / 9px;
        background: #ef8e1b;
        content: '';
    }
    .feet::after {
        position: absolute;
        bottom: 0;
        left: 6px;
        display: block;
        width: 6px;
        height: 18px;
        border-radius: 3px / 9px;
        background: #ef8e1b;
        content: '';
    }
    .feet.right{
        left: 104px;
        -webkit-transform: rotate(-10deg);
    }
    .feather {
        position: absolute;
        top: 65px;
        left: 72px;
        width: 0;
        height: 0;
        border-top: 10px solid #64c2de;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
    }
    .feather::before {
        position: absolute;
        top: -30px;
        left: -20px;
        display: block;
        width: 0;
        height: 0;
        border-top: 10px solid #64c2de;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        content: '';
        -webkit-transform: rotate(5deg);
    }
    .feather::after {
        position: absolute;
        top: -30px;
        left: 7px;
        display: block;
        width: 0;
        height: 0;
        border-top: 10px solid #64c2de;
        border-right: 7px solid transparent;
        border-left: 7px solid transparent;
        content: '';
        -webkit-transform: rotate(-5deg);
    }

    .owl:hover .wing {
        -webkit-transform: rotate(90deg);
    }
    .owl:hover .wing:nth-child(2) {
        -webkit-transform: rotate(-90deg);
    }
    .owl:hover .head {
        top: 5px;
    }
</style>


<script>
    export default{
        name: 'ob-halo'
    }
</script>

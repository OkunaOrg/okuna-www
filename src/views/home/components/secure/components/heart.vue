<template>
    <div class="wrapper">
        <div class="base">
            <div class="base-bottom">
            </div>
            <div class="lock-inside-top">
            </div>
            <div class="lock-inside-bottom">
            </div>
        </div>
        <div class="lock-cirlce">
            <div class="lock-circle-inside">
            </div>
        </div>
        <div class="lock-box">
        </div>
    </div>
</template>


<style lang="scss">
    @keyframes unlock-circle {
        0% {
            bottom: 200px;
        }
        25% {
            bottom: 200px;
        }
        50% {
            bottom: 150px;
        }
        75% {
            bottom: 150px;
        }
        100% {
            bottom: 200px;
        }
    }

    @keyframes unlock-box {
        0% {
            bottom: 280px;
        }
        25% {
            bottom: 280px;
        }
        50% {
            bottom: 230px;
        }
        75% {
            bottom: 230px;
        }
        100% {
            bottom: 280px;
        }
    }

    .wrapper {
        height: 300px;
        width: 300px;
        margin: 50px auto;
    }

    .base {
        background-color: #ecf0f1;
        width: 200px;
        height: 170px;
        border-radius: 30px;
        margin: 0 auto;
        position: relative;
        top: 100px;
        z-index: 100;
    }

    .base-bottom {
        background-color: #bdc3c7;
        width: 200px;
        height: 85px;
        border-radius: 0 0 30px 30px;
        top: 85px;
        position: relative;
        opacity: 0.4;
    }

    .lock-cirlce {
        height: 180px;
        width: 110px;
        border-radius: 45px;
        z-index: 10;
        background-color: #bdc3c7;
        position: relative;
        margin: 0 auto;
        bottom: 150px;
        animation-name: unlock-circle;
        animation-duration: 6s;
        animation-iteration-count: infinite;
    }

    .lock-circle-inside {
        height: 180px;
        width: 50px;
        border-radius: 30px;
        z-index: 20;
        background-color: white;
        position: relative;
        margin: 0 auto;
        top: 25px;
    }

    .lock-box {
        animation-name: unlock-box;
        animation-duration: 6s;
        animation-iteration-count: infinite;
        position: relative;
        height: 50px;
        width: 50px;
        background-color: white;
        bottom: 230px;
        left: 170px;
        z-index: 80;
    }

    .lock-inside-top {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        background-color: black;
        z-index: 300;
        position: relative;
        bottom: 45px;
        left: 75px;
    }

    .lock-inside-bottom {
        width: 30px;
        height: 80px;
        background-color: black;
        z-index: 300;
        position: relative;
        bottom: 85px;
        left: 85px;
    }
</style>

<script>
    export default {
        name: 'ob-heart'
    }
</script>

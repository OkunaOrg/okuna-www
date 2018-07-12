<template>
    <div id="world"></div>
</template>


<style lang="scss">


    #world {
        transform: translateZ(0);
        border-radius: 50%;

        position: relative;
        display: inline-block;
        overflow: hidden;

        width: 120px;
        height: 120px;

        background: #2f7db4;

        &:before {
            box-shadow: inset -30px 0 0 -10px rgba(0, 0, 0, .3);
            border-radius: 50%;

            content: " ";
            position: absolute;

            top: 0;
            left: 0;
            right: 0;
            bottom: 0;

            background: transparent;

            z-index: 50;
        }

        &:after {
            border-radius: 6px;

            animation: the-awesome-animation 14s linear 0s infinite;

            content: " ";
            position: absolute;

            top: 0px;
            left: 0px;

            width: 18px;
            height: 12px;

            background: none;
            z-index: 10;
        }
    }

    @keyframes the-awesome-animation {
        0% {
            box-shadow: (
                // Clouds
                -253px 16px 0 0 rgba(white, .8),
                -213px 41px 0 1px rgba(white, .8),
                -191px -1px 0 0 rgba(white, .8),
                -160px 59px 0 -2px rgba(white, .8),
                -226px 83px 0 3px rgba(white, .8),
                -109px 32px 0 0 rgba(white, .8),
                -90px 89px 0 1px rgba(white, .8),
                -160px 110px 0 -2px rgba(white, .8),
                -53px 16px 0 0 rgba(white, .8),
                -13px 41px 0 1px rgba(white, .8),
                9px -1px 0 0 rgba(white, .8),
                40px 59px 0 -2px rgba(white, .8),
                -26px 83px 0 3px rgba(white, .8),
                91px 32px 0 0 rgba(white, .8),
                110px 89px 0 1px rgba(white, .8),
                40px 110px 0 -2px rgba(white, .8),
                    // Land
                0 10px 0 3px #81c763,
                6px 10px 0 3px #81c763,
                3px 20px 0 -4px #81c763,
                3px 24px 0 -2px #81c763,
                9px 24px 0 -2px #81c763,
                -20px 50px 0 -2px #81c763,
                30px 78px 0 2px #81c763,
                74px 108px 0 -2px #81c763,
                60px 32px 0 -3px #81c763,
                85px 69px 0 0 #81c763,
                100px 0 0 0 #81c763,
                140px 42px 0 0 #81c763,
                143px 32px 0 -4px #81c763,
                220px 10px 0 3px #81c763,
                226px 10px 0 3px #81c763,
                223px 20px 0 -4px #81c763,
                223px 24px 0 -2px #81c763,
                229px 24px 0 -2px #81c763,
                200px 50px 0 -2px #81c763,
                250px 78px 0 2px #81c763,
                294px 108px 0 -2px #81c763,
                280px 32px 0 -3px #81c763,
                305px 69px 0 0 #81c763,
                300px 0 0 0 #81c763,
                360px 42px 0 0 #81c763,
                363px 32px 0 -4px #81c763
            );
        }

        100% {
            box-shadow: (
                // Clouds
                -53px 16px 0 0 rgba(white, .8),
                -13px 41px 0 1px rgba(white, .8),
                9px -1px 0 0 rgba(white, .8),
                40px 59px 0 -2px rgba(white, .8),
                -26px 83px 0 3px rgba(white, .8),
                91px 32px 0 0 rgba(white, .8),
                110px 89px 0 1px rgba(white, .8),
                40px 110px 0 -2px rgba(white, .8),
                147px 16px 0 0 rgba(white, .8),
                187px 41px 0 1px rgba(white, .8),
                209px -1px 0 0 rgba(white, .8),
                240px 59px 0 -2px rgba(white, .8),
                174px 83px 0 3px rgba(white, .8),
                291px 32px 0 0 rgba(white, .8),
                310px 89px 0 1px rgba(white, .8),
                240px 110px 0 -2px rgba(white, .8),
                    // Land
                -220px 10px 0 3px #81c763,
                -214px 10px 0 3px #81c763,
                -217px 20px 0 -4px #81c763,
                -217px 24px 0 -2px #81c763,
                -211px 24px 0 -2px #81c763,
                -240px 50px 0 -2px #81c763,
                -190px 78px 0 2px #81c763,
                -146px 108px 0 -2px #81c763,
                -160px 32px 0 -3px #81c763,
                -135px 69px 0 0 #81c763,
                -120px 0 0 0 #81c763,
                -80px 42px 0 0 #81c763,
                -77px 32px 0 -4px #81c763,
                0 10px 0 3px #81c763,
                6px 10px 0 3px #81c763,
                3px 20px 0 -4px #81c763,
                3px 24px 0 -2px #81c763,
                9px 24px 0 -2px #81c763,
                -20px 50px 0 -2px #81c763,
                30px 78px 0 2px #81c763,
                74px 108px 0 -2px #81c763,
                60px 32px 0 -3px #81c763,
                85px 69px 0 0 #81c763,
                100px 0 0 0 #81c763,
                140px 42px 0 0 #81c763,
                143px 32px 0 -4px #81c763
            );
        }
    }

    @keyframes intro-animation {
        0% {
            scale: 0;
        }

        100% {
            scale: 1;
        }
    }
</style>

<script>
    export default {
        name: 'ob-heart'
    }
</script>

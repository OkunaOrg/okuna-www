<template>
    <div class="ocean">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<style lang="scss">
    .ocean {
        height: 5%;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #690ddc;
    }

    $wave-height: 198px;
    .wave {
        background: url(assets/wave.svg) repeat-x;
        position: absolute;
        top: -$wave-height;
        width: 6400px;
        height: $wave-height;
        animation: wave 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
        top: -175px;
        animation: wave 12s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 12s ease -2.25s infinite;
        opacity: 1;
        transform: translate3d(0, 0, 0);

    }

    @keyframes wave {
        0% {
            margin-left: 0;
        }
        100% {
            margin-left: -1600px;
        }
    }

    @keyframes swell {
        0%, 100% {
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
    }
</style>

<script>
    export default{
        name: 'ob-ocean'
    }
</script>

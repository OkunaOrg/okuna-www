<template>
    <section class="hero is-fullheight fullpage-section" id="main">
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="hero-body animated fadeIn has-text-primary">
            <div class="container has-text-centered">
                <h1 class="title is-size-2 is-size-3-mobile">
                    Hello <span id="hello-subject">world.</span>
                </h1>
                <h2 class="subtitle">
                    We're <strong>Open</strong>book .
                </h2>
                <h3>
                    A <strong>new</strong>, <strong>open</strong> and <strong>secure</strong> social network coming soon
                    to
                    <a href="https://www.kickstarter.com"><strong>kickstarter</strong></a>.
                </h3>
            </div>
        </div>
        <div class="hero-footer has-text-centered">
            <div class="container">
                <ob-browser></ob-browser>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .ocean {
        height: 5%;
        width:100%;
        position:absolute;
        bottom:0;
        left:0;
        background: #690ddc;
    }

    $wave-height: 198px;
    .wave {
        background: url(./../../assets/wave.svg) repeat-x;
        position: absolute;
        top: -$wave-height;
        width: 6400px;
        height: $wave-height;
        animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) infinite;
        transform: translate3d(0, 0, 0);
    }

    .wave:nth-of-type(2) {
        top: -175px;
        animation: wave 7s cubic-bezier( 0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
        opacity: 1;
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
            transform: translate3d(0,-25px,0);
        }
        50% {
            transform: translate3d(0,5px,0);
        }
    }
</style>

<script>
    // @ is an alias to /src
    import obBrowser from './components/browser.vue'

    export default {
        components: {
            obBrowser
        }
    }
</script>

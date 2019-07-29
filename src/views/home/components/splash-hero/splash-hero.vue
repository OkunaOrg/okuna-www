<template>
    <section class="hero is-medium hero--splash" id="main">
        <div class="hero-body has-padding-bottom-1x-mobile">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div
                        class="column has-text-centered has-padding-top-2x-mobile has-background-white is-z-2 has-position-relative">
                        <div class="columns is-centered is-mobile">
                            <div class="column content" style="max-width: 450px">
                                <h1 class="is-size-3-mobile is-size-1" style="font-weight: normal !important;">
                                    <strong>Open</strong>book is now <strong class="has-text-logo">Okuna</strong>.
                                </h1>
                                <h2>Why?</h2>
                                <p>
                                    <a href="https://euipo.europa.eu/eSearch/#details/trademarks/018075708" rel="noopener noreferrer" class="has-text-underlined" target="_blank">Because as it turns out, Facebook owns the word Book.</a>
                                </p>
                                <div class="has-padding-2x">
                                    <a href="https://www.okuna.io" rel="noopener noreferrer" class="button is-rainbow is-rounded">
                                        <span class="icon">
                                            <i class="fas fa-link"></i>
                                        </span>
                                        <span>Go to okuna.io</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
    .hero--splash {
        position: relative;
    }

    .splash-text {
        margin-top: 1rem;
    }

    .splash-browser {
        margin-top: 1rem;
        @media(max-width: 770px) {
            max-height: 45vh;
        }
    }

    .typewriter-cursor {
        font-weight: 400;
        color: #333;
    }

    .front-mockup {
        width: 125%;
        top: -12%;
        left: -3%;
    }

    .back-mockup {
        left: -10%;
    }

</style>


<script>

    require('./scripts/typewriter.exec.js');
    import blackMockupImage from './assets/black-min.png';
    import whiteMockupImage from './assets/white-min.png';

    export default {
        name: 'ob-splash-hero',
        mounted() {
            //this.initHello();
        },
        destroyed() {
            //this.typewriter.stop();
        },
        data() {
            return {
                blackMockupImage,
                whiteMockupImage
            }
        },
        methods: {
            startRedirect() {
                // This library should have been added in main.js

            }
        }
    }
</script>

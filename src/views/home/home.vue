<template>
    <section class="hero is-fullheight fullpage-section" id="main">
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="columns is-centered is-vcentered">
                    <div class="column has-text-centered">
                        <div class="columns is-centered">
                            <div class="column" style="max-width: 520px">
                                <h1 class="title is-size-2">
                                    Hello <span id="hello-subject">world!</span>
                                </h1>
                                <h2 class="subtitle is-size-4">
                                    We're <strong>Open</strong>book.
                                </h2>
                                <h3 class="is-size-5">
                                    The open source, zero ads, zero
                                    tracking,
                                    social network that respects for your privacy, coming soon to Kickstarter.
                                </h3>
                            </div>
                        </div>
                        <div class="columns is-centered">
                            <div class="column is-narrow">
                                <button class="button is-primary is-outlined is-rounded">
                                    <span class="icon">
                                        <i class="fas fa-share-alt"></i>
                                    </span>
                                    <span>
                                        Share
                                    </span>
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary is-rounded">
                                    <span class="icon">
                                        <i class="fas fa-heart"></i>
                                    </span>
                                    <span>
                                        Join the waitlist
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <ob-browser></ob-browser>
                    </div>
                </div>
            </div>
        </div>
    </section>
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
        background: url(./../../assets/wave.svg) repeat-x;
        position: absolute;
        top: -$wave-height;
        width: 6400px;
        height: $wave-height;
        animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
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
            transform: translate3d(0, -25px, 0);
        }
        50% {
            transform: translate3d(0, 5px, 0);
        }
    }
</style>

<script>

    require('./scripts/typewriter.exec.js');

    import obBrowser from './components/browser.vue'

    export default {
        components: {
            obBrowser
        },
        mounted() {
            this.initHello();
        },
        destroyed() {
            this.typewriter.stop();
        },
        methods: {
            initHello() {
                // This library should have been added in main.js
                const Typewriter = window['Typewriter'];

                const helloSubjects = [
                    'world',
                    'friends',
                    'family',
                    'grandma'
                ];

                const helloSubject = document.querySelector('#hello-subject');

                const typewriter = this.typewriter = new Typewriter(helloSubject, {
                    loop: true
                });

                helloSubjects.forEach((helloSubject) => {
                    const helloSubjectText = `${helloSubject}!`;
                    typewriter.typeString(helloSubjectText)
                        .pauseFor(2500)
                        .deleteAll();
                });

                typewriter.start();

            }
        }
    }
</script>

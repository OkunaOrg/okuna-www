<template>
    <div>
        <section class="hero is-fullheight hero--home" id="main">
            <div class="ocean">
                <div class="wave"></div>
                <div class="wave"></div>
            </div>
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns is-centered is-vcentered">
                        <div class="column has-text-centered home-splash-text">
                            <div class="columns is-centered is-mobile">
                                <div class="column" style="max-width: 520px">
                                    <h1 class="title is-size-3-mobile is-size-2">
                                        Hello <span id="hello-subject">world!</span>
                                    </h1>
                                    <h2 class="subtitle is-size-5-mobile is-size-4">
                                        We're <strong>Open</strong>book.
                                    </h2>
                                    <h3 class="is-size-6-mobile">
                                        An open source, zero ads, zero
                                        tracking, beautifully designed,
                                        social network that respects for your privacy.
                                    </h3>
                                    <h5>
                                        <strong>Coming soon to <span
                                            style="color: #034752;">Kickstarter.</span></strong>
                                    </h5>
                                </div>
                            </div>
                            <div class="columns is-centered is-mobile">
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
                        <div class="column home-splash-browser">
                            <ob-browser></ob-browser>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <h3 class="is-size-3 padding-bottom-2x">
                        Why Openbook?
                    </h3>
                    <p>
                        Some of the key things that set us apart from other social networks.
                    </p>
                </div>
                <div class="columns">
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-1">
                                <i class="fas fa-eye-slash"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Privacy
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    We will never track you, inside or outside of the network.
                                </p>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary is-rounded">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-1">
                                <i class="far fa-handshake"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Honesty
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    The code of the network will be will be free and open for everyone to see, reproduce and contribute to. <br/>
                                </p>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary is-rounded">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                            <div class="is-size-1">
                                <i class="fas fa-exchange-alt"></i>
                            </div>
                            <div class="column content is-12">
                                <h4 class="is-size-4">
                                    Seamless migration
                                </h4>
                                <p class="is-size-5 has-text-centered home-why-content">
                                    We will provide tools to migrate all of your existing data to our network.
                                </p>
                            </div>
                            <div class="column is-narrow">
                                <button class="button is-primary is-rounded">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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

    .hero--home {
        position: relative;
    }

    .home-splash-text {
        margin-top: 1rem;
    }

    .home-splash-browser {
        margin-top: 1rem;
        @media(max-width: 770px) {
            max-height: 30vh;
        }
    }

    .home-why-container{
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 3rem;
    }

    .home-why{
        max-width: 400px;
    }

    .home-why-content{
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(min-width: 770px){
            min-height: 8rem;
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

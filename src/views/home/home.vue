<template>
    <div>
        <section class="hero is-fullheight hero--home" id="main">
            <ob-ocean></ob-ocean>
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
                <ob-why-openbook></ob-why-openbook>
            </div>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to know more?
                            </h3>
                        </div>
                        <div class="column">
                            <a href="#" class="button is-white is-outlined is-rounded is-medium">
                                Read our manifesto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <ob-count-down></ob-count-down>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <a href="#" class="button is-white is-outlined is-rounded is-medium">
                                Meet the team
                            </a>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-mobile">
                                <div class="column is-narrow">
                                    <div class="home-team">
                                        <figure class="image is-64x64 home-team-figure">
                                            <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-3.jpg" alt="Image">
                                        </figure>
                                        <figure class="image is-64x64 home-team-figure">
                                            <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-3.jpg" alt="Image">
                                        </figure>
                                        <figure class="image is-64x64 home-team-figure">
                                            <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-3.jpg" alt="Image">
                                        </figure>
                                        <figure class="image is-64x64 home-team-figure">
                                            <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-3.jpg" alt="Image">
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-3 padding-bottom-3x">
                        What are others saying?
                    </p>
                </div>
                <ob-quotes></ob-quotes>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

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

    .home-team{
        display: flex;
        position: relative;
        &-figure{
            margin-right: -20px;
        }
    }
</style>

<script>

    import ObCountDown from "./components/count-down/count-down.vue";

    require('./scripts/typewriter.exec.js');

    import obBrowser from './components/browser.vue'
    import ObQuotes from "./components/quotes";
    import ObWhyOpenbook from "./components/why-openbook";
    import ObOcean from "./components/ocean/ocean";

    export default {
        components: {
            ObOcean,
            ObWhyOpenbook,
            ObQuotes,
            ObCountDown,
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

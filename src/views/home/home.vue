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
                <div class="content has-text-centered padding-bottom-3x">
                    <p class="is-size-3">
                        Why Openbook?
                    </p>
                    <p>
                        Some of the key things that set us apart from other social networks.
                    </p>
                </div>
                <div class="columns">
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--privacy">
                                <i class="fas fa-eye-slash"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Respect for your privacy
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    We will never track you, inside or outside of the network.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--honesty">
                                <i class="far fa-handshake"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Honest
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    No tricks, the code of the network will be will be free and open for everyone to see, reproduce and contribute to. <br/>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--migration">
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
                        </div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--secure">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Secure
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    Third party applications that wish to access your data will have to meet our strict security policy.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--future">
                                <i class="fas fa-hourglass-start"></i>
                            </div>
                            <div class="column content is-12 has-text-centered">
                                <h4 class="is-size-4">
                                    Future-proof
                                </h4>
                                <p class="is-size-5 home-why-content">
                                    With a solid business plan based on peer-to-peer transactions, we are in for the long game.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="column home-why-container">
                        <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                            <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                                <i class="far fa-star"></i>
                            </div>
                            <div class="column content is-12">
                                <h4 class="is-size-4">
                                    Modern & beautiful
                                </h4>
                                <p class="is-size-5 has-text-centered home-why-content">
                                    Built on the latest technologies and designed with simplicity in mind, you won't find anything like it elsewhere.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

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
                <div class="columns">
                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-1.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>John Smith</strong>
                                            <br>
                                            <small> Founder of KPN</small>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-2.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>John Smith</strong>
                                            <br>
                                            <small> Founder of KPN</small>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div class="column">
                        <div class="box">
                            <article class="media">
                                <div class="media-left">
                                    <figure class="image is-64x64">
                                        <img class="is-rounded" src="https://preview.webpixels.io/boomerang-v3.6/assets/images/prv/people/person-3.jpg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <div class="content">
                                        <p>
                                            <strong>John Smith</strong>
                                            <br>
                                            <small> Founder of KPN</small>
                                            <br>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                        </p>
                                    </div>
                                </div>
                            </article>
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

    .home-why-container {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 3rem;
    }

    .home-why {
        max-width: 400px;
    }

    $home-why-icon-size: 5rem;

    .home-why-icon{
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: $home-why-icon-size;
        width: $home-why-icon-size;
        border-radius: 50%;
        background: #690ddc;
        color: white;



    }

    .home-why-content {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(min-width: 770px) {
            min-height: 8rem;
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

    export default {
        components: {
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

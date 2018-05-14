<template>
    <div>
        <ob-splash-hero></ob-splash-hero>
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
    import obBrowser from './components/splash-hero/components/browser.vue'
    import ObQuotes from "./components/quotes";
    import ObWhyOpenbook from "./components/why-openbook";
    import ObOcean from "./components/splash-hero/components/ocean/ocean";
    import ObSplashHero from "./components/splash-hero/splash-hero";

    export default {
        components: {
            ObSplashHero,
            ObOcean,
            ObWhyOpenbook,
            ObQuotes,
            ObCountDown,
            obBrowser
        }
    }
</script>

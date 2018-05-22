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
        <ob-meet-the-team></ob-meet-the-team>
<!--        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-3 padding-bottom-3x">
                        What are others saying?
                    </p>
                </div>
                <ob-quotes></ob-quotes>
            </div>
        </section>-->
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-5 padding-bottom-3x has-text-grey-light">
                        As featured in
                    </p>
                </div>
                <ob-featured-on></ob-featured-on>
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
    import ObFeaturedOn from "./components/featured-in/featured-in";
    import ObMeetTheTeam from "./components/meet-the-team/meet-the-team.vue";

    export default {
        components: {
            ObMeetTheTeam,
            ObFeaturedOn,
            ObSplashHero,
            ObOcean,
            ObWhyOpenbook,
            ObQuotes,
            ObCountDown,
            obBrowser
        }
    }
</script>

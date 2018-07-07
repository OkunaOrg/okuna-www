<template>
    <div class="animated fadeIn">
        <ob-splash-hero></ob-splash-hero>
        <ob-honesty></ob-honesty>
        <ob-privacy></ob-privacy>
        <ob-secure></ob-secure>
        <ob-easy></ob-easy>
        <ob-personal></ob-personal>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to know more?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="manifesto" class="button is-rainbow is-rounded is-medium">
                                Read our manifesto
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">

        </section>
        <ob-meet-the-team></ob-meet-the-team>
        <section class="section">
            <div class="container">
                <ob-quotes></ob-quotes>
            </div>
        </section>
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
    import ObQuotes from "./components/quotes/quotes";
    import ObWhyOpenbook from "./components/why-openbook";
    import ObOcean from "./components/splash-hero/components/ocean/ocean";
    import ObSplashHero from "./components/splash-hero/splash-hero";
    import ObFeaturedOn from "./components/featured-in/featured-in";
    import ObMeetTheTeam from "./components/meet-the-team/meet-the-team.vue";
    import ObHonesty from "./components/honesty/honesty.vue";
    import ObPersonal from "./components/personal/personal.vue";
    import ObPrivacy from "./components/privacy/privacy.vue";
    import ObSecure from "./components/secure/secure.vue";
    import ObEasy from "./components/easy/easy.vue";

    export default {
        components: {
            ObEasy,
            ObSecure,
            ObPrivacy,
            ObPersonal,
            ObHonesty,
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

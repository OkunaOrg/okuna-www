<template>
    <div class="animated fadeIn">
        <ob-splash-hero></ob-splash-hero>
        <ob-privacy></ob-privacy>
        <ob-personal></ob-personal>
        <ob-honesty></ob-honesty>
        <ob-secure></ob-secure>
        <ob-easy></ob-easy>
        <ob-ads-free></ob-ads-free>
        <ob-currency></ob-currency>
        <ob-good-for-planet></ob-good-for-planet>
        <ob-community></ob-community>
        <ob-signup id="beta-signup"></ob-signup>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                {{ $t('home.want_to_know_more') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="manifesto" class="button is-rainbow is-rounded is-medium">
                                {{ $t('home.read_manifesto') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <ob-quotes></ob-quotes>
            </div>
        </section>
        <ob-meet-the-team></ob-meet-the-team>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-5 padding-bottom-3x has-text-grey-light">
                        {{ $t('home.featured_in') }}
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

    import ObQuotes from "./components/quotes/quotes";
    import ObSplashHero from "./components/splash-hero/splash-hero";
    import ObFeaturedOn from "./components/featured-in/featured-in";
    import ObMeetTheTeam from "./components/meet-the-team/meet-the-team.vue";
    import ObHonesty from "./components/honesty/honesty.vue";
    import ObPersonal from "./components/personal/personal.vue";
    import ObPrivacy from "./components/privacy/privacy.vue";
    import ObSecure from "./components/secure/secure.vue";
    import ObEasy from "./components/easy/easy.vue";
    import ObFun from "./components/fun/fun";
    import ObGoodForPlanet from "./components/good-for-planet/good-for-planet";
    import ObAdsFree from "./components/ads-free/ads-free";
    import ObCurrency from "./components/currency/currency.vue";
    import ObSubscribe from "./components/subscribe/subscribe";
    import ObSignup from "./components/beta-signup/beta-signup";
    import ObCommunity from "./components/community/community";

    export default {
        components: {
            ObCommunity,
            ObSignup,
            ObSubscribe,
            ObCurrency,
            ObAdsFree,
            ObGoodForPlanet,
            ObFun,
            ObEasy,
            ObSecure,
            ObPrivacy,
            ObPersonal,
            ObHonesty,
            ObMeetTheTeam,
            ObFeaturedOn,
            ObSplashHero,
            ObQuotes,
        }
    }
</script>

<template>
    <div class="animated fadeIn">
        <ob-splash-hero></ob-splash-hero>
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
    import ObSubscribe from "./components/subscribe/subscribe";
    import ObSignup from "./components/beta-signup/beta-signup";
    import ObCommunity from "./components/community/community";

    export default {
        components: {
            ObCommunity,
            ObSignup,
            ObSubscribe,
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

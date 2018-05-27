<template>
    <div id="app">
        <ob-mobile-menu></ob-mobile-menu>
        <ob-header></ob-header>
        <router-view/>
        <ob-footer></ob-footer>
        <ob-scroll-hud></ob-scroll-hud>
    </div>
</template>

<style lang="scss">

</style>

<script>

    import obFooter from './components/footer/footer.vue';
    import obHeader from './components/header/header.vue';
    import obMobileMenu from './components/mobile-menu.vue';
    import ObScrollHud from "./components/scroll-hud/scroll-hud.vue";
    import ObSocialShare from "./components/social-share/social-share.vue";
    export default {
        components: {
            ObSocialShare,
            ObScrollHud,
            obMobileMenu,
            obFooter,
            obHeader
        }
    }
</script>

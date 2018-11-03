<template>
    <div id="app" v-bind:class="{'is-android': isAndroid}">
        <ob-mobile-menu></ob-mobile-menu>
        <ob-header></ob-header>
        <router-view/>
        <ob-footer></ob-footer>
        <ob-scroll-hud></ob-scroll-hud>
    </div>
</template>

<style lang="scss">
 #app{
     overflow: hidden;
 }
</style>

<script>
    import obFooter from './components/footer/footer.vue';
    import obHeader from './components/header/header.vue';
    import obMobileMenu from './components/mobile-menu.vue';
    import ObScrollHud from "./components/scroll-hud/scroll-hud.vue";

    export default {
        data() {
            return {
                isAndroid: false
            }
        },
        mounted() {
            if (navigator.userAgent.match(/Android/i)) {
                this.isAndroid = true;
            }
        },
        components: {
            ObScrollHud,
            obMobileMenu,
            obFooter,
            obHeader
        }
    }
</script>

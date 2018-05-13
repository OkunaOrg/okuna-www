<template>
    <div id="app">
        <ob-mobile-menu></ob-mobile-menu>
        <ob-header></ob-header>
        <router-view/>
        <ob-footer></ob-footer>
    </div>
</template>

<style lang="scss">

</style>

<script>

    import obFooter from './components/footer/footer.vue';
    import obHeader from './components/header/header.vue';
    import obMobileMenu from './components/mobile-menu.vue';
    export default {
        components: {
            obMobileMenu,
            obFooter,
            obHeader
        }
    }
</script>

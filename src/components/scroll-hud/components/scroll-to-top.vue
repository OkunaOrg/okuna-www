<template>
    <button class="button is-rainbow scroll-to-top animated fadeInUp is-rounded" v-scroll-to="'#app'">
        <span class="icon">
            <i class="fas fa-arrow-up"></i>
        </span>
    </button>
</template>

<style lang="scss">

    $button-size: 45px;

    .scroll-to-top {
        border: solid 1px white !important;
        position: absolute !important;
        bottom: 0;
        right: 0;
        height: $button-size !important;
        width: $button-size !important;
        margin: 1rem;
    }
</style>

<script>
    export default {
        name: 'ob-scroll-to-top'
    }
</script>

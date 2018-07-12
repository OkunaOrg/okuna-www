<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-heart></ob-heart>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-centered">
                        <div class="column is-narrow content is-medium good-for-planet-text">
                            <h3>{{ $t('good_for_planet.title') }}</h3>
                            <p v-html="$t('good_for_planet.description')">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .good-for-planet-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-good-for-planet'
    }
</script>


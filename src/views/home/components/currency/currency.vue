<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="columns is-vcentered is-centered is-mobile">
                        <div class="column content is-medium currency-text">
                            <h3>{{ $t('currency.title') }}</h3>
                            <p v-html="$t('currency.description')">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column has-padding-bottom-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-coin></ob-coin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .currency-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

</style>

<script>

    import ObCoin from "./components/coin.vue";

    export default {
        components: {ObCoin},
        name: 'ob-currency'
    }
</script>


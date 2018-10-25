<template>
    <section class="section">
        <div class="container">
            <div class="columns has-reverse-row-order-mobile">
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-sunglasses></ob-sunglasses>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-centered">
                        <div class="column is-narrow content is-medium ads-free-text">
                            <h3>{{ $t('ads_free.title') }}</h3>
                            <p>
                                {{ $t('ads_free.description') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .ads-free-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

</style>

<script>
    import ObSunglasses from "./components/sunglasses";

    export default {
        components: {ObSunglasses},
        name: 'ob-ads-free'
    }
</script>


<template>
    <section class="section">
        <div class="container">
            <div class="columns">
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
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-heart></ob-heart>
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

    .ads-free-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-ads-free'
    }
</script>


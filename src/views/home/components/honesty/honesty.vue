<template>
    <section class="section">
        <div class="container">
            <div class="columns is-height-100">
                <div class="column">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column content is-medium honesty-text">
                            <h3>{{ $t('honesty.title') }} </h3>
                            <p>
                                {{ $t('honesty.description') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile has-padding-top-2x-mobile">
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

    .honesty-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .honesty-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-honesty'
    }
</script>


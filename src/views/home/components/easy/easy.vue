<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="columns is-vcentered is-centered is-height-100">
                        <div class="column is-narrow content is-medium easy-text">
                            <h3>{{ $t('easy.title') }}</h3>
                            <p>
                                {{ $t('easy.description') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-dancing-cactus></ob-dancing-cactus>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .easy-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .easy-heart {

    }
</style>

<script>

    import ObDancingCactus from "./components/dancing-cactus.vue";

    export default {
        components: {
            ObDancingCactus
        },
        name: 'ob-easy'
    }
</script>


<template>
    <section class="section">
        <div class="container">
            <div class="columns is-height-100">
                <div class="column">
                    <div class="columns is-vcentered is-centered">
                        <div class="column is-narrow content is-medium privacy-text">
                            <h3>{{ $t('home:privacy.title') }}</h3>
                            <p v-html="$t('home:privacy.description')">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-ghost></ob-ghost>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .privacy-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .privacy-ghost {

    }
</style>

<script>
    import ObGhost from "./components/ghost";

    export default {
        components: {ObGhost},
        name: 'ob-privacy'
    }
</script>


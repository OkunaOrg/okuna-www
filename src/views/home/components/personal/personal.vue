<template>
    <section class="section">
        <div class="container">
            <div class="columns is-mobile is-multiline">
                <div class="content is-medium column is-12 padding-bottom-3x">
                    <div class="columns">
                        <div class="column is-6">
                            <div class="columns is-centered">
                                <div class="column is-narrow personal-text">
                                    <h3 class="has-text-shadow">{{ $t('personal.title') }}</h3>
                                    <p>
                                        {{ $t('personal.description') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-12">
                    <ob-customization-screenshots></ob-customization-screenshots>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .personal-section {
        //padding: 5rem;
    }

    .personal-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .personal-heart {

    }
</style>

<script>

    import ObCustomizationScreenshots from "./components/customization-screenshots/customization-screenshots.vue";

    export default {
        components: {ObCustomizationScreenshots},
        name: 'ob-personal'
    }
</script>


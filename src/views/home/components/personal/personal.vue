<template>
    <section class="section">
        <div class="container">
            <div class="columns has-reverse-row-order-mobile">
                <div class="column is-6">
                    <div class="column padding-top-2x-mobile">
                        <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                            <div class="column is-10">
                                <ob-personal-preview></ob-personal-preview>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-6">
                    <div class="columns is-centered is-vcentered is-height-100">
                        <div class="column is-narrow personal-text content is-medium">
                            <h3 class="has-text-shadow">{{ $t('home:personal.title') }}</h3>
                            <p v-html="$t('home:personal.description')">
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .personal-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }
</style>

<script>

    import obPersonalPreview from './components/personal-preview';

    export default {
        components: {
            obPersonalPreview
        },
        name: 'ob-personal'
    }
</script>


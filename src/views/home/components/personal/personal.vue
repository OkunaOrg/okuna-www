<template>
    <section class="section">
        <div class="container">
            <div class="columns is-mobile is-multiline">
                <div class="content is-medium column is-12 padding-bottom-3x">
                    <div class="columns">
                        <div class="column is-6">
                            <div class="column padding-top-4x-mobile">
                                <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                                    <div class="column is-10">
                                        <ob-personal-preview></ob-personal-preview>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            <div class="columns is-centered is-vcentered is-height-100">
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


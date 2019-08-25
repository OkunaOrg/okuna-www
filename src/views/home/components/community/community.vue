<template>
    <section class="section">
        <div class="container">
            <div class="columns is-height-100">
                <div class="column">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column content is-medium community-text">
                            <h3>{{ $t('home:community.title') }} </h3>
                            <p v-html="$t('home:community.description')">
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile has-padding-top-2x-mobile">
                        <div class="column is-narrow">
                            <ob-people></ob-people>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .community-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .community-people {

    }
</style>

<script>
    import ObPeople from "./components/people";

    export default {
        components: {ObPeople},
        name: 'ob-community'
    }
</script>


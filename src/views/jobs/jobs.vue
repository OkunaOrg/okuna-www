<template>
    <div class="animated fadeIn">
        <section class="hero is-medium hero--jobs has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column padding-top-2x-mobile">
                            <div class="columns is-centered is-vcentered is-mobile" style="height: 100%;">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        {{ $t('jobs.title') }}
                                    </h1>
                                    <h2 class="title is-size-2 trust-text has-text-centered-mobile">
                                        {{ $t('jobs.subtitle') }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered is-mobile">
                                <div class="column is-narrow">
                                    <ob-desk/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        {{ $t('jobs.exciting_adventure') }}
                    </h4>
                    <p>
                        {{ $t('jobs.all_skills') }}
                    </p>
                    <p v-html="$t('jobs.need_your_help')">
                    </p>
                    <p v-html="$t('jobs.send_cv')">
                    </p>
                    <p>
                        {{ $t('jobs.look_forward') }}
                    </p>
                </div>
            </div>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                {{ $t('jobs.colleagues') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="about-us" class="button is-white is-outlined is-rounded is-medium">{{ $t('jobs.meet_the_team') }} </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .hero--jobs{
        position: relative;
        display: flex;
    }
</style>

<script>
    import ObDesk from "./components/desk.vue";

    export default {
        components: {
            ObDesk
        }
    }
</script>

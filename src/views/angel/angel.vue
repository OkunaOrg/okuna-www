<template>
    <div class="animated fadeIn">
        <section class="hero is-large has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-centered padding-top-2x-mobile">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        {{ $t('angel:angel.title') }}
                                    </h1>
                                    <h2 class="title is-size-2 angel-text has-text-centered-mobile">
                                        {{ $t('angel:angel.subtitle') }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow padding-top-2x-mobile">
                                    <ob-halo/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div>
                <div class="columns is-centered">
                    <div class="column intro-text content">
                        <h3 class="is-size-4 small-container padding-bottom-1x"
                            v-html="$t('angel:angel.description_title')">
                        </h3>
                    </div>
                </div>
                <div class="columns">
                    <div class="column intro-text content small-container is-paddingless">
                        <p class="is-size-5 small-container">
                            {{ $t('angel:angel.description') }}
                        </p>
                        <p class="is-size-5 small-container" v-html="$t('angel:angel.description2')">
                        </p>
                        <p class="is-size-5 small-container" v-html="$t('angel:angel.description3')">
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <ob-meet-the-team></ob-meet-the-team>
    </div>
</template>

<style lang="scss">
    .angel-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

</style>

<script>
    import ObHalo from "./components/halo";
    import ObMeetTheTeam from "../home/components/meet-the-team/meet-the-team";

    export default {
        components: {
            ObMeetTheTeam,
            ObHalo
        },
        name: 'ob-angel',
        methods: {
            openShareModal() {
                this.$modal.open({
                    component: ObSocialSharerModal
                })
            }
        }
    }
</script>

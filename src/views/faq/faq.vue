<template>
    <div class="animated fadeIn">
        <section class="hero is-large has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns">
                        <div class="column">
                            <div class="columns is-centered padding-top-2x-mobile">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        {{ $t('faq.title') }}
                                    </h1>
                                    <h2 class="title is-size-2 faq-text has-text-centered-mobile">
                                        {{ $t('faq.subtitle') }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow padding-top-2x-mobile">
                                    <ob-pets/>
                                    <div class="has-text-centered is-size-7">
                                        {{ $t('faq.office_dog') }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small"> {{ $t('faq.jump_to') }} </h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#whospaying" v-scroll-to="'#whospaying'">
                                {{ $t('faq.whos_paying') }}
                            </a>
                        </li>
                        <li>
                            <a href="#willitbedistributed" v-scroll-to="'#willitbedistributed'">
                                {{ $t('faq.is_distributed') }}
                            </a>
                        </li>
                        <li>
                            <a href="#help" v-scroll-to="'#help'">
                                {{ $t('faq.want_to_help') }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" id="faq">
            <div class="small-container">
                <div class="content is-medium">
                    <h3 id="whospaying">
                        {{ $t('faq.whos_paying') }}
                    </h3>
                    <p>
                        {{ $t('faq.whos_paying_ans') }}
                    </p>
                    <h3 id="willitbedistributed">
                        {{ $t('faq.why_not_decentralised') }}
                    </h3>
                    <p v-html="$t('faq.why_not_decentralised_ans')"></p>
                    <h3 id="help">
                        {{ $t('faq.want_to_help') }}
                    </h3>
                    <p>
                        {{ $t('faq.want_to_help_ans') }}
                    </p>
                    <p>
                        {{ $t('faq.many_ways') }}
                    </p>
                    <p>
                        {{ $t('faq.ideas') }}
                    </p>
                    <ul>
                        <li class="has-text-underlined">
                            <a href="https://www.patreon.com/openbooksocial" rel="noopener noreferrer" target="_blank"> Become our monthly patron!</a>
                        </li>
                        <li class="has-text-underlined">
                            <a href="https://www.indiegogo.com/projects/openbook-it-s-time-for-a-better-social-network#/" rel="noopener noreferrer" target="_blank"> {{ $t('faq.donate') }} </a>
                        </li>
                        <li class="has-text-underlined">
                            <a href="" @click.prevent="onUserWantsToShare"> {{ $t('faq.share_website') }} </a>
                        </li>
                        <li>
                            {{ $t('faq.talk_to_friends') }}
                        </li>
                        <li v-html="$t('faq.improve_website')">
                        </li>
                        <li v-html="$t('faq.let_us_know')">
                        </li>
                        <li>
                            {{ $t('faq.public_figure') }}
                            <router-link to="contact-us"> {{ $t('faq.contact_us') }} </router-link>
                            .
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                {{ $t('faq.more_questions') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="contact-us" class="button is-rainbow is-rounded is-medium">
                                {{ $t('faq.send_us_message') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .faq-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

</style>

<script>
    import ObPets from "./components/pets";
    import ObSocialSharerModal from "../../components/scroll-hud/components/social-sharer/components/social-sharer-modal.vue";

    export default {
        components: {
            ObPets},
        name: 'ob-faq',
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
               this.$modal.open({
                    component: ObSocialSharerModal
                })
            }
        }
    }
</script>

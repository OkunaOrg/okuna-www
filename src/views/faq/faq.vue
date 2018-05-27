<template>
    <div class="animated fadeIn">
        <section class="hero is-large has-border-bottom-gray">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns">
                        <div class="column">
                            <div class="columns is-centered padding-top-1x-mobile">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        FAQ
                                    </h1>
                                    <h2 class="title is-size-2 faq-text has-text-centered-mobile">
                                        The frequently asked questions.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow padding-top-1x-mobile">
                                    <ob-pets/>
                                    <div class="has-text-centered is-size-7">
                                        Our office dog hard at work.
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
                        <h2 class="title is-3 is-spaced is-margin-top-small">Table of contents</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#whospaying" v-scroll-to="'#whospaying'">
                                Who's paying for everything so far?
                            </a>
                        </li>
                        <li>
                            <a href="#willitbedistributed" v-scroll-to="'#willitbedistributed'">
                                Will it be distributed like diaspora, mastodon, etc?
                            </a>
                        </li>
                        <li>
                            <a href="#help" v-scroll-to="'#help'">
                                I want to help right now, what can I do?
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
                        Who's paying for everything so far?
                    </h3>
                    <p>
                        <strong>We are</strong>. We are completely self funded and we would like to keep it that way.
                    </p>
                    <p>
                        This is the reason why we are going with Kickstarter. We hope the campaign provides us with the necessary funds to sustain the company until it can stand on it's own.
                    </p>
                    <h3 id="willitbedistributed">
                        Will it be distributed like diaspora, mastodon, etc?
                    </h3>
                    <p>
                        <strong>TLDR; No, but your data will be fully portable to other Openbook instances.</strong>
                    </p>
                    <p>
                        We want to give our users absolute control of their data. We want them to be able to see the exact physical location of their data and to be able to ensure its deletion, even when shared with third party applications.
                    </p>
                    <p>
                        Protocols for interconnection between social networks such as ActivityPub rely on independently distributed networks to accomplish this.
                    </p>
                    <p>
                        These networks, being independently distributed, make these items impossible to guarantee.
                    </p>
                    <p>
                        However, if your concern is data portability, all of your data will downloadable and fully portable to other Openbook instances.
                    </p>
                    <p>
                    </p>
                    <p class="is-size-7">
                        <span>Don't get us wrong though, we have nothing against these networks, in fact, we are amazed by their ingenuity.</span>
                    </p>
                    <h3 id="help">
                        I want to help right now, what can I do?
                    </h3>
                    <p>
                        We're happy and grateful you want to help out!
                    </p>
                    <p>
                        There's many ways you can help right now.
                    </p>
                    <p>
                        Here's some ideas:
                    </p>
                    <ul>
                        <li>
                            <a href="" @click.prevent="onUserWantsToShare">Share the website on social media</a>
                        </li>
                        <li>
                            Talk to your friends and family about us
                        </li>
                        <li>
                            If you're a developer, you can help us <a
                            href="https://github.com/OpenBookOrg/openbook-org-www"
                            target="_blank">improve our website</a>.
                        </li>
                        <li>
                            If you have an idea for the network, you can <a href="https://github.com/OpenBookOrg/ideas"
                                                                            target="_blank">let us know</a>.
                        </li>
                        <li>
                            If you're a public figure and would like to become an ambassador,
                            <router-link to="contact-us">contact us</router-link>
                            .
                        </li>
                        <li>
                            If you're looking for a job and believe Openbook would be a great fit for you,
                            <router-link to="jobs">visit our jobs page</router-link>
                            .
                        </li>
                    </ul>
                    <p>
                        And lastly, if you would like to be even more involved, we're forming a network of volunteers across the world to help us spread the word.
                        <br/>
                        Interested?
                        <router-link to="contact-us">Contact us</router-link>
                        .
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
                                Have another question?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="contact-us" class="button is-white is-outlined is-rounded is-medium">
                                Send us a message
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
    import ObSocialShare from "@/components/social-share/social-share";
    import ObPets from "./components/pets";

    export default {
        components: {ObPets},
        name: 'ob-faq',
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$modal.open({
                    component: ObSocialShare
                })
            }
        }
    }
</script>

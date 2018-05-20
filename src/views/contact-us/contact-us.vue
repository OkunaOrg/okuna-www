<template>
    <div>
        <section class="hero is-large has-border-bottom-gray">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns">
                        <div class="column">
                            <div class="columns is-centered contact-us-header-text">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        Contact us
                                    </h1>
                                    <h2 class="title is-size-2 trust-text has-text-centered-mobile">
                                        We want to hear from you.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow">
                                    <ob-mailbox/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns contact">
                    <div class="column is-4-tablet">
                        <div class="columns is-centered is-mobile">
                            <div class="column contact-information">
                                <div class="content">
                                    <h4>Contact information</h4>
                                    <ob-address/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="columns is-centered is-mobile">
                            <div class="column contact-message padding-bottom-2x-mobile">
                                <div class="content">
                                    <h4 class="padding-bottom-2x">
                                        Send us a message
                                    </h4>
                                    <ob-message/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

    .contact-us-header-text {
        @media(max-width: 768px) {
            padding-top: 1rem;
        }
    }

    .contact-us-header-envelope {
        @media(max-width: 768px) {
            padding-top: 1rem;
        }
    }

    .contact {
        @media(max-width: 768px) {
            display: flex;
            flex-direction: column-reverse;
        }
    }

    .contact-information {
        max-width: 250px;
    }

    .contact-message {
        max-width: 750px;
    }

</style>

<script>
    import ObMailbox from "./components/mailbox";
    import ObAddress from "./components/address";
    import ObMessage from "./components/message";

    export default {
        components: {
            ObMessage,
            ObAddress,
            ObMailbox
        }

    }
</script>

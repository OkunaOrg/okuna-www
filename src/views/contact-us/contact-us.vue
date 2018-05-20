<template>
    <section class="hero is-large">
        <div class="hero-body">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column">
                        <div class="columns is-centered">
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
                        <div class="columns is-centered is-vcentered">
                            <div class="column is-narrow">
                                <ob-mailbox/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    import ObMailbox from "./components/mailbox";

    export default{
        components: {ObMailbox}

    }
</script>

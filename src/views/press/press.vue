<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-centered contact-us-header-text">
                                <div class="column is-narrow">
                                    <h2 class="title is-size-2 contact-text has-text-centered-mobile">
                                        We <3 Press
                                    </h2>
                                    <h3>
                                        Today, and everyday.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow">
                                    <ob-newspaper/>
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
                        Press kits
                    </h4>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        People
                    </h4>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        Logos
                    </h4>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .hero--press{
        position: relative;
        display: flex;
    }
</style>

<script>
    import ObNewspaper from "./components/newspaper.vue";

    export default {
        components: {
            ObNewspaper
        }
    }
</script>

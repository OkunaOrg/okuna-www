<template>
    <div>
        <section class="hero is-medium hero--jobs has-border-bottom-gray">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns">
                        <div class="column about-us-header-text">
                            <div class="columns is-centered is-vcentered is-mobile" style="height: 100%;">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                            Jobs
                                    </h1>
                                    <h2 class="title is-size-2 trust-text has-text-centered-mobile">
                                        Work with us.
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
                <div class="content is-large">
                    <h4>
                        We are embarking in one of the most exciting digital adventures ever and we are looking for talented people to sail with us!
                    </h4>
                    <p>
                        We are looking for people with all kinds of skills. Technology, design, marketing, finance, media, you name it.
                    </p>
                    <p>
                        If you believe in <span class="has-text-primary"><strong class="has-text-primary">Open</strong>book</span> and are talented in what you do, we need your help!
                    </p>
                    <p>
                        Send us your CV to  <a
                        href="mailto:jobs@open-book.org?subject=Job%20Application">jobs@open-book.org</a>.
                    </p>
                    <p>
                        We look forward to meeting you !
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
                                Who will you be working with?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="about-us" class="button is-white is-outlined is-rounded is-medium">Meet the team</router-link>
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

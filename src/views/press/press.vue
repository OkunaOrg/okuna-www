<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-centered contact-us-header-text">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        Press
                                    </h1>
                                    <h2 class="title is-size-2 contact-text has-text-centered-mobile">
                                        Help us change the world.
                                    </h2>
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
                        We are embarking on one of the most exciting digital adventures ever and we are looking for talented people to sail with us!
                    </h4>
                    <p>
                        We are looking for people with all kinds of skills. Technology, design, marketing, finance, media, you name it.
                    </p>
                    <p>
                        If you believe in <span class="has-text-primary"><strong class="has-text-primary">Open</strong>book</span> and are talented at what you do, we need your help!
                    </p>
                    <p>
                        Send us your CV to  <a
                        href="mailto:press@open-book.org?subject=Job%20Application">press@open-book.org</a>.
                    </p>
                    <p>
                        We look forward to meeting you !
                    </p>
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

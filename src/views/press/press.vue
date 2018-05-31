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
                                        We &nbsp;<span class="icon" style="color: #ff0000;"><i class="fas fa-heart"></i></span> &nbsp;Press
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
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div>
                        <h2 class="title is-4 is-spaced is-margin-top-small">Jump to</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#presskits" v-scroll-to="'#presskits'">
                                Press kits and images
                            </a>
                        </li>
                        <li>
                            <a href="#people" v-scroll-to="'#people'">
                                People
                            </a>
                        </li>
                        <li>
                            <a href="#logos" v-scroll-to="'#logos'">
                                Logos
                            </a>
                        </li>
                        <li>
                            <a href="#inquiries" v-scroll-to="'#inquiries'">
                                Further inquiries
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" id="presskits">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        Press kits and images
                    </h4>
                </div>
            </div>
        </section>
        <section class="section" id="people">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        People
                    </h4>
                </div>
            </div>
        </section>
        <section class="section" id="logos">
            <div class="small-container">
                <div class="content is-medium">
                    <h4>
                        Logos
                    </h4>
                </div>
            </div>
        </section>
        <section class="section" id="inquiries">
            <div class="small-container">
                <div class="content is-medium">
                    <p>
                        For further inquiries please contact <a href="mailto:lambrecht@open-book.org?subject=Press%20inquiry&body=">Lambrecht Wessels</a>.
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

    .press-separator{
        width: 100%;
        height: 1px;
        border: solid 1px black;
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

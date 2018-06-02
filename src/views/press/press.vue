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
                                    <h3 class="has-text-centered-mobile">
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
                                Press kit
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
                <div class="content is-medium padding-bottom-3x">
                    <h4>
                        Press kit
                    </h4>
                    <p>
                        Includes press release, manifesto, bios, photos, logos, misc images and preliminary website photos.
                    </p>
                </div>
                <ob-press-kits></ob-press-kits>
            </div>
        </section>
        <section class="section" id="people">
            <div class="small-container">
                <div class="content is-medium padding-bottom-3x">
                    <h4>
                        People
                    </h4>
                </div>
                <ob-press-people></ob-press-people>
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
    import ObPressAsset from "./components/press-asset.vue";
    import ObPressKits from "./components/press-kits/press-kits";
    import ObPressPeople from "./components/press-people/press-people.vue";

    export default {
        components: {
            ObPressPeople,
            ObPressKits,
            ObNewspaper,
            ObPressAsset
        }
    }
</script>

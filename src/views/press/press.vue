<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-centered has-padding-top-2x-mobile">
                                <div class="column is-narrow">
                                    <h2 class="title is-size-2 contact-text has-text-centered-mobile">
                                        {{ $t('press:press.we') }}  &nbsp;<span class="icon" style="color: #ff0000;"><i class="fas fa-heart"></i></span>
                                        &nbsp;{{ $t('press:press.press') }}
                                    </h2>
                                    <h3 class="has-text-centered-mobile">
                                        {{ $t('press:press.today_everyday') }}
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
                    <h2>
                        {{ $t('press:press.hi') }}
                    </h2>
                    <p v-html="$t('press:press.any_questions')">
                    </p>
                    <p>
                        {{ $t('press:press.happy_to_help') }}
                    </p>
                    <div class="padding-top-2x">
                        <h2 class="title is-4 is-spaced is-margin-top-small"> {{ $t('press:press.jump_to') }}</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#presskits" v-scroll-to="'#presskits'">
                                {{ $t('press:press.press_kit') }}
                            </a>
                        </li>
                        <li>
                            <a href="#newsroom" v-scroll-to="'#newsroom'">
                                {{ $t('press:press.newsroom') }}
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
                        {{ $t('press:press.press_kit') }}
                    </h4>
                    <p>
                        {{ $t('press:press.includes_everything') }}
                    </p>
                </div>
                <ob-press-kits></ob-press-kits>
            </div>
        </section>
        <section class="section" id="newsroom">
            <div class="small-container">
                <div class="content is-medium padding-bottom-3x">
                    <h4>
                        {{ $t('press:press.newsroom') }}
                    </h4>
                    <p>
                        {{ $t('press:press.home_press') }}
                    </p>
                    <router-link class="button is-rainbow" to="newsroom">
                        {{ $t('press:press.go_to_newsroom') }}
                    </router-link>
                </div>
            </div>
        </section>
        <section class="section" id="inquiries">
            <div class="small-container">
                <div class="content is-medium">
                    <p v-html="$t('press:press.missing_something')">
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .hero--press {
        position: relative;
        display: flex;
    }

    .press-separator {
        width: 100%;
        height: 1px;
        border: solid 1px black;
    }
</style>

<script>
    import ObNewspaper from "./components/newspaper.vue";
    import ObPressAsset from "./components/press-asset.vue";
    import ObPressKits from "./components/press-kits/press-kits";

    export default {
        components: {
            ObPressKits,
            ObNewspaper,
            ObPressAsset
        }
    }
</script>

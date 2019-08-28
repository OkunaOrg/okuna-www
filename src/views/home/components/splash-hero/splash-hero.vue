<template>
    <section class="hero is-medium hero--splash" id="main">
        <div class="hero-body has-padding-bottom-1x-mobile">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div class="column splash-browser has-position-relative">
                        <figure class="has-position-absolute animated fadeInDown is-z-2 front-mockup">
                            <img :src="whiteMockupImage">
                        </figure>
                        <figure class="has-position-relative animated fadeInLeft is-z-1 back-mockup">
                            <img :src="blackMockupImage">
                        </figure>
                    </div>
                    <div
                        class="column has-text-centered has-padding-top-2x-mobile has-background-white is-z-2 has-position-relative">
                        <div class="columns is-centered is-mobile">
                            <div class="column" style="max-width: 450px">
                                <vue-typed-js
                                    :key="locale"
                                    :strings="helloSubjects"
                                    :loop="true"
                                    :typeSpeed="9"
                                    :backSpeed="9"
                                    :backDelay="2000"
                                >
                                    <h1 class="is-size-3-mobile is-size-1 has-text-weight-bold"
                                        v-html="$t('home:splash_hero.hello_world')">
                                    </h1>
                                </vue-typed-js>
                                <p class="is-size-4 padding-top-1x"
                                   v-html="$t('home:splash_hero.we_are_ob')">
                                </p>
                                <div class="has-padding-2x">
                                    <button class="button is-rainbow is-rounded" v-scroll-to="'#beta-signup'">
                                        <span class="icon">
                                            <i class="fas fa-heart"></i>
                                        </span>
                                        <span>{{ $t('home:home.signup_button') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style lang="scss">
    .hero--splash {
        position: relative;
    }

    .splash-text {
        margin-top: 1rem;
    }

    .splash-browser {
        margin-top: 1rem;
        @media(max-width: 770px) {
            max-height: 45vh;
        }
    }

    .typewriter-cursor {
        font-weight: 400;
        color: #333;
    }

    .front-mockup {
        width: 125%;
        top: -12%;
        left: -3%;
    }

    .back-mockup {
        left: -10%;
    }

</style>


<script>
    import blackMockupImage from './assets/black-min.png';
    import whiteMockupImage from './assets/white-min.png';

    export default {
        name: 'ob-splash-hero',
        data() {
            return {
                blackMockupImage,
                whiteMockupImage
            };
        },
        computed: {
            isI18nLoaded() {
                return this.$store.getters.isI18nLoaded;
            },
            helloSubjects() {
                return this.isI18nLoaded && [
                    this.$i18n.t('home:splash_hero.world'),
                    this.$i18n.t('home:splash_hero.friends'),
                    this.$i18n.t('home:splash_hero.family'),
                    this.$i18n.t('home:splash_hero.grandma')
                ].map(subject => `${subject}!`);
            },
            locale() {
                return this.$store.state.i18n;
            }
        }
    }
</script>

<style lang="scss">
    .typed-element {
        display: block !important;
    }
</style>

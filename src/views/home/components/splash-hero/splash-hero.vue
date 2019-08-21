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
                                <h1 class="is-size-3-mobile is-size-1 has-text-weight-bold"
                                    v-html="$t('home:splash_hero.hello_world')">
                                </h1>
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

    require('./scripts/typewriter.exec.js');
    import blackMockupImage from './assets/black-min.png';
    import whiteMockupImage from './assets/white-min.png';

    export default {
        name: 'ob-splash-hero',
        mounted() {
            this.initHello();
        },
        destroyed() {
            this.typewriter.stop();
        },
        data() {
            return {
                blackMockupImage,
                whiteMockupImage
            }
        },
        methods: {
            initHello() {
                // This library should have been added in main.js
                const Typewriter = window['Typewriter'];

                const helloSubjects = [
                    this.$i18n.t('home:splash_hero.world'),
                    this.$i18n.t('home:splash_hero.friends'),
                    this.$i18n.t('home:splash_hero.family'),
                    this.$i18n.t('home:splash_hero.grandma'),
                ];

                const helloSubject = document.querySelector('#hello-subject');

                const typewriter = this.typewriter = new Typewriter(helloSubject, {
                    loop: true
                });

                helloSubjects.forEach((helloSubject) => {
                    const helloSubjectText = `${helloSubject}!`;
                    typewriter.typeString(helloSubjectText)
                        .pauseFor(2500)
                        .deleteAll();
                });

                typewriter.start();

            }
        }
    }
</script>

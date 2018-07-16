<template>
    <section class="hero is-medium hero--splash" id="main">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div class="column has-text-centered has-padding-top-2x-mobile">
                        <div class="columns is-centered is-mobile">
                            <div class="column" style="max-width: 520px">
                                <h1 class="title is-size-3-mobile is-size-1"
                                    v-html="$t('splash_hero.hello_world')">
                                </h1>
                                <h2 class="subtitle is-size-5-mobile is-size-3"
                                    v-html="$t('splash_hero.we_are_ob')">
                                </h2>
                                <h3 class="is-size-6-mobile"
                                    v-html="$t('splash_hero.kickstarter')">
                                </h3>
                            </div>
                        </div>
                        <div class="columns is-centered is-mobile">
                            <div class="column is-narrow">
                                <a class="button is-rainbow is-rounded is-medium is-size-6-mobile" target="_blank"
                                   rel="noopener noreferrer" href="https://open-book.org/kickstarter">
                                    <span class="icon">
                                        <i class="fab fa-kickstarter-k"></i>
                                    </span>
                                    <span>
                                        {{$t('splash_hero.notify_me')}}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="column splash-browser">
                       <ob-browser></ob-browser>
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
            max-height: 30vh;
        }
    }

    .typewriter-cursor {
        font-weight: 400;
        color: #333;
    }
</style>


<script>

    require('./scripts/typewriter.exec.js');

    import ObBrowser from "./components/browser";
    import ObOcean from "./components/ocean/ocean";
    import ObSocialShare from "@/components/social-share/social-share";

    export default {
        components: {
            ObOcean,
            ObBrowser
        },
        name: 'ob-splash-hero',
        mounted() {
            this.initHello();
        },
        destroyed() {
            this.typewriter.stop();
        },
        methods: {
            initHello() {
                // This library should have been added in main.js
                const Typewriter = window['Typewriter'];

                const helloSubjects = [
                    this.$i18n.t('splash_hero.world'),
                    this.$i18n.t('splash_hero.friends'),
                    this.$i18n.t('splash_hero.family'),
                    this.$i18n.t('splash_hero.grandma'),
                    this.$i18n.t('splash_hero.reddit'),
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

            },
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$modal.open({
                    component: ObSocialShare
                })
            }
        }
    }
</script>

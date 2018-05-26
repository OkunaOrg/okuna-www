<template>
    <section class="hero is-fullheight hero--splash" id="main">
        <ob-ocean></ob-ocean>
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div class="column has-text-centered splash-text">
                        <div class="columns is-centered is-mobile">
                            <div class="column" style="max-width: 520px">
                                <h1 class="title is-size-2-mobile is-size-1">
                                    Hello <span id="hello-subject">world!</span>
                                </h1>
                                <h2 class="subtitle is-size-5-mobile is-size-3">
                                    We're <strong>Open</strong>book.
                                </h2>
                                <h3 class="is-size-6-mobile">
                                    An open source, zero ads, zero
                                    tracking, beautifully designed
                                    social network with respect for your privacy.
                                </h3>
                                <h5>
                                    <strong>Coming soon to <span
                                        style="color: #034752;">Kickstarter.</span></strong>
                                </h5>
                            </div>
                        </div>
                        <div class="columns is-centered is-mobile">
                            <div class="column is-narrow">
                                <button class="button is-primary is-outlined is-rounded" @click="onUserWantsToShare()">
                                    <span class="icon">
                                        <i class="fas fa-share-alt"></i>
                                    </span>
                                    <span>
                                        Share
                                    </span>
                                </button>
                            </div>
                            <div class="column is-narrow">
                                <a class="button is-primary is-rounded" target="_blank" href="http://eepurl.com/dvRRmD">
                                    <span class="icon">
                                        <i class="fas fa-bell"></i>
                                    </span>
                                    <span>
                                        Notify me
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
    import ObSocialShare from "./components/social-share/social-share";

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
                    'world',
                    'friends',
                    'family',
                    'grandma'
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

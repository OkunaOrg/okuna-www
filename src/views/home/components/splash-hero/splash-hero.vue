<template>
    <section class="hero is-medium hero--splash" id="main">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div class="column splash-browser has-position-relative">
                        <figure class="has-position-absolute animated fadeInDown is-z-2 front-mockup">
                            <img  :src="whiteMockupImage">
                        </figure>
                        <figure class="has-position-relative animated fadeInLeft is-z-1 back-mockup">
                            <img  :src="blackMockupImage">
                        </figure>
                    </div>
                    <div class="column has-text-centered has-padding-top-2x-mobile has-background-white is-z-2 has-position-relative">
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
                            <div class="column">
                                <p v-bind:class="{'submitted': emailSendClicked}">
                                    <span class="input-email is-rainbow" v-bind:class="{'success': subscribeSuccessful}">
                                        <input class="input-field" type="email" placeholder="Email" v-model="email" v-bind:disabled="emailSendClicked">
                                        <span></span>
                                    </span>
                                    <button class="join-waitlist is-rainbow" @click="sendEmail()" v-bind:class="{'success': subscribeSuccessful}">
                                        <span v-show="!emailSendClicked"><i class="fas fa-paper-plane"></i></span>
                                        <span v-show="emailSendClicked && !subscribeSuccessful"><i class="fas fa-spinner is-loading"></i></span>
                                        <span class="animated fadeIn" v-show="subscribeSuccessful"><i class="fas fa-check"></i></span>
                                    </button>
                                </p>
                                <span class="has-text-danger" v-show="errorEmail">{{errorEmail}}</span>
                                <span class="success-message" v-show="subscribeSuccessful">Congratulations! You're {{count}} on the waitlist.</span>
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
            max-height: 30vh;
        }
    }

    .typewriter-cursor {
        font-weight: 400;
        color: #333;
    }

    .front-mockup {
        width: 125%;
        top: -10%;
    }

    .back-mockup {
        left: -10%;
    }

    .success-message {
        margin-top: 1em;
        font-weight: bold;
    }

    .submitted {
        .join-waitlist {
            top: 2px;
        };

        .input-email {
            opacity: 0.5;
        }
    }

    .join-waitlist {
        border-radius: 50%;
        background: #f95ca3;
        position: relative;
        right: 8%;
        z-index: 2;
        width: 40px;
        height: 40px;
        top: -1px;
        border: none;
        color: white;
        cursor: pointer;
        outline: none;
        transition: right 1s;

        &.success {
            right: 27%;
        }

        .fa-spinner, .fa-check {
            font-size: 1.3em;
        }

        &:hover {
            top: 2px;
            .fa-paper-plane {
                font-size: 1.3em;
            }
        }

        &:visited, &:focus {
            outline: none;
        }
    }

    .input-email {
        position:relative;
        overflow: visible !important;
        font-size: 1em;
        padding: 3px;
        display: inline-block;
        border-radius: 9999em;
        line-height: 0.5em;
        width: 50%;
        transition: opacity 1s;

        *:not(span) {
            position: relative;
            display: inherit;
            border-radius: inherit;
            margin: 0;
            border: none;
            outline: none;
            padding: 0.6em .525em;
            z-index: 1; // needs to be above the :focus span
            width: 100%;

            // summon fancy shadow styles when focussed
            &:focus + span {
                opacity: 1;
                transform: scale(1);
            }

            ::placeholder {
                color:#cbd0d5;
            }
        }

        span {

            transform: scale(.993, .94); // scale it down just a little bit
            transition: transform .5s, opacity .25s;
            opacity: 0; // is hidden by default

            position:absolute;
            z-index: 0; // needs to be below the field (would block input otherwise)
            margin: 10px; // a bit bigger than .input padding, this prevents background color pixels shining through
            left:0;
            top:0;
            right:0;
            bottom:0;
            border-radius: inherit;
            pointer-events: none;
            animation: rainbow-shadow 10s infinite;
        }

        &.success {
            opacity: 0;
        }
    }
</style>


<script>

    require('./scripts/typewriter.exec.js');
    import blackMockupImage from './assets/black-mock-min.png';
    import whiteMockupImage from './assets/white-mock-min.png';
    import axios from 'axios';

    const MAILCHIMP_SUBSCRIBE_URL = process.env.VUE_APP_MAILCHIMP_SUBSCRIBE_URL;
    export default {
        name: 'ob-splash-hero',
        mounted() {
            this.initHello();
        },
        destroyed() {
            this.typewriter.stop();
        },
        data(){
          return {
              emailSendClicked : false,
              subscribeSuccessful : false,
              email: '',
              errorEmail: '',
              count: 0,
              blackMockupImage,
              whiteMockupImage
          }
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
            sendEmail() {
                this.emailSendClicked = true;
                axios.post(MAILCHIMP_SUBSCRIBE_URL, {
                    email: this.email
                })
                .then((resp) => {
                    this.subscribeSuccessful = true;
                    this.errorEmail = '';
                    this.count = resp.data.count;
                })
                .catch((error) => {
                    if (error.response.status === 400) this.errorEmail = error.response.data.email[0];
                    if (error.response.status === 500) this.errorEmail = 'Oops..something went wrong. Try again!';
                    console.error(error);
                    this.emailSendClicked = false;
                });
            }
        }
    }
</script>

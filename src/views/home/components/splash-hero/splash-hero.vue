<template>
    <section class="hero is-medium hero--splash" id="main">
        <div class="hero-body has-padding-bottom-1x-mobile">
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
                                <h1 class="is-size-3-mobile is-size-1 has-text-weight-bold"
                                    v-html="$t('splash_hero.hello_world')">
                                </h1>
                                <h3 class="is-size-5"
                                    v-html="$t('splash_hero.we_are_ob')">
                                </h3>
                                <h3 class="is-size-5"
                                    v-html="$t('splash_hero.kickstarter')">
                                </h3>
                                <h4 class="padding-top-2x is-size-4 has-text-weight-bold">
                                    <span class="icon is-small" v-twemoji>🚀</span> Join the beta.
                                </h4>
                                <p>
                                    <span>Launching early 2019.</span>
                                </p>
                            </div>
                        </div>
                        <div class="columns is-centered is-mobile">
                            <div class="column">
                                <form @submit.prevent="sendEmail" novalidate>
                                    <p class="email-container" v-bind:class="{'submitted': emailSendClicked}">
                                    <span class="input-email is-rainbow" v-bind:class="{'success': subscribeSuccessful}">
                                        <input class="input-field"
                                               name="email"
                                               type="email"
                                               v-validate="'required|email'"
                                               placeholder="your@email.com" v-model="email"
                                               v-bind:disabled="emailSendClicked">
                                        <span></span>
                                    </span>
                                        <button class="join-waitlist is-rainbow" type="submit" v-bind:class="{'success': subscribeSuccessful}">
                                            <span v-show="!emailSendClicked"><i class="fas fa-paper-plane"></i></span>
                                            <span v-show="emailSendClicked && !subscribeSuccessful"><i class="fas fa-spinner is-loading"></i></span>
                                            <span class="animated fadeIn" v-show="subscribeSuccessful"><i class="fas fa-check"></i></span>
                                        </button>
                                    </p>
                                    <span v-show="fields.email && fields.email.touched && errors.has('email')" class="error-message has-text-danger is-size-7"><span class="icon is-small is-valign-top" v-twemoji> 😕 </span>&nbsp;&nbsp; {{ errors.first('email') }}</span>
                                    <span class="error-message has-text-danger is-size-7" v-show="errorEmail"><span class="icon is-small is-valign-top" v-twemoji> 😕 </span>&nbsp;&nbsp;{{errorEmail}}</span>
                                    <span class="success-message" v-show="subscribeSuccessful"><span class="icon is-small" v-twemoji>🎉</span>&nbsp;&nbsp;Hooray! You're number {{count + 1}} on our waitlist.</span>
                                </form>
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
    }

    .back-mockup {
        left: -10%;
    }

    .success-message {
        margin-top: 1em;
        font-weight: bold;
        display: inline-block;
    }

    .error-message {
        display: inline-block;
        margin-top: 1em;
    }

    .submitted {
        .join-waitlist {
            top: 2px;

            @media(max-width: 768px) {
                top: 4px;
            }
        };

        .input-email {
            opacity: 0.5;
        }
    }

    .join-waitlist {
        border-radius: 50%;
        background: #f95ca3;
        position: absolute;
        right: 20%;
        top: 2px;
        z-index: 2;
        width: 40px;
        height: 40px;
        border: none;
        color: white;
        cursor: pointer;
        outline: none;
        transition: right 1s;

        @media(max-width: 768px) {
            right: 10%;
            top: 2px;
        }

        &.success {
            right: 46%;
        }

        .fa-spinner, .fa-check {
            font-size: 1.3em;
            position: relative;
            top: 1px;

            @media(max-width: 768px) {
                left: -1px;
            }
        }

        .fa-paper-plane {
            position: relative;
            left: -1px;
        }

        &:hover {
            top: 2px;
            .fa-paper-plane {
                font-size: 1em;
            }
        }

        &:visited, &:focus {
            outline: none;
        }
    }

    .email-container {
        position: relative;
        padding: 0 20%;

        @media(max-width: 768px) {
            padding: 0 10%;
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
        width: 100%;
        transition: opacity 1s;

        input{
            text-align: center;
        }

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
            postToMailChimp() {
                axios.post(MAILCHIMP_SUBSCRIBE_URL, {
                    email: this.email
                })
                    .then((resp) => {
                        this.subscribeSuccessful = true;
                        this.errorEmail = '';
                        this.count = resp.data.count;
                    })
                    .catch((error) => {
                        if (error.response && error.response.status === 400) {
                            this.errorEmail = error.response.data.email[0];
                        } else  {
                            this.errorEmail = 'We\'re experiencing server issues. Please try again in a few minutes.';
                        }
                        this.emailSendClicked = false;
                    });
            },
            validateAll() {
                return this.$validator.validateAll().then((result) => {
                    this.touchAll();
                    return result;
                });
            },
            touchAll() {
                return Object.keys(this.fields).every(field => {
                    return this.fields[field].touched = true;
                });
            },
            sendEmail() {
                this.validateAll().then((result) => {
                    if (result) {
                        this.emailSendClicked = true;
                        this.postToMailChimp();
                    }
                });
            }
        }
    }
</script>

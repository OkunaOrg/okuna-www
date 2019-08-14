<template>
    <section class="hero is-white">
        <div class="hero-body has-text-centered">
            <div class="content">
                <h2 class="is-size-3"><span class="icon" v-twemoji>🚀</span> {{ $t('beta_container.title') }}</h2>
                <p class="is-size-4">
                    {{ $t('beta_container.beta_date') }}
                </p>
            </div>

            <div class="columns is-centered is-mobile">
                <div class="column waitlist-container">
                    <form @submit.prevent="sendEmail" novalidate>
                        <p class="email-container" v-bind:class="{'submitted': emailSendClicked}">
                                    <span class="input-email is-rainbow"
                                          v-bind:class="{'success': subscribeSuccessful}">
                                        <input class="input-field"
                                               name="email"
                                               type="email"
                                               v-validate="'required|email'"
                                               :placeholder="$t('beta_container.email_placeholder')" v-model="email"
                                               v-bind:disabled="emailSendClicked">
                                        <span></span>
                                    </span>
                            <button class="join-waitlist is-rainbow" type="submit"
                                    v-bind:class="{'success': subscribeSuccessful}">
                                <span v-show="!emailSendClicked"><i class="fas fa-paper-plane"></i></span>
                                <span v-show="emailSendClicked && !subscribeSuccessful"><i
                                    class="fas fa-spinner is-loading"></i></span>
                                <span class="animated fadeIn" v-show="subscribeSuccessful"><i class="fas fa-check"></i></span>
                            </button>
                        </p>
                        <span v-show="fields.email && fields.email.touched && errors.has('email')"
                              class="error-message has-text-danger is-size-7"><span class="icon is-small is-valign-top"
                                                                                    v-twemoji> 😕 </span>&nbsp;&nbsp; {{ errors.first('email') }}</span>
                        <span class="error-message has-text-danger is-size-7" v-show="errorEmail"><span
                            class="icon is-small is-valign-top" v-twemoji> 😕 </span>&nbsp;&nbsp;{{errorEmail}}</span>
                        <span class="success-message" v-show="subscribeSuccessful"><span class="icon is-small"
                                                                                         v-twemoji>🎉</span>{{ $t('beta_container.success', { count: count + 1 }) }}</span>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

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
        }
    ;

        .input-email {
            opacity: 0.5;
        }
    }

    .waitlist-container{
        max-width: 500px;
    }

    .is-android {
        .join-waitlist {
            @media(max-width: 768px) {
                right: 10%;
                top: 2px !important;
            }

            .fa-paper-plane, .fa-paper-plane:focus {
                @media(max-width: 768px) {
                    left: -2px;
                }
            }

            .fa-check, .fa-spinner, .fa-check:focus, .fa-spinner:focus {
                @media(max-width: 768px) {
                    left: 0 !important;
                }
            }

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
            right: 11%;
            top: 4px;
        }

        &.success {
            right: 46%;
        }

        .fa-spinner, .fa-check {
            font-size: 1.3em;
            position: relative;
            top: 1px;

            @media(max-width: 768px) {
                left: -6px;
            }
        }

        .fa-paper-plane {
            position: relative;
            left: -1px;

            @media(max-width: 768px) {
                left: -5px;
            }
        }

        &:hover {
            top: 2px;
            .fa-paper-plane {
                font-size: 1em;
            }

            @media(max-width: 768px) {
                top: 4px;
            }

            .fa-spinner, .fa-check {
                @media(max-width: 768px) {
                    left: -6px;
                }
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
        position: relative;
        overflow: visible !important;
        font-size: 1em;
        padding: 3px;
        display: inline-block;
        border-radius: 9999em;
        line-height: 0.5em;
        width: 100%;
        transition: opacity 1s;

        input {
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
                color: #cbd0d5;
            }
        }

        span {

            transform: scale(.993, .94); // scale it down just a little bit
            transition: transform .5s, opacity .25s;
            opacity: 0; // is hidden by default

            position: absolute;
            z-index: 0; // needs to be below the field (would block input otherwise)
            margin: 10px; // a bit bigger than .input padding, this prevents background color pixels shining through
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
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

    import axios from 'axios';

    const MAILCHIMP_SUBSCRIBE_URL = process.env.VUE_APP_MAILCHIMP_SUBSCRIBE_URL;

    export default {
        name: 'ob-signup',
        data() {
            return {
                emailSendClicked: false,
                subscribeSuccessful: false,
                email: '',
                errorEmail: '',
                count: 0,
            }
        },
        methods: {
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
                        } else {
                            this.errorEmail = this.$t('beta_container.server_error');
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

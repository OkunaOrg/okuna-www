<template>
    <div class="columns is-multiline is-mobile" id="message-form">
        <form class="column is-12" @submit.prevent="onSubmit()">
            <div class="field padding-bottom-1x">
                <label class="label" for="subject">
                    {{ $t('contact:message.subject') }}
                </label>
                <div class="control">
                    <input
                        class="input is-medium"
                        v-validate="'required|min:5|max:64'"
                        type="text"
                        :placeholder="$t('contact:message.reason_placeholder')"
                        id="subject"
                        v-model="subject"
                        name="subject">
                </div>
                <p class="help is-danger">
                    <span v-show="fields.subject && fields.subject.touched && errors.has('subject')">
                        {{ errors.first('subject') }}
                    </span>
                </p>
            </div>
            <div class="field padding-bottom-1x">
                <label class="label" for="email">
                    {{ $t('contact:message.email') }}
                </label>
                <div class="control">
                    <input class="input is-medium"
                           v-validate="'required|email'"
                           type="text"
                           id="email"
                           name="email"
                           :placeholder="$t('contact:message.email_placeholder')"
                           v-model="email">
                </div>
                <p class="help is-danger">
                    <span v-show="fields.email && fields.email.touched && errors.has('email')">
                        {{ errors.first('email') }}
                    </span>
                </p>
            </div>
            <div class="field padding-bottom-3x">
                <label class="label" for="message"> {{ $t('contact:message.user_message') }}</label>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea
                                v-validate="'required|min:10|max:1000'"
                                class="textarea is-medium"
                                :placeholder="$t('contact:message.user_message_placeholder')"
                                style="resize: none;"
                                id="message"
                                name="message"
                                v-model="message"
                            ></textarea>
                        </div>
                    </div>
                </div>
                <p class="help is-danger">
                    <span v-show="fields.message && fields.message.touched && errors.has('message')">
                        {{ errors.first('message') }}
                    </span>
                </p>
            </div>
            <div class="padding-top-2x padding-bottom-2x" v-if="!acceptedRecaptcha">
                <div class="columns">
                    <div class="column">
                        <b-message type="is-info">
                            <div class="columns is-mobile is-multiline">
                                <div class="column is-12">
                                    <p v-html="$t('contact:message.google_recaptcha_title')"></p>
                                    <br/>
                                    {{ $t('contact:message.recaptcha_info') }}
                                    <br/>
                                    <br/>
                                    {{ $t('contact:message.info_includes') }}
                                    <ul>
                                        <li>
                                            {{ $t('contact:message.info_ip_location') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_cookies') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_mouse_clicks') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_css') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_date') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_browser_lang') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_plugins') }}
                                        </li>
                                        <li>
                                            {{ $t('contact:message.info_js') }}
                                        </li>
                                    </ul>
                                    <br/>
                                    {{ $t('contact:message.recaptcha_authorization') }}
                                </div>
                                <div class="column is-12">
                                    <button class="button is-warning is-large is-size-7-mobile is-size-6"
                                            @click="enableGoogleRecaptcha()" type="button"
                                            v-scroll-to="'#message-form'">
                                        {{ $t('contact:message.recaptcha_authorization_yes') }}
                                    </button>
                                </div>
                                <div class="column is-12">
                                    {{ $t('contact:message.or') }}
                                </div>
                                <div class="column is-12">
                                    <a :href="mailToLink"
                                       class="button is-success is-large is-size-7-mobile is-size-6">
                                        {{ $t('contact:message.recaptcha_authorization_no') }}
                                    </a>
                                </div>
                            </div>
                        </b-message>
                    </div>
                </div>
            </div>
            <div class="field" v-else>
                <div class="control">
                    <vue-recaptcha sitekey="6LcBGlsUAAAAAA6NXsqPOtUbsk_G2ov5nafyduDk" ref="recaptcha"
                                   v-on:verify="onCaptchaVerified($event)"></vue-recaptcha>
                </div>
                <p class="help is-danger">
                    <span v-show="formWasSubmitted && !captchaVerified">
                        {{ $t('contact:message.tick_box') }}
                    </span>
                </p>
            </div>
            <div class="field is-grouped is-grouped-right">
                <p class="control">
                    <a class="button is-light" @click="clearAll()">
                        {{ $t('contact:message.clear_form') }}
                    </a>
                </p>
                <p class="control">
                    <button class="button is-rainbow" type="submit"
                            :disabled="(formWasSubmitted && !formIsValid) || submissionInProgress || !acceptedRecaptcha">
                        {{ $t('contact:message.submit') }}
                    </button>
                </p>
            </div>
        </form>
    </div>
</template>

<style lang="scss">

</style>

<script>
    import VueRecaptcha from 'vue-recaptcha';
    import axios from 'axios';

    const CONTACT_URL = process.env.VUE_APP_CONTACT_URL;
    const GOOGLE_RECAPTCHA_SCRIPT = 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit';

    function initialState() {
        return {
            formWasSubmitted: false,
            submissionInProgress: false,
            captchaVerified: false,
            captchaResponse: '',
            email: '',
            subject: '',
            message: '',
            acceptedRecaptcha: false,
        }
    }

    export default {
        name: 'ob-message',
        data: initialState,
        components: {
            VueRecaptcha
        },
        computed: {
            formIsValid() {
                return this.errors.items.length <= 0 && this.captchaVerified === true;
            },
            mailToLink() {
                return `mailto:info@okuna.io${this.mailToQueryString}`;
            },
            mailToQueryString() {
                const encodedSubject = encodeURIComponent(this.subject);
                const encodedMessage = encodeURIComponent(this.message);
                return `?subject=${encodedSubject}&body=${encodedMessage}`;
            }
        },
        methods: {
            enableGoogleRecaptcha() {
                this.injectGoogleRecaptcha();
            },
            injectGoogleRecaptcha() {
                const that = this;
                (function (d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0];
                    if (d.getElementById(id)) {
                        return;
                    }
                    js = d.createElement(s);
                    js.id = id;
                    js.onload = function () {
                        that.acceptedRecaptcha = true;
                        // remote script has loaded
                    };
                    js.src = GOOGLE_RECAPTCHA_SCRIPT;
                    fjs.parentNode.insertBefore(js, fjs);
                }(document, 'script', 'google-recaptcha'));
            },
            onSubmit() {
                this.validateAll().then((result) => {
                    this.formWasSubmitted = true;
                    if (result) {
                        this.onSubmitWithValidForm();
                    }
                });
            },
            onSubmitWithValidForm() {
                this.submitForm();
            },
            onCaptchaVerified(response) {
                this.captchaVerified = true;
                this.captchaResponse = response;
                console.log('Captcha is valid!');
            },
            submitForm() {
                this.enableLoading();

                const requestData = {
                    subject: this.subject,
                    email: this.email,
                    message: this.message,
                    captcha: this.captchaResponse
                };

                axios.post(CONTACT_URL, requestData)
                    .then(() => {
                        this.clearAll();
                        this.disableLoading();
                        this.$dialog.alert({
                            title: 'Hooray!',
                            message: 'Your message has been delivered. <br/> You\'ll hear from us soon.'
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                        this.disableLoading();
                        this.$dialog.alert({
                            title: 'Oh no...',
                            message: 'We could not deliver your message. Please try again later or contact us at info@okuna.io'
                        });
                    });
            },
            validateAll() {
                return this.$validator.validateAll().then((result) => {
                    this.touchAll();
                    return result && this.captchaVerified;
                });
            },
            touchAll() {
                return Object.keys(this.fields).every(field => {
                    return this.fields[field].touched = true;
                });
            },
            clearAll() {
                Object.assign(this.$data, initialState());
                this.$validator.reset();
                this.$refs.recaptcha.reset()
            },
            enableLoading() {
                this.submissionInProgress = true;
                this.loadingComponent = this.$buefy.loading.open();
            },
            disableLoading() {
                this.submissionInProgress = false;
                this.loadingComponent.close();
            }
        }
    }
</script>

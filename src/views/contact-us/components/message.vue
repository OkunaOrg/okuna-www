<template>
    <div class="columns is-multiline is-mobile">
        <form class="column is-12" @submit.prevent="onSubmit()">
            <div class="field padding-bottom-1x">
                <label class="label" for="subject">
                    Subject
                </label>
                <div class="control">
                    <input
                        class="input is-medium"
                        v-validate="'required|min:5'"
                        type="text"
                        placeholder="The reason you are contacting us"
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
                    Email
                </label>
                <div class="control">
                    <input class="input is-medium"
                           v-validate="'required|email'"
                           type="text"
                           id="email"
                           name="email"
                           placeholder="The email we can reach you at"
                           v-model="email">
                </div>
                <p class="help is-danger">
                    <span v-show="fields.email && fields.email.touched && errors.has('email')">
                        {{ errors.first('email') }}
                    </span>
                </p>
            </div>
            <div class="field padding-bottom-3x">
                <label class="label" for="message">Message</label>
                <div class="field-body">
                    <div class="field">
                        <div class="control">
                            <textarea
                                v-validate="'required|min:10'"
                                class="textarea is-medium"
                                placeholder="What can we do for you?"
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
            <div class="field is-grouped is-grouped-right">
                <p class="control">
                    <a class="button is-light" @click="clearAll()">
                        Clear form
                    </a>
                </p>
                <p class="control">
                    <button class="button is-primary" type="submit"
                            :disabled="(formWasSubmitted && !formIsValid) || submissionInProgress">
                        Submit
                    </button>
                </p>
            </div>
        </form>
    </div>
</template>

<style lang="scss">

</style>

<script>

    function initialState() {
        return {
            formWasSubmitted: false,
            submissionInProgress: false,
            email: '',
            subject: '',
            message: ''
        }
    }

    export default {
        name: 'ob-message',
        data: initialState,
        computed: {
            formIsValid() {
                return this.errors.items.length <= 0;
            }
        },
        methods: {
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
            submitForm() {
                this.enableLoading();
                setTimeout(() => {
                    this.disableLoading();
                    this.clearAll();
                    this.$dialog.alert({
                        message: 'Your message has been delivered. <br/> You\'ll hear from us soon.'
                    })
                }, 3000);
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
            clearAll() {
                Object.assign(this.$data, initialState());
                this.$validator.reset();
            },
            enableLoading() {
                this.submissionInProgress = true;
                this.loadingComponent = this.$loading.open();
            },
            disableLoading() {
                this.submissionInProgress = false;
                this.loadingComponent.close();
            }
        }
    }
</script>

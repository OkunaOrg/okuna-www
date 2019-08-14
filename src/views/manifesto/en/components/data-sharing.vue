<template>
    <div class="columns is-mobile">
        <div class="column">
            <div class="box step-container">
                <div v-if="stepNumber === 1">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-success is-large is-outlined app-logo is-rounded" disabled>
                                <i class="fas fa-music app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            {{ songipy('prompt') }}
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-rainbow" @click="goToStep2()">
                                <span v-html="songipy('continue')"></span>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 2" class="second-step">
                    <div class="columns is-multiline is-centered">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-success is-large is-outlined app-logo" disabled>
                                <i class="fas fa-music app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered is-size-6">
                            <div>
                                <i class="fas fa-lock"></i>
                                <span>
                                    &nbsp; {{ songipy('safe_to_use') }}
                                </span>
                            </div>
                            <div class="is-size-7">
                                {{ songipy('strict_policy') }}
                            </div>
                            <div class="is-size-7">
                                <a @click="wantsToLearnMoreAboutSecureApps()">
                                    {{ songipy('learn_more') }}
                                </a>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <span v-html="requiredSharedDataString"></span>
                        </div>
                        <div v-if="customOptionalDataSharingEnabled"
                             class="column is-9">
                            <div class="field">
                                <b-checkbox size="is-medium" v-model="optionalDataSharingEnabled">
                                    <div class="is-size-7" v-html="optionalEnabledDataString"></div>
                                </b-checkbox>
                            </div>
                        </div>
                        <div v-else class="column is-9">
                            <div class="field">
                                <b-checkbox size="is-medium" v-model="optionalDataSharingEnabled">
                                    <div class="is-size-7" v-html="optionalDataString"></div>
                                </b-checkbox>
                            </div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-outlined is-small" @click="goToStep3()">
                                <span>
                                     {{ songipy('edit_optional_data') }}
                                </span>
                                <span class="icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <b-collapse :open.sync="inspectDataOpen">
                                <button class="button is-transparent is-size-7 is-borderless" slot="trigger">
                                    <span>
                                      {{ songipy('inspect') }}
                                    </span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down"></i>
                                    </span>
                                </button>
                                <div class="notification data-container">
                                    <div class="content is-small">
                                        <p v-for="dataItem of sharedData">
                                            <strong>
                                                {{ dataItem.name }}:
                                            </strong>
                                            <span v-if="dataItem.type === 'text'">
                                                {{dataItem.value}}
                                            </span>
                                            <a v-else-if="dataItem.type === 'list'"
                                               @click="wantsToDisplayListWithName(dataItem.readableName)">
                                                <span>
                                                     {{ $t('manifesto.examples.common.open_list') }} ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                     {{ $t('manifesto.examples.common.open_image') }} ↗
                                                </span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </b-collapse>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div class="columns is-mobile">
                                <div class="column is-6">
                                    <button class="button is-outlined is-medium" @click="goToStep1()">
                                        {{ $t('manifesto.examples.common.btn_cancel') }}
                                    </button>
                                </div>
                                <div class="column is-6">
                                    <button class="button is-rainbow is-medium" @click="goToStep4()">
                                        {{ $t('manifesto.examples.common.btn_continue') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 3">
                    <div class="columns is-mobile is-multiline is-marginless">
                        <div class="column is-12">
                            <div class="columns">
                                <div class="column is-narrow">
                                    <button class="button" @click="goToStep2()">
                                        <span class="icon">
                                            <i class="fas fa-chevron-left"></i>
                                        </span>
                                        <span>{{ $t('manifesto.examples.common.btn_back') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="columns is-mobile is-multiline data-items">
                            <div class="column is-12 data-item" v-for="dataItem of availableData">
                                <div class="columns is-mobile">
                                    <div class="column is-10">
                                        <div class="is-size-6" @click="wantsToToggleItem(dataItem)">
                                            <strong>{{dataItem.readableName}}</strong>
                                            <span v-if="dataItem.required"> {{ $t('manifesto.examples.common.required') }}</span>
                                        </div>
                                        <div class="is-size-7">
                                         <span v-if="dataItem.type === 'text'">
                                                {{dataItem.value}}
                                            </span>
                                            <a v-else-if="dataItem.type === 'list'"
                                               @click="wantsToDisplayListWithName(dataItem.readableName)">
                                                <span>
                                                  {{ $t('manifesto.examples.common.open_list') }} ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    {{ $t('manifesto.examples.common.open_image') }} ↗
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="column">
                                        <b-switch v-model="dataItem.enabled"
                                                  :disabled="dataItem.required"
                                                  size="is-small"
                                                  type="is-success">
                                        </b-switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 4">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <span class="icon">
                                <i class="fas fa-check"></i>
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div>
                                <strong>
                                    {{ $t('manifesto.examples.common.success') }}
                                </strong>
                            </div>
                            <span>
                                {{ songipy('okuna_has_shared') }}
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span> {{ songipy('restart') }}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .step-container {
        position: relative;
        max-width: 400px;
        min-height: 500px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .app-logo {
        height: 55px;
        width: 55px;
        border-radius: 50%;
    }

    .section-separator {
        height: 1px;
        width: 100%;
        border-bottom: solid 1px rgba(10, 10, 10, 0.1);
    }

    .data-container {
        margin-top: 1rem;
    }

    .data-items {
        max-height: 400px;
        overflow-x: hidden;
        overflow-y: scroll;
    }

    .data-item {
        cursor: pointer;
    }
</style>

<script>
    import concatenate from '@/lib/concatenate';

    export default {
        name: 'ob-openbook-data-sharing',
        data() {
            return {
                stepNumber: 1,
                optionalDataSharingEnabled: false,
                customOptionalDataSharingEnabled: false,
                inspectDataOpen: false,
                availableData: [
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.name'),
                        name: 'name',
                        type: 'text',
                        value: this.songipy('descriptions.name'),
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.email'),
                        name: 'email',
                        type: 'text',
                        value: this.songipy('descriptions.email'),
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.profile_picture'),
                        name: 'profile_picture',
                        type: 'image',
                        value: 'https://vignette.wikia.nocookie.net/pulpfiction/images/b/b6/Jules.jpg/revision/latest?cb=20090501131406',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.age_range'),
                        name: 'age_range',
                        type: 'text',
                        value: '35-40',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.gender'),
                        name: 'gender',
                        type: 'text',
                        value: this.songipy('descriptions.gender'),
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.language'),
                        name: 'language',
                        type: 'text',
                        value: this.songipy('descriptions.language'),
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.country_of_birth'),
                        name: 'birthplace_country',
                        type: 'text',
                        value: this.songipy('descriptions.country'),
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.friends'),
                        name: 'friends_list',
                        type: 'list',
                        value: [],
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.birthday'),
                        name: 'birthday',
                        type: 'text',
                        value: this.songipy('descriptions.birthday'),
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: this.$t('manifesto.examples.can_receive_following_data.likes'),
                        name: 'user_likes',
                        type: 'list',
                        value: [],
                        required: false,
                        enabled: false
                    }
                ]
            }
        },
        watch: {
            optionalDataSharingEnabled: function (optionalDataSharingEnabled) {
                if (!this.customOptionalDataSharingEnabled) {
                    if (optionalDataSharingEnabled) {
                        this.enableAllOptionalSharedData();
                    } else {
                        this.disableAllOptionalSharedData();
                    }
                }
            }
        },
        computed: {
            requiredSharedData() {
                return this.availableData.filter((dataItem) => {
                    return dataItem.required;
                });
            },
            optionalSharedData() {
                return this.availableData.filter((dataItem) => {
                    return !dataItem.required;
                });
            },
            enabledOptionalSharedData() {
                return this.optionalSharedData.filter((dataItem) => {
                    return dataItem.enabled;
                });
            },
            sharedData() {
                let sharedData = this.requiredSharedData;
                if (this.optionalDataSharingEnabled) {
                    sharedData = sharedData.concat(this.enabledOptionalSharedData)
                }
                return sharedData;
            },
            requiredSharedDataString() {
                return this.$t('manifesto.examples.songipy.in_order_to_continue', {
                    required_data: concatenate(this.requiredSharedData, 'readableName', this.$t('manifesto.examples.common.last_item'))
                });
            },
            optionalDataString() {
                return this.$t('manifesto.examples.songipy.optionally', {
                    optional_data: concatenate(this.optionalSharedData, 'readableName', this.$t('manifesto.examples.common.last_item'))
                });
            },
            optionalEnabledDataString() {
                return this.$t('manifesto.examples.songipy.optionally', {
                    optional_data: concatenate(this.enabledOptionalSharedData, 'readableName', this.$t('manifesto.examples.common.last_item'))
                });
            }
        },
        methods: {
            /**
             * The step where users are asked to proceed with Openbook
             */
            goToStep1() {
                this.stepNumber = 1;
            },
            /**
             *  The step where users are informed over what they will share
             */
            goToStep2() {
                if (this.enabledOptionalSharedData.length === 0) {
                    this.customOptionalDataSharingEnabled = false;
                    this.optionalDataSharingEnabled = false;
                }
                this.stepNumber = 2;
            },
            /**
             * The step where users can select which optional data to share
             */
            goToStep3() {
                this.customOptionalDataSharingEnabled = true;
                this.stepNumber = 3;
            },
            /**
             * The step where users are informed they have shared the data
             */
            goToStep4() {
                this.stepNumber = 4;
            },
            songipy(str) {
                return this.$t(`manifesto.examples.songipy.${str}`);
            },
            disableAllOptionalSharedData() {
                this.availableData = this.availableData.map((dataItem) => {
                    if (!dataItem.required) {
                        dataItem.enabled = false;
                    }
                    return dataItem;
                });
            },
            enableAllOptionalSharedData() {
                this.availableData = this.availableData.map((dataItem) => {
                    if (!dataItem.required) {
                        dataItem.enabled = true;
                        dataItem.enabledByUser = false;
                    }
                    return dataItem;
                });
            },
            wantsToLearnMoreAboutSecureApps() {
                this.$dialog.alert({
                    message: this.$t('manifesto.examples.songipy.safe_app_modal'),
                    confirmText:  this.$t('manifesto.examples.common.btn_got_it')
                })
            },
            wantsToDisplayListWithName(name) {
                const message = this.$t('manifesto.examples.songipy.list_modal', { data_name: name });
                this.$dialog.alert({
                    message,
                    confirmText: this.$t('manifesto.examples.common.btn_got_it')
                });
            },
            wantsToToggleItem(dataItem) {
                if (!dataItem.required) {
                    dataItem.enabled = !dataItem.enabled;
                }
            }
        }
    }
</script>

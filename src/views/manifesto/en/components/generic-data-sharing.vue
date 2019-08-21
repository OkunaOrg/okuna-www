<template>
    <div class="columns is-mobile">
        <div class="column">
            <div class="box step-container" v-bind:class="{}">
                <div v-if="stepNumber === 1">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-danger is-large is-outlined app-logo is-rounded" disabled>
                                <i class="fas fa-wifi app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            {{ evilCorp('before_you_can_enjoy') }}
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media" @click="goToStep2()">
                                <span class="icon"><i
                                    class="fas fa-anchor"></i></span><span>{{ evilCorp('continue') }}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber === 2" class="second-step">
                    <div class="columns is-multiline">
                        <div class="column is-12 has-text-centered">
                            <button class="button is-danger is-large is-outlined app-logo" disabled>
                                <i class="fas fa-wifi app-logo__icon"></i>
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <div v-html="evilCorp('will_receive')">
                            </div>
                            <span v-if="sharedData.length > 1">{{ sharedDataString }}</span>
                            <span v-else>{{ $t('manifesto:manifesto.examples.evilcorp.will_receive_list', { requested_data: sharedData[0].name }) }}</span>
                            <div>
                                <b-tooltip
                                    :label="publicProfile"
                                    position="is-bottom" type="is-dark" multilined>
                                    <i class="icon is-small fas fa-info-circle info-icon"></i>
                                </b-tooltip>
                            </div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <a class="button is-borderless" @click="goToStep3()">
                                <span class="icon">
                                    <i class="fas fa-pencil-alt"></i>
                                </span>
                                <span>
                                     {{ evilCorp('edit') }}
                                </span>
                            </a>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media is-medium" @click="goToStep4()">
                                {{ $t('manifesto:manifesto.examples.common.btn_continue') }}
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <a class="is-medium info-icon" @click="goToStep1()">
                                {{ $t('manifesto:manifesto.examples.common.btn_cancel') }}
                            </a>
                        </div>
                    </div>
                </div>
                <div v-else-if="stepNumber ===3">
                    <div class="columns is-mobile is-multiline">
                        <div class="column is-12">
                            <div class="columns">
                                <div class="column is-narrow">
                                    <button class="button" @click="goToStep2()">
                                        <span class="icon">
                                            <i class="fas fa-chevron-left"></i>
                                        </span>
                                        <span>{{ $t('manifesto:manifesto.examples.common.btn_back') }}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12" v-for="dataItem of availableData">
                            <div class="columns is-mobile">
                                <div class="column is-10 is-size-6">
                                    <div>
                                        <strong>{{dataItem.name}}</strong>
                                        <span v-if="dataItem.required"> {{ $t('manifesto:manifesto.examples.common.required') }}</span>
                                    </div>
                                    <div class="is-size-7">
                                        {{dataItem.description}}
                                    </div>
                                </div>
                                <div class="column">
                                    <input type="checkbox" :disabled="dataItem.required" v-model="dataItem.enabled"/>
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
                                    {{ $t('manifesto:manifesto.examples.common.success') }}
                                </strong>
                            </div>
                            <span>
                                   {{ evilCorp('shared_the_info') }}
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span>{{ evilCorp('restart') }}</span>
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
        display: flex !important;
        justify-content: center;
        align-items: center;
        box-shadow:0 2px 3px hsla(0,0%,4%,.1), 0 0 0 1px hsla(0,0%,4%,.1) !important;
    }

    .app-logo {
        height: 55px;
        width: 55px;
        border-radius: 50%;
    }

    .info-icon {
        color: #afafaf;
        height: 0.7rem !important;
        width: 0.7rem !important;
    }
</style>

<script>
    import concatenate from '@/lib/concatenate';

    export default {
        name: 'ob-generic-data-sharing',
        data() {
            return {
                stepNumber: 1,
                publicProfileShared: true,
                availableData: [
                    {
                        name: this.$t('manifesto:manifesto.examples.can_receive_following_data.public_profile'),
                        required: true,
                        enabled: true,
                        description: this.evilCorp('descriptions.public_profile')
                    },
                    {
                        name: this.$t('manifesto:manifesto.examples.can_receive_following_data.friend_list'),
                        required: false,
                        enabled: true,
                        description: this.evilCorp('descriptions.friend_list')
                    },
                    {
                        name: this.$t('manifesto:manifesto.examples.can_receive_following_data.birthday'),
                        required: false,
                        enabled: true,
                        description: this.evilCorp('descriptions.birthday')
                    },
                    {
                        name: this.$t('manifesto:manifesto.examples.can_receive_following_data.likes'),
                        required: false,
                        enabled: true,
                        description: this.evilCorp('descriptions.likes')
                    },
                    {
                        name: this.$t('manifesto:manifesto.examples.can_receive_following_data.email'),
                        required: false,
                        enabled: true,
                        description: this.evilCorp('descriptions.email_address')
                    },
                ]
            }
        },
        computed: {
            sharedData() {
                return this.availableData.filter((dataItem) => {
                    return dataItem.enabled;
                });
            },
            sharedDataString() {
                return this.$t('manifesto:manifesto.examples.evilcorp.will_receive_list', {
                    requested_data: concatenate(this.sharedData, 'name', this.$t('manifesto:manifesto.examples.common.last_item'))
                });
            },
            publicProfile() {
                const data = [
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.name'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.profile_picture'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.age_range'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.gender'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.language'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.country'),
                    this.$t('manifesto:manifesto.examples.can_receive_following_data.other')
                ];

                return this.$t('manifesto:manifesto.examples.evilcorp.public_profile_includes', {
                    public_info: concatenate(data, null, this.$t('manifesto:manifesto.examples.common.last_item'))
                });
            }
        },
        methods: {
            goToStep1() {
                this.stepNumber = 1;
            },
            goToStep2() {
                this.stepNumber = 2;
            },
            goToStep3() {
                this.stepNumber = 3;
            },
            goToStep4() {
                this.stepNumber = 4;
            },
            evilCorp(str) {
                return this.$t(`manifesto:manifesto.examples.evilcorp.${str}`);
            }
        }
    }
</script>

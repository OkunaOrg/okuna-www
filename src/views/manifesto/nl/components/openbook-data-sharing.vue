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
                            Om gebruik te kunnen maken van Songipy, moet je inloggen met Openbook.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-primary" @click="goToStep2()">
                                <span>Inloggen met<strong>Open</strong>book</span>
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
                                    &nbsp; Je kunt veilig gebruik maken van de applicatie.
                                </span>
                            </div>
                            <div class="is-size-7">
                                Het is in lijn met onze strikte privacy en veiligheids voorwaarden.
                            </div>
                            <div class="is-size-7">
                                <a @click="wantsToLearnMoreAboutSecureApps()">
                                    Meer informatie
                                </a>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <span>Om verder te gaan heeft<strong>Songipy</strong> het volgende nodig</span>
                            <span v-for="(dataItem, index) of requiredSharedData">
                                <span v-if="index === (requiredSharedData.length - 1)">
                                    and
                                </span>
                                <span>
                                    {{dataItem.readableName}}
                                </span>
                                <span
                                    v-if="index !== (requiredSharedData.length - 2 ) && index !== (requiredSharedData.length - 1)">
                                    , &nbsp;
                                </span>
                                <span v-if="index === (requiredSharedData.length - 1)">
                                    .
                                </span>
                            </span>
                        </div>
                        <div v-if="customOptionalDataSharingEnabled"
                             class="column is-9">
                            <div class="field">
                                <b-checkbox size="is-medium" v-model="optionalDataSharingEnabled">
                                    <div class="is-size-7">
                                        <strong>Additioneel</strong>, kun je de volgende gegevens delen
                                        <span>je</span>
                                        <span v-if="enabledOptionalSharedData.length === 1">
                                            {{enabledOptionalSharedData[0].readableName}}
                                        </span>
                                        <span v-else v-for="(dataItem, index) of enabledOptionalSharedData">
                                {{ index === enabledOptionalSharedData.length - 1 ? 'and ' + dataItem.readableName : dataItem.readableName + ', '
                                            }}
                                    </span>
                                    </div>
                                </b-checkbox>
                            </div>
                        </div>
                        <div v-else class="column is-9">
                            <div class="field">
                                <b-checkbox size="is-medium" v-model="optionalDataSharingEnabled">
                                    <div class="is-size-7">
                                        <strong>Additioneel</strong>, wil de applicatie ook bij de volgende gegevens
                                        <span>je</span>
                                        <span v-for="(dataItem, index) of optionalSharedData">
                                {{ index === optionalSharedData.length - 1 ? 'and ' + dataItem.readableName : dataItem.readableName + ', '
                                            }}
                                    </span>
                                    </div>
                                </b-checkbox>
                            </div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-outlined is-small" @click="goToStep3()">
                                <span>
                                    Wijzig de optioneel gedeelde data
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
                                        Inspecteer gedeelde data
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
                                                    Lijst openen ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    Open afbeelding ↗
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
                                        Annuleer
                                    </button>
                                </div>
                                <div class="column is-6">
                                    <button class="button is-primary is-medium" @click="goToStep4()">
                                        Doorgaan
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
                                        <span>Back</span>
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
                                            <span v-if="dataItem.required">(required)</span>
                                        </div>
                                        <div class="is-size-7">
                                         <span v-if="dataItem.type === 'text'">
                                                {{dataItem.value}}
                                            </span>
                                            <a v-else-if="dataItem.type === 'list'"
                                               @click="wantsToDisplayListWithName(dataItem.readableName)">
                                                <span>
                                                    Open lijst ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    Open image ↗
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
                                    Success
                                </strong>
                            </div>
                            <span>
                                Openbook heeft nu de volgende informatie met Songipy gedeeld.
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span>  Prototype opnieuw starten</span>
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
                        readableName: 'name',
                        name: 'name',
                        type: 'text',
                        value: 'Jules Winnfield',
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: 'email address',
                        name: 'email',
                        type: 'text',
                        value: 'badmf@pfiction.com',
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: 'profile picture',
                        name: 'profile_picture',
                        type: 'image',
                        value: 'https://vignette.wikia.nocookie.net/pulpfiction/images/b/b6/Jules.jpg/revision/latest?cb=20090501131406',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'age range',
                        name: 'age_range',
                        type: 'text',
                        value: '35-40',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'gender',
                        name: 'gender',
                        type: 'text',
                        value: 'male',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'language',
                        name: 'language',
                        type: 'text',
                        value: 'en_US',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'country of birth',
                        name: 'birthplace_country',
                        type: 'text',
                        value: 'US',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'friends',
                        name: 'friends_list',
                        type: 'list',
                        value: [],
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'birthday',
                        name: 'birthday',
                        type: 'text',
                        value: '25-3-1997',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'likes',
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
                    message: `
                        <div class="content">
                        <p>In the non-prototype version, this will redirect you to a page with detailed information on secure applications.</p>
                        <p>Brifly put, secure applications are applications that don't abuse the data sharing system, allow the deletion of your data from their systems and know at all times where your data is.</p>
                        <p>More information about this follows below.</p>
                        </div>
                    `,
                    confirmText: 'Got it!'
                })
            },
            wantsToDisplayListWithName(name) {
                const message = `In the non-prototype version this would open a list with the full list of your ${name}`;
                this.$dialog.alert({
                    message,
                    confirmText: 'Got it!'
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

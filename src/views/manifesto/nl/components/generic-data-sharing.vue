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
                            Voordat je gebruik kan maken van onze gratis Wifi Hotspots, moet je inloggen met Openbook.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media" @click="goToStep2()">
                                <span class="icon"><i
                                    class="fas fa-anchor"></i></span><span>Ga verder met EvilCorp</span>
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
                            <div>
                                <strong>WiFi Hotspots-app</strong> ontvangt:
                            </div>
                            <span> je </span>
                            <span v-for="(dataItem, index) of sharedData" v-if="sharedData.length > 1">
                                <span v-if="index === (sharedData.length - 1)">
                                    and
                                </span>
                                <span>{{dataItem.name}}</span>
                                <span v-if="index !== (sharedData.length - 2 ) && index !== (sharedData.length - 1)">,</span>
                                <span v-if="index === (sharedData.length - 1)">.</span>
                            </span>
                            <span v-else>
                                {{ sharedData[0].name }}
                            </span>
                            <div>
                                <b-tooltip
                                    label="Your public profile includes name, profile picture, age range, gender, language, country and other public info."
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
                                    Wijzig
                                </span>
                            </a>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media is-medium" @click="goToStep4()">
                                Volgende
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <a class="is-medium info-icon" @click="goToStep1()">
                                Verwijderen
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
                                        <span>Ga Terug</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="column is-12" v-for="dataItem of availableData">
                            <div class="columns is-mobile">
                                <div class="column is-10 is-size-6">
                                    <div>
                                        <strong>{{dataItem.name}}</strong>
                                        <span v-if="dataItem.required">(required)</span>
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
                                    Success
                                </strong>
                            </div>
                            <span>
                                Het sociale netwerk heeft nu je data gedeeld met de applicatie.
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span> Voorbeeld herstarten</span>
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

    export default {
        name: 'ob-generic-data-sharing',
        data() {
            return {
                stepNumber: 1,
                publicProfileShared: true,
                availableData: [
                    {
                        name: 'openbare profiel',
                        required: true,
                        enabled: true,
                        description: 'Vincent Kuijpers, profielfoto, 33+ jaar oud, man en andere openbare informatie'
                    },
                    {
                        name: 'vriendenlijst',
                        required: false,
                        enabled: true,
                        description: 'Jaap Mooij, Martijn Potsma en 590 anderen.'
                    },
                    {
                        name: 'verjaardag',
                        required: false,
                        enabled: true,
                        description: 'Januari, 12, 1990'
                    },
                    {
                        name: 'e-mailadres',
                        required: false,
                        enabled: true,
                        description: 'vincent@kuijpers.com',
                    },
                ]
            }
        },
        computed: {
            sharedData() {
                return this.availableData.filter((dataItem) => {
                    return dataItem.enabled;
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
            }
        }
    }
</script>

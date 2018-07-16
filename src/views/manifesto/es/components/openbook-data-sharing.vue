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
                            Para usar Songipy debes continuar con Openbook.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-rainbow" @click="goToStep2()">
                                <span>Continuar con <strong>Open</strong>book</span>
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
                                    &nbsp; La aplicación es segura de usar.
                                </span>
                            </div>
                            <div class="is-size-7">
                                Ha cumplido con nuestras estrictas políticas de privacidad y seguridad.
                            </div>
                            <div class="is-size-7">
                                <a @click="wantsToLearnMoreAboutSecureApps()">
                                    Leer más
                                </a>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="section-separator"></div>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <span>Para continuar, <strong>Songipy</strong> requiere tu</span>
                            <span v-for="(dataItem, index) of requiredSharedData">
                                <span v-if="index === (requiredSharedData.length - 1)">
                                    y
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
                                        <strong>Opcionalmente</strong>, te gustaria compartir
                                        <span>tu</span>
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
                                        <strong>Opcionalmente</strong>, tambien quiere obtener
                                        <span>tu</span>
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
                                    Editar datos opcionales compartidos
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
                                        Inspeccionar datos compartidos
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
                                                    Abrir lista ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    Abrir imagen ↗
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
                                        Cancelar
                                    </button>
                                </div>
                                <div class="column is-6">
                                    <button class="button is-rainbow is-medium" @click="goToStep4()">
                                        Continuar
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
                                        <span>Atrás</span>
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
                                                    Abrir lista ↗
                                                </span>
                                            </a>
                                            <a v-else-if="dataItem.type === 'image'" :href="dataItem.value"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>
                                                    Abrir imagen ↗
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
                                    Éxito
                                </strong>
                            </div>
                            <span>
                                Openbook ha compartido tu información con Songipy.
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span>Reiniciar prototipo</span>
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
                        readableName: 'nombre',
                        name: 'nombre',
                        type: 'text',
                        value: 'Juan Gabriel',
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: 'email',
                        name: 'email',
                        type: 'text',
                        value: 'juan@gabriel.com',
                        required: true,
                        enabled: true
                    },
                    {
                        readableName: 'foto de perfíl',
                        name: 'foto_de_perfil',
                        type: 'image',
                        value: 'https://pbs.twimg.com/profile_images/2482125179/h7n47gumvq59uo9ns97l.jpeg',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'rango de edad',
                        name: 'rango_de_edad',
                        type: 'text',
                        value: '35-40',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'sexo',
                        name: 'sexo',
                        type: 'text',
                        value: 'hombre',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'idioma',
                        name: 'idioma',
                        type: 'text',
                        value: 'en_US',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'lugar de nacimiento',
                        name: 'lugar_de_nacimiento',
                        type: 'text',
                        value: 'MX',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'amigos',
                        name: 'lista_de_amigos',
                        type: 'list',
                        value: [],
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'cumpleaños',
                        name: 'cumpleanos',
                        type: 'text',
                        value: '25-3-1997',
                        required: false,
                        enabled: false
                    },
                    {
                        readableName: 'likes',
                        name: 'likes',
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
                        <p>En la versión no prototipo, esto te redirigirá a una página con información detallada sobre aplicaciones seguras.</p>
                        <p>En pocas palabras, las aplicaciones seguras son aplicaciones que no abusan del sistema de intercambio de datos, permiten la eliminación de tus datos de sus sistemas y saben en todo momento dónde están tus datos.</p>
                        <p>Más información a continuación.</p>
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

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
                            Antes de poder disfrutar de nuestros puntos de acceso wifi gratuitos, debes continuar con EvilCorp.
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media" @click="goToStep2()">
                                <span class="icon"><i
                                    class="fas fa-anchor"></i></span><span>Continuar con EvilCorp</span>
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
                                <strong>La aplicación WiFi Hotspots App</strong> recibirá:
                            </div>
                            <span> tu </span>
                            <span v-for="(dataItem, index) of sharedData" v-if="sharedData.length > 1">
                                <span v-if="index === (sharedData.length - 1)">
                                    y
                                </span>
                                <span>{{dataItem.name}}</span>
                                <span
                                    v-if="index !== (sharedData.length - 2 ) && index !== (sharedData.length - 1)">,</span>
                                <span v-if="index === (sharedData.length - 1)">.</span>
                            </span>
                            <span v-else>
                                {{ sharedData[0].name }}
                            </span>
                            <div>
                                <b-tooltip
                                    label="Tu perfil público incluye nombre, foto de perfil, rango de edad, sexo, idioma, país y otra información pública."
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
                                    Editar
                                </span>
                            </a>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button is-generic-social-media is-medium" @click="goToStep4()">
                                Continuar
                            </button>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <a class="is-medium info-icon" @click="goToStep1()">
                                Cancelar
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
                                        <span>Atrás</span>
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
                                    Éxito
                                </strong>
                            </div>
                            <span>
                                La red social ha compartido tu información con la aplicación.
                            </span>
                        </div>
                        <div class="column is-12 has-text-centered">
                            <button class="button" @click="goToStep1()">
                                <span class="icon is-small">
                                    <i class="fas fa-sync-alt"></i>
                                </span>
                                <span>Reiniciar ejemplo</span>
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
        box-shadow: 0 2px 3px hsla(0, 0%, 4%, .1), 0 0 0 1px hsla(0, 0%, 4%, .1) !important;
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
                        name: 'perfil público',
                        required: true,
                        enabled: true,
                        description: 'Juan Doe, foto de perfil, mayor de 33 años, hombre y otra información pública'
                    },
                    {
                        name: 'lista de amigos',
                        required: false,
                        enabled: true,
                        description: 'Miguel Chowder, Barbara Lamb y 590 más.'
                    },
                    {
                        name: 'cumpleaños',
                        required: false,
                        enabled: true,
                        description: 'Enero, 12, 1990'
                    },
                    {
                        name: 'likes',
                        required: false,
                        enabled: true,
                        description: 'El Daily Show, NBC y 978 más.'
                    },
                    {
                        name: 'correo',
                        required: false,
                        enabled: true,
                        description: 'juan@doe.com',
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

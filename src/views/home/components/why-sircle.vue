<template>
    <div class="columns">
        <div class="column">
            <div class="content has-text-centered padding-bottom-3x">
                <p class="is-size-3">
                    {{ $t('why_ob.title') }}
                </p>
                <p>
                    {{ $t('why_ob.subtitle') }}
                </p>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--privacy">
                            <i class="fas fa-eye-slash"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.zero_tracking') }}
                            </h4>
                            <p class="is-size-5 home-why-content">
                                <span>{{ $t('why_ob.zero_tracking_desc') }}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--honesty">
                            <i class="fas fa-user-lock"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.zero_spying') }}
                            </h4>
                            <p class="is-size-5 home-why-content">
                                {{ $t('why_ob.zero_spying_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--honesty">
                            <i class="fas fa-object-group"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.zero_ads') }}
                            </h4>
                            <p class="is-size-5 home-why-content">
                                {{ $t('why_ob.zero_ads_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--migration">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.data_protection') }}
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                {{ $t('why_ob.data_protection_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                            <i class="far fa-handshake"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.honest') }}
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                {{ $t('why_ob.honest_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--secure">
                            <i class="fas fa-suitcase"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.easy_to_migrate') }}
                            </h4>
                            <p class="is-size-5 home-why-content">
                                {{ $t('why_ob.easy_to_migrate_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--future">
                            <i class="fas fa-hourglass-start"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.future_proof') }}
                            </h4>
                            <p class="is-size-5 home-why-content">
                                {{ $t('why_ob.future_proof_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                            <i class="far fa-star"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.modern_design') }}
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                {{ $t('why_ob.modern_design_desc') }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                            <i class="fas fa-hand-holding-heart"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                {{ $t('why_ob.good_for_planet') }}
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                <span v-html="$t('why_ob.good_for_planet_desc')"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-why-container {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 3rem;
    }

    .home-why {
        max-width: 400px;
    }

    $home-why-icon-size: 5rem;

    .home-why-icon {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: $home-why-icon-size;
        width: $home-why-icon-size;
        border-radius: 50%;
        background: #690ddc;
        color: white;
    }

    .home-why-content {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(min-width: 770px) {
            min-height: 8rem;
        }
    }
</style>

<script>
    export default {
        name: 'ob-why-sircle'
    }
</script>

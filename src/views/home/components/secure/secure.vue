<template>
    <section class="section">
        <div>
            <div class="container">
                <div class="columns has-reverse-row-order-mobile is-height-100">
                    <div class="column">
                        <div class="columns is-centered is-vcentered is-height-100 is-mobile padding-top-4x-mobile">
                            <div class="column is-narrow">
                                <ob-secure-icon></ob-secure-icon>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="columns is-vcentered is-mobile is-height-100">
                            <div class="column content is-medium secure-text">
                                <h3>{{ $t('secure.title') }}</h3>
                                <p>
                                    {{ $t('secure.description') }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .secure-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .secure-heart{

    }
</style>

<script>
    import ObCuteRobot from "../../../../components/cute-robot.vue";
    import ObSecureIcon from "./components/secure-icon.vue";

    export default {
        components: {
            ObSecureIcon,
            ObCuteRobot},
        name: 'ob-secure'
    }
</script>


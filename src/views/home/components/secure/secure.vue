<template>
    <section class="section">
        <div class="hero-body">
            <div class="container">
                <div class="columns has-reverse-row-order-mobile">
                    <div class="column has-padding-top-2x-mobile">
                        <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                            <div class="column is-narrow">
                                <ob-cute-robot></ob-cute-robot>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="columns is-vcentered is-mobile is-height-100">
                            <div class="column content is-medium secure-text">
                                <h3>Secure</h3>
                                <p>
                                    With a tough and strict security policy, we make sure your data doesn't fall into the wrong hands.
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

    export default {
        components: {
            ObCuteRobot},
        name: 'ob-secure'
    }
</script>


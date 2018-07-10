<template>
    <section class="section">
        <div>
            <div class="container">
                <div class="columns has-reverse-row-order-mobile">
                    <div class="column">
                        <div class="columns is-centered is-vcentered is-height-100 is-mobile padding-top-4x-mobile">
                            <div class="column is-narrow">
                                <ob-disco-ball></ob-disco-ball>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div class="columns is-vcentered is-mobile is-height-100">
                            <div class="column content is-medium fun-text">
                                <h3>Fun!</h3>
                                <p>
                                    We're bringing back the social in social network, giving interaction with your peers
                                    meaning again.
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

    .fun-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .fun-heart {

    }
</style>

<script>

    import ObDiscoBall from "./components/disco-ball";

    export default {
        components: {ObDiscoBall},
        name: 'ob-fun'
    }
</script>


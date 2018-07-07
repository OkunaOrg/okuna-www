<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="columns is-vcentered is-centered">
                        <div class="column is-narrow content is-medium privacy-text">
                            <h3>Privacy-friendly</h3>
                            <p>
                                We don't monitor nor track anything you do. Surf the network with absolute peace of mind!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-heart></ob-heart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .privacy-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .privacy-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-privacy'
    }
</script>


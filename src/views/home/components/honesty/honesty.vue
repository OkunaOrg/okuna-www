<template>
    <section class="section">
        <div class="container">
            <div class="columns has-reverse-row-order-mobile">
                <div class="column has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-heart></ob-heart>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="columns is-vcentered is-mobile">
                        <div class="column content is-medium honesty-text">
                            <h3>Honest</h3>
                            <p>
                                All the code is open-source, so free for anyone to see, modify and reproduce. No room for unpleasant surprises.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .honesty-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .honesty-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-honesty'
    }
</script>


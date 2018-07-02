<template>
    <section class="section honesty-section">
        <div class="container">
            <div class="columns">
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
                            <h3 class="has-text-centered-mobile">Honest</h3>
                            <p>
                                All the code behind Openbook is open-source, meaning free for anyone to see, modify and
                                reproduce.
                            </p>
                            <p>
                                No tricks, no gimmicks, no unpleasant surprises.
                            </p>
                            <p>
                                <strong>Transparent and honest.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .honesty-section{
        padding: 5rem;
    }

    .honesty-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .honesty-heart{

    }
</style>

<script>
    import ObHeart from "./components/heart";

    export default {
        components: {ObHeart},
        name: 'ob-honesty'
    }
</script>


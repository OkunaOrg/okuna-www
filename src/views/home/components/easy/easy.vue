<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <div class="columns is-vcentered is-centered">
                        <div class="column is-narrow content is-medium easy-text">
                            <h3>Easy-peasy</h3>
                            <p>
                                Simple to use, even more to move into. Just drag-and-drop your old social media archive into Openbook and import all your photos, videos, chats and more!
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered is-height-100 is-mobile">
                        <div class="column is-narrow">
                            <ob-pets></ob-pets>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .easy-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .easy-heart {

    }
</style>

<script>
    import ObHeart from "./components/heart";
    import ObPets from "../../../faq/components/pets.vue";

    export default {
        components: {
            ObPets,
            ObHeart},
        name: 'ob-easy'
    }
</script>


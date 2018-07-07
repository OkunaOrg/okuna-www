<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-mobile is-multiline">
                    <div class="content is-medium column is-12 has-text-centered">
                        <h3 class="has-text-centered-mobile">Personal</h3>
                        <p>
                            Customize your profile the way you want. Be different, be yourself.
                        </p>
                    </div>
                    <div class="column is-12">
                        <ob-customization-screenshots></ob-customization-screenshots>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .personal-section {
        //padding: 5rem;
    }

    .personal-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .personal-heart {

    }
</style>

<script>

    import ObCustomizationScreenshots from "./components/customization-screenshots/customization-screenshots.vue";

    export default {
        components: {ObCustomizationScreenshots},
        name: 'ob-personal'
    }
</script>


<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container">
                <ob-customization-screenshots></ob-customization-screenshots>
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


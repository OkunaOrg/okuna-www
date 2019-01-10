<template>
    <figure class="image">
        <img class="personal-preview" :src="image" alt="Phone with personal features preview">
    </figure>
</template>

<style lang="scss">
    .personal-preview {
    }
</style>


<script>
    import image from './preview-black.png';

    export default {
        name: 'ob-personal-preview',
        data() {
            return {
                image: image
            }
        }
    }
</script>

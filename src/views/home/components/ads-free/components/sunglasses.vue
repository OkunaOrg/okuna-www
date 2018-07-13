<template>
    <div v-twemoji class="ads-free-symbol">
        😍
    </div>
</template>

<style lang="scss">

    .ads-free-symbol{
        img {
            width: 140px !important;
            height: auto !important;
        }
    }
</style>


<script>
    import sunglassesGif from './dealwithit-min.png';
    export default {
        name: 'ob-sunglasses',
        data(){
            return {
                sunglassesGif: sunglassesGif
            }
        }
    }
</script>

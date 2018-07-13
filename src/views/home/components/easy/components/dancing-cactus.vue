<template>
    <figure class="image">
        <img class="dancing-gif" :src="dancingGif">
    </figure>
</template>

<style lang="scss">
    .dancing-gif{
        height: 200px !important;
        width: auto !important;
    }
</style>


<script>
    import dancingGif from './dancing.gif';
    export default {
        name: 'ob-dancing-cactus',
        data(){
            return {
                dancingGif
            }
        }
    }
</script>

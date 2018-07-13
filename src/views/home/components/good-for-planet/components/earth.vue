<template>
    <figure class="image">
        <img class="earth-gif" :src="earthGif">
    </figure>
</template>

<style lang="scss">
    .earth-gif{
        height: 200px !important;
        width: auto !important;
        border-radius: 50%;
    }
</style>


<script>
    import earthGif from './earth-drawing.png';
    export default {
        name: 'ob-earth',
        data(){
            return {
                earthGif: earthGif
            }
        }
    }
</script>

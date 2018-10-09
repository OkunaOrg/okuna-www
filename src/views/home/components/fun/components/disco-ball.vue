<template>
    <figure class="image">
        <img class="disco-gif" :src="discoGif">
    </figure>
</template>

<style lang="scss">
    .disco-gif {
        height: 200px !important;
        width: auto !important;
    }
</style>

<script>
    import discoGif from './disco2.gif';

    export default {
        name: 'ob-disco-ball',
        data(){
            return {
                discoGif
            }
        }
    }
</script>

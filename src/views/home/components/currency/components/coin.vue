<template>
    <figure class="image ">
        <img class="coin-gif" :src="gif">
    </figure>
</template>

<style lang="scss">
    .coin-gif {
        width: 180px !important;
        height: auto !important;
    }
</style>


<script>
    import gif from './coin-gif.gif';

    export default {
        name: 'ob-coin',
        data() {
            return {
                gif
            }
        }
    }
</script>

<template>
    <figure class="image">
        <img class="people-gif" :src="peopleGif">
    </figure>
</template>

<style lang="scss">
    .people-gif{
        height: 300px !important;
        width: auto !important;
    }
</style>


<script>
    import peopleGif from './community.png';
    export default {
        name: 'ob-people',
        data(){
            return {
                peopleGif: peopleGif
            }
        }
    }
</script>

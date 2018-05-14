<template>
    <div>
        <h1>
            I'm manifesto!
        </h1>
    </div>
</template>

<script>
    import obGenericDataSharing from './components/generic-data-sharing.vue';
    import obOpenbookDataSharing from './components/openbook-data-sharing.vue';

    export default{
        components: {
            obGenericDataSharing,
            obOpenbookDataSharing
        }
    }
</script>
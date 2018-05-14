<template>
    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="openMenu()">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
    </a>
</template>

<style lang="scss">

</style>

<script>
    /**
     * The hamburger item that opens the mobile menu when clicked
     */

    import events from '../../../events';

    export default {
        name: 'ob-hamburger',
        mounted() {

        },
        methods: {
            openMenu() {
                events.emitWantsToOpenMenu();
            }
        }
    }

</script>

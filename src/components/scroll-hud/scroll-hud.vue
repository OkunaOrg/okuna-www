<template>
    <div v-show="visible" class="scroll-hud">
        <ob-scroll-to-top></ob-scroll-to-top>
    </div>
</template>

<style lang="scss">
    .scroll-hud{
        position: fixed;
        bottom: 0;
        left:0;
        right:0;
    }
</style>

<script>
    import debounce from 'lodash.debounce';

    import ObScrollToTop from "./components/scroll-to-top.vue";

    export default {
        components: {
            ObScrollToTop
        },
        name: 'ob-scroll-hud',
        data() {
            return {
                visible: false,
                visibleOffset: 600,
                scrollDebounce: 10
            }
        },
        mounted() {
            this.debouncedOnScroll = debounce(this.onScroll, this.scrollDebounce);
            window.addEventListener('scroll', this.debouncedOnScroll);

            // Bootstrap
            this.onScroll();
        },
        destroyed() {
            window.removeEventListener('scroll', this.debouncedOnScroll);
        },
        methods: {
            onScroll() {
                this.visible = (window.pageYOffset > this.visibleOffset);
            }
        }
    }
</script>

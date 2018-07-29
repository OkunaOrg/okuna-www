<template>
    <div v-show="visible" class="scroll-hud">
        <ob-social-sharer></ob-social-sharer>
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
    import ObSocialSharer from './components/social-sharer/social-sharer.vue';

    export default {
        components: {
            ObSocialSharer,
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

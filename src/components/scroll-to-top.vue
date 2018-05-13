<template>
    <button class="button is-primary scroll-to-top animated fadeInUp" v-scroll-to="'#main'" v-show="visible">
        <span class="icon">
            <i class="fas fa-arrow-up"></i>
        </span>
    </button>
</template>

<style lang="scss">

    $button-size: 45px;

    .scroll-to-top {
        position: fixed;
        bottom: 0;
        right: 0;
        height: $button-size;
        width: $button-size;
        margin: 1rem;
    }
</style>

<script>
    import debounce from 'lodash.debounce';

    export default {
        name: 'ob-scroll-to-top',
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

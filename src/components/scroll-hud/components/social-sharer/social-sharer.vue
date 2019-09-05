<template>
    <div class="social-sharer">
        <button class="button is-rainbow animated fadeInUp is-rounded" @click="onUserWantsToShare()">
        <span class="icon">
            <i class="fas fa-share-alt"></i>
        </span>
            <span>
            {{ $t('common:hud.share') }}
        </span>
        </button>
    </div>
</template>

<style lang="scss">

    $button-size: 45px;

    .social-sharer {
        border: solid 1px white !important;
        position: absolute !important;
        bottom: 0;
        left: 0;
        height: $button-size !important;
        width: $button-size !important;
        margin: 1rem;
    }
</style>

<script>
    import obSocialSharerModal from './components/social-sharer-modal.vue';

    export default {
        name: 'ob-social-sharer',
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$buefy.modal.open({
                    parent: this,
                    hasModalCard: true,
                    component: obSocialSharerModal
                })
            }
        }
    }
</script>

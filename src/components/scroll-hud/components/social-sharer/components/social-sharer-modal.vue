<template>
    <div>
        <social-sharing url="https://www.Okuna.social"
                        :title="$t('hud.share_title')"
                        :description="$t('hud.share_description')"
                        :quote="$t('hud.share_quote')"
                        hashtags="Okuna,socialnetwork,privacy"
                        twitter-user="OkunaSocial"
                        inline-template>
            <div class="columns is-mobile is-multiline">
                <network network="twitter" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--tw">
                        <span class="icon">
                            <i class="fab fa-twitter"></i>
                        </span>
                        <span>
                                {{ $t('hud.share_twitter') }}
                        </span>
                    </button>
                </network>
                <network network="facebook" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--fb">
                        <span class="icon">
                            <i class="fab fa-facebook-f"></i>
                        </span>
                        <span>
                                {{ $t('hud.share_fb') }}
                        </span>
                    </button>
                </network>
                <network network="linkedin" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--li">
                        <span class="icon">
                            <i class="fab fa-linkedin-in"></i>
                        </span>
                        <span>
                                {{ $t('hud.share_linkedin') }}
                        </span>
                    </button>
                </network>
                <network network="whatsapp" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth social-sharing-item-button social-sharing-item-button--wa">
                        <span class="icon">
                            <i class="fab fa-whatsapp"></i>
                        </span>
                        <span>
                                {{ $t('hud.share_wa') }}
                        </span>
                    </button>
                </network>
                <network network="email" class="column is-12 social-sharing-item">
                    <button class="button is-fullwidth">
                        <span class="icon">
                            <i class="fa fa-envelope"></i>
                        </span>
                        <span>
                                {{ $t('hud.share_email') }}
                        </span>
                    </button>
                </network>
            </div>
        </social-sharing>
    </div>
</template>
<style lang="scss">
    $facebook_color           : hsla(222, 47%, 40%, 1);     // #365397
    $twitter_color            : hsla(198, 100%, 47%, 1);    // #00a9f1
    $linkedin_color           : hsla(203, 100%, 35%, 1);    // #006db3
    $whatsapp_color           : #25D366;    // #006db3

    .social-sharing-item {
        padding: 0.5rem 0.75rem;

        &-button{
            &--fb{
                background: $facebook_color !important;
            }

            &--tw{
                background: $twitter_color !important;
            }

            &--li{
                background: $linkedin_color !important;
            }

            &--wa{
                background: $whatsapp_color !important;
            }

            color: white !important;
        }


    }


</style>

<script>
    export default {
        name: 'ob-social-sharer-modal'
    }
</script>

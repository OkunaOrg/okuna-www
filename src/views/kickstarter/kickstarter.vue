<template>
    <section class="hero kickstarter-bg" v-bind:class="{ 'is-medium': isMedium, 'is-large': isLarge }">
        <div class="hero-body">
            <div class="container has-padding-top-2x-mobile">
                <div class="box">
                    <div class="columns is-multiline">
                        <div class="column is-12 content has-text-centered padding-top-2x">
                            <h1>
                                <span class="has-text-kickstarter"> {{ $t('count_down.kickstarter') }}</span> <span
                                class="has-text-grey-dark">{{ $t('count_down.campaign_countdown') }}</span>
                            </h1>
                        </div>
                        <div class="column is-12">
                            <div class="has-text-centered">
                                <countdown :time="countdownDate">
                                    <template slot-scope="props">
                                        <div class="columns is-gapless">
                                            <div class="column">
                                                <strong
                                                    class="is-size-0 is-size-1-mobile has-text-primary is-rainbow-text">{{ props.days
                                                    }}</strong>
                                                <p
                                                    class="is-size-2"> {{ $tc('count_down.days', props.days) }} </p>
                                            </div>
                                            <div class="column">
                                                <strong
                                                    class="is-size-0 is-size-1-mobile has-text-primary is-rainbow-text">{{ props.hours
                                                    }}</strong>
                                                <p
                                                    class="is-size-2"> {{ $tc('count_down.hours', props.hours) }} </p>
                                            </div>
                                            <div class="column">
                                                <strong
                                                    class="is-size-0 is-size-1-mobile has-text-primary is-rainbow-text">{{ props.minutes
                                                    }}</strong>
                                                <p
                                                    class="is-size-2"> {{ $tc('count_down.minutes', props.minutes)
                                                    }} </p>
                                            </div>
                                            <div class="column">
                                                <strong
                                                    class="is-size-0 is-size-1-mobile has-text-primary is-rainbow-text">{{ props.seconds
                                                    }}</strong>
                                                <p
                                                    class="is-size-2"> {{ $tc('count_down.seconds', props.seconds)
                                                    }} </p>
                                            </div>
                                        </div>
                                    </template>
                                </countdown>
                            </div>
                        </div>
                        <div class="column is-12">
                            <div class="columns is-centered is-mobile">
                                <div class="column container-small">
                                    <div class="content has-text-centered">
                                        <p class="is-size-4 is-marginless padding-bottom-1x"
                                           v-html="$t('count_down.kickstarter_launch', [localTime, localDate])">
                                        </p>
                                        <div>
                                            <a target="_blank" rel="noopener noreferrer" href="https://open-book.org/kickstarter?v=2"
                                               class="animated button rubberBand is-rounded is-large is-rainbow has-margin-2x">
                                                <span class="icon"><i
                                                    class="fab fa-kickstarter-k"></i></span><span>{{ $t('splash_hero.notify_me')
                                                }}</span>
                                            </a>
                                            <button
                                                class="button is-large is-rounded share-button has-margin-2x"
                                                @click="onUserWantsToShare()">
                                        <span class="icon">
                                            <i class="fas fa-share-alt"></i>
                                        </span>
                                                <span>
                                            {{ $t('hud.share') }}
                                        </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .kickstarter-bg {
        background: url('./assets/iphones-min.png') no-repeat center center fixed;
        background-size: cover;
    }

</style>

<script>
    import VueCountdown from '@xkeshi/vue-countdown';
    import obSocialSharerModal from '../../components/scroll-hud/components/social-sharer/components/social-sharer-modal';

    export default {
        components: {
            countdown: VueCountdown
        },
        name: 'ob-kickstarter',
        methods: {
            onUserWantsToShare() {
                this.openShareModal();
            },
            openShareModal() {
                this.$modal.open({
                    parent: this,
                    component: obSocialSharerModal
                })
            }
        },
        props: {
            isMedium: false,
            isLarge: false
        },
        data() {
            const now = new Date();
            // Calculate GMT date from current timezone
            const gmtDate = new Date(now.valueOf() + now.getTimezoneOffset() * 60 * 1000);
            // Calculate current NL time which is GMT+2 in summer, so add 2 hours = 120 minutes
            const nlDate = new Date(gmtDate.valueOf() + 120 * 60 * 1000);
            const kickstarterDate = new Date(2019, 2, 15, 0, 0, 0, 0);  // September7th, 19:00 in NL

            const countdownDate = kickstarterDate - nlDate;

            // The following calculates NL 7pm into users time zone.
            const gmtKickstarterDate = new Date(kickstarterDate.valueOf() - (120 * 60 * 1000));
            const localKickstarterDate = new Date(gmtKickstarterDate.valueOf() - (now.getTimezoneOffset() * 60 * 1000));

            const localDate = localKickstarterDate.getDate();
            const localMinutes = localKickstarterDate.getMinutes() > 0 ? localKickstarterDate.getMinutes() : '00';
            const localHours = localKickstarterDate.getHours() > 9 ? localKickstarterDate.getHours() : `0${localKickstarterDate.getHours()}`;

            const localTime = `${localHours}:${localMinutes}`;

            return {
                countdownDate,
                localTime,
                localDate
            };
        },
    }
</script>

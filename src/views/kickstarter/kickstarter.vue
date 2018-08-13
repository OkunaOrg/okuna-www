<template>
    <div class="animated fadeIn kickstarter-bg">
        <section class="hero is-large">
            <div class="hero-body">
                <div class="container has-padding-2x">
                    <div class="column is-12">
                        <div class="has-text-centered">
                            <countdown :time="countdownDate">
                                <template slot-scope="props">
                                    <div class="columns is-gapless">
                                        <div class="column" v-on:mouseover="isActive = true">
                                            <strong v-bind:class="[{ 'is-rainbow-text': isActive }]"
                                                    class="is-size-0 is-size-1-mobile has-text-primary">{{ props.days }}</strong><p
                                            class="is-size-2"> {{ $tc('count_down.days', props.days) }} </p>
                                        </div>
                                        <div class="column" v-on:mouseover="isActive2 = true">
                                            <strong v-bind:class="[{ 'is-rainbow-text': isActive2 }]"
                                                class="is-size-0 is-size-1-mobile has-text-primary">{{ props.hours }}</strong><p
                                            class="is-size-2"> {{ $tc('count_down.hours', props.hours) }} </p>
                                        </div>
                                        <div class="column" v-on:mouseover="isActive3 = true">
                                            <strong  v-bind:class="[{ 'is-rainbow-text': isActive3 }]"
                                                class="is-size-0 is-size-1-mobile has-text-primary">{{ props.minutes }}</strong><p
                                            class="is-size-2"> {{ $tc('count_down.minutes', props.minutes) }} </p>
                                        </div>
                                        <div class="column" v-on:mouseover="isActive4 = true">
                                            <strong  v-bind:class="[{ 'is-rainbow-text': isActive4 }]"
                                                class="is-size-0 is-size-1-mobile has-text-primary">{{ props.seconds }}</strong><p
                                            class="is-size-2"> {{ $tc('count_down.seconds', props.seconds) }} </p>
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
                                    <p class="is-size-4 is-marginless padding-bottom-1x" v-html="$t('count_down.kickstarter_launch', [localTime, localDate])">
                                    </p>
                                    <div>
                                        <a target="_blank" rel="noopener noreferrer" href="http://eepurl.com/dDZIpf"
                                           class="animated button rubberBand is-rounded is-large padding-top-2x">
                                            <span class="icon"><i class="fab fa-kickstarter-k"></i></span><span>{{ $t('splash_hero.notify_me') }}</span>
                                        </a>
                                        <button class="button animated rubberBand is-large is-rounded padding-top-2x share-button" @click="onUserWantsToShare()">
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
        </section>
    </div>
</template>

<style lang="scss">
    .kickstarter-bg {
        background: url('./assets/kickstarter_bg.jpg') no-repeat 0 0;
        background-size: 100%;

        .container {
            background: white;
            @media (min-width: 768px) {
                width: 100%;
            }
        }

        .button.rubberBand {
            background: #fbba00;
            color: #fff;
            border: white;
            font-weight: bold;
            margin-right: 1em;

            &.share-button {
                background: #5dc7d8;
            }
        }
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
        data() {
            const now = new Date();
            // Calculate GMT date from current timezone
            const gmtDate = new Date(now.valueOf() + now.getTimezoneOffset() * 60 * 1000);
            // Calculate current NL time which is GMT+2 in summer, so add 2 hours = 120 minutes
            const nlDate =  new Date(gmtDate.valueOf() + 120 * 60 * 1000);
            const kickstarterDate = new Date(2018, 7, 19, 19, 0, 0, 0);  // Sunday August 19th, 19:00 in NL

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
                localDate,
                isActive: false,
                isActive2: false,
                isActive3: false,
                isActive4: false
            };
        },
    }
</script>

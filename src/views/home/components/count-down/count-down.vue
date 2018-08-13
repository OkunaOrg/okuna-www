<template>
    <section class="hero is-white">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered is-mobile is-multiline">
                    <div class="column is-12 padding-bottom-1x content">
                        <p class="is-size-3 has-text-centered">
                            <span class="has-text-kickstarter"> {{ $t('count_down.kickstarter') }}</span> <span class="has-text-grey-dark">{{ $t('count_down.campaign_countdown') }}</span>
                        </p>
                    </div>
                    <div class="column is-12">
                        <div class="has-text-centered">
                            <countdown :time="countdownDate">
                                <template slot-scope="props">
                                    <div class="columns is-gapless">
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.days }}</strong><span
                                            class="is-size-2"> {{ $tc('count_down.days', props.days) }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.hours }}</strong><span
                                            class="is-size-2"> {{ $tc('count_down.hours', props.hours) }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.minutes }}</strong><span
                                            class="is-size-2"> {{ $tc('count_down.minutes', props.minutes) }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.seconds }}</strong><span
                                            class="is-size-2"> {{ $tc('count_down.seconds', props.seconds) }} </span>
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
                                    <a target="_blank" rel="noopener noreferrer" href="http://eepurl.com/dDZIpf" class="button is-rainbow is-rounded is-large padding-top-2x">
                                        <span class="icon"><i class="fab fa-kickstarter-k"></i></span><span>{{ $t('splash_hero.notify_me') }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
    .countdown-content {
        max-width: 520px;
    }

    .countdown-image {
        max-width: 500px;
    }
</style>

<script>

    import VueCountdown from '@xkeshi/vue-countdown'

    export default {
        name: 'ob-count-down',
        components: {
            countdown: VueCountdown
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
                localDate
            };
        },
    }
</script>

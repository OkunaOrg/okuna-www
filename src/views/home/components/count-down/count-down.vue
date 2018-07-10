<template>
    <section class="hero is-white is-medium">
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
                                            class="is-size-2"> {{ $t('count_down.days') }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.hours }}</strong><span
                                            class="is-size-2"> {{ $t('count_down.hours') }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.minutes }}</strong><span
                                            class="is-size-2"> {{ $t('count_down.minutes') }} </span>
                                        </div>
                                        <div class="column">
                                            <strong class="is-size-0 is-size-1-mobile has-text-primary">{{ props.seconds }}</strong><span
                                            class="is-size-2"> {{ $t('count_down.seconds') }} </span>
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
                                    <p class="is-size-4 is-marginless padding-bottom-1x" v-html="$t('count_down.kickstarter_launch')">
                                    </p>
                                    <a target="_blank" rel="noopener noreferrer" href="http://eepurl.com/dvRRmD" class="button is-primary is-rounded is-large padding-top-2x">
                                        <span class="icon"><i class="fas fa-bell"></i></span><span>{{ $t('splash_hero.notify_me') }}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-narrow small-container padding-top-2x">
                        <figure class="image is-4by3 is-semi-rounded is-shadowed">
                            <img src="./assets/open-book-multiple-shirts.jpg">
                        </figure>
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
    import dayjs from 'dayjs';


    export default {
        name: 'ob-count-down',
        components: {
            countdown: VueCountdown
        },
        data() {
            const now = dayjs();
            const kickstarterDate = dayjs('2018-7-17');

            const timeTillKickstarterDate = kickstarterDate.diff(now);

            const countdownDate = timeTillKickstarterDate.valueOf();

            return {
                countdownDate
            };
        },
    }
</script>

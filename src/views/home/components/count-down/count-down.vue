<template>
    <div class="container">
        <div class="columns">
            <div class="column content has-text-centered">
                <div class="columns is-centered is-vcentered is-mobile" style="height: 100%">
                    <div class="column countdown-content">
                        <div class="content">
                            <p class="is-size-4 is-marginless padding-bottom-1x">
                                Kickstarter countdown
                            </p>
                            <span>
                                We will launch our Kickstarter campaign on the 15th of July of 2018.
                            </span>
                        </div>
                        <countdown :time="countdownDate">
                            <template slot-scope="props">
                                <strong class="is-size-3">{{ props.days }}</strong><span class="is-size-5"> days </span>
                                <strong class="is-size-3">{{ props.hours }}</strong><span
                                class="is-size-5"> hours </span>
                                <strong class="is-size-3">{{ props.minutes }}</strong><span
                                class="is-size-5"> minutes </span>
                                <strong class="is-size-3">{{ props.seconds }}</strong><span
                                class="is-size-5"> seconds </span>
                            </template>
                        </countdown>
                        <div class="columns is-mobile is-centered">
                            <div class="column is-narrow">
                                <a target="_blank" href="http://eepurl.com/dvRRmD" class="button is-primary is-rounded is-medium padding-top-2x">
                            <span class="icon">
                                <i class="fas fa-bell"></i>
                            </span>
                                    <span>
                                Notify me
                            </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="columns">
                    <div class="column">
                        <figure class="image is-4by3 is-semi-rounded is-shadowed">
                            <img src="./assets/open-book-multiple-shirts.jpg">
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .countdown-content {
        max-width: 520px;
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
            const kickstarterDate = dayjs('2018-7-1');

            const timeTillKickstarterDate = kickstarterDate.diff(now);

            const countdownDate = timeTillKickstarterDate.valueOf();

            return {
                countdownDate
            };
        },
    }
</script>

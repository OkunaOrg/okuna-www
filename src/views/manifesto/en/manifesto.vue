<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column has-padding-top-2x-mobile">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        {{ $t('manifesto.titles.main') }}
                                    </h1>
                                    <h2 class="title is-size-2 manifesto-text has-text-centered-mobile">
                                        {{ $t('manifesto.subtitles.main') }}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column manifesto-gif">
                            <div class="columns is-centered is-vcentered is-mobile">
                                <div class="column is-narrow">
                                    <svg class="book-shelf" xmlns="http://www.w3.org/2000/svg"
                                         preserveAspectRatio="xMidYMid" viewBox="0 0 84 94" height="200" width="420">
                                        <path fill="none"
                                              d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"/>
                                        <g class="book-shelf__book book-shelf__book--one" fill-rule="evenodd">
                                            <path fill="#5199fc"
                                                  d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"/>
                                            <path fill="#afd7fb"
                                                  d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--two" fill-rule="evenodd">
                                            <path fill="#ff9868"
                                                  d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"/>
                                            <path fill="#d06061"
                                                  d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--three" fill-rule="evenodd">
                                            <path fill="#ff5068"
                                                  d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"/>
                                            <path fill="#d93368"
                                                  d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"/>
                                        </g>
                                        <g fill-rule="evenodd">
                                            <path class="book-shelf__shelf" fill="#ae8280"
                                                  d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"/>
                                            <path fill="#855f6d"
                                                  d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="box is-shadowless">
                    <p class="has-text-centered">
                        <span class="tag is-rainbow"> {{ $t('manifesto.common.reading_time') }}</span> &nbsp;&nbsp; 6 {{ $t('manifesto.common.reading_time_minutes') }}
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.titles.toc') }}</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#why" v-scroll-to="'#why'">
                                {{ $t('manifesto.titles.why') }}
                            </a>
                        </li>
                        <li>
                            <a href="#how" v-scroll-to="'#how'">
                                {{ $t('manifesto.titles.how') }}
                            </a>
                            <ul>
                                <li>
                                    <a href="#honest" v-scroll-to="'#honest'">
                                        {{ $t('manifesto.titles.honest') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#personal" v-scroll-to="'#personal'">
                                        {{ $t('manifesto.titles.customizable') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyfriendly" v-scroll-to="'#privacyfriendly'">
                                        {{ $t('manifesto.titles.secure') }}
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#explicitconsent" v-scroll-to="'#explicitconsent'">
                                                {{ $t('manifesto.titles.explicit_consent') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#safeapps" v-scroll-to="'#safeapps'">
                                                {{ $t('manifesto.titles.safe_apps') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacydefault" v-scroll-to="'#privacydefault'">
                                                {{ $t('manifesto.titles.privacy_by_default') }}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#easy" v-scroll-to="'#easy'">
                                     {{ $t('manifesto.titles.easy') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#fun" v-scroll-to="'#fun'">
                                      {{ $t('manifesto.titles.research') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#revenue" v-scroll-to="'#revenue'">
                                        {{ $t('manifesto.titles.revenue') }}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" id="why">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>🤔</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.titles.why') }} </h2>
                        <h4 class="subtitle is-5"> {{ $t('manifesto.subtitles.the_reason') }}</h4>
                    </div>
                    <br/>
                    <p>
                        <strong> {{ $t('manifesto.why.awesome') }}</strong>
                    </p>
                    <p>
                        {{ $t('manifesto.why.they_connect') }}
                    </p>
                    <p>
                        {{ $t('manifesto.why.sadly_nowadays') }}
                    </p>
                    <p>
                        {{ $t('manifesto.why.we_want_to_do_better') }}
                    </p>
                    <p>
                        {{ $t('manifesto.why.we_are_designing') }}.
                    </p>
                    <p>
                        <strong class="has-text-primary"> {{ $t('manifesto.why.a_brighter_social_network') }}</strong>
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="how">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>💡</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.titles.how') }}</h2>
                        <h4 class="subtitle is-5">{{ $t('manifesto.subtitles.how_are_we_creating') }}</h4>
                    </div>
                    <h3 id="honest">{{ $t('manifesto.titles.honest') }}</h3>
                    <p v-html="$t('manifesto.how.open_source')"></p>
                    <p v-html="$t('manifesto.how.30_percent')">
                    </p>
                    <h3 id="personal">
                        {{ $t('manifesto.titles.customizable') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.how.we_are_different') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.just_like_home') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.build_Okuna_together') }}
                    </p>
                    <h3 id="privacyfriendly">
                        {{ $t('manifesto.titles.secure') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.how.privacy_and_security') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.how_does_this_translate') }}
                    </p>
                    <h5> {{ $t('manifesto.examples.title') }}</h5>
                    <p>
                        {{ $t('manifesto.examples.normally') }}
                    </p>
                    <p>
                        {{ $t('manifesto.examples.public_wifi') }}

                    </p>
                    <p>
                        {{ $t('manifesto.examples.box_below') }}

                    </p>
                    <p>
                        <i>{{ $t('manifesto.examples.click') }}</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        {{ $t('manifesto.examples.congrats') }}

                    </p>
                    <h5> {{ $t('manifesto.examples.do_you_know') }}</h5>
                    <p>
                        {{ $t('manifesto.examples.hovered_icon') }}
                    </p>
                    <p v-html="$t('manifesto.examples.quote')"></p>
                    <p v-html="$t('manifesto.examples.what_qualifies')"></p>
                    <p>
                        {{ $t('manifesto.examples.people_share') }}
                    </p>
                    <p>
                        {{ $t('manifesto.examples.how_we_do_it') }}
                    </p>
                    <p>
                        {{ $t('manifesto.examples.awesome_music_app') }}

                    </p>
                    <p>
                        <i>{{ $t('manifesto.examples.click') }}</i>
                    </p>
                    <ob-openbook-data-sharing></ob-openbook-data-sharing>
                    <p>
                        {{ $t('manifesto.examples.did_you_spot') }}
                    </p>
                    <p>
                        {{ $t('manifesto.examples.most_important_ones') }}


                    </p>
                    <h5 id="explicitconsent">{{ $t('manifesto.titles.explicit_consent') }}</h5>
                    <p>
                        {{ $t('manifesto.how.crystal_clear') }}
                    </p>
                    <h5 id="safeapps"> {{ $t('manifesto.titles.safe_apps') }}</h5>
                    <p>
                        {{ $t('manifesto.how.will_be_reviewed') }}

                    </p>
                    <ul>
                        <li v-html="$t('manifesto.how.apps_will.only_request')">
                        </li>
                        <li v-html="$t('manifesto.how.apps_will.exact_location_of_data')">
                        </li>
                        <li v-html="$t('manifesto.how.apps_will.delete')">
                        </li>
                        <li v-html="$t('manifesto.how.apps_will.emergency_plan')">
                        </li>
                    </ul>
                    <p>
                        {{ $t('manifesto.how.once_they_meet') }}
                    </p>
                    <h5 id="privacydefault">{{ $t('manifesto.titles.privacy_by_default') }}</h5>
                    <p>
                        {{ $t('manifesto.how.optional_disabled_by_default') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.we_will_research') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.technologies') }}
                    </p>
                    <ul>
                        <li>
                            {{ $t('manifesto.how.technologies_list.crypto_enforced') }}
                        </li>
                        <li>
                            {{ $t('manifesto.how.technologies_list.e2e') }}
                        </li>
                        <li>
                            {{ $t('manifesto.how.technologies_list.public_key_crypto') }}
                        </li>
                        <li>
                            {{ $t('manifesto.how.technologies_list.crypto_algo') }}
                        </li>
                    </ul>
                    <p>
                        <strong>{{ $t('manifesto.how.generally_speaking') }}</strong>
                    </p>
                    <h3 id="easy">  {{ $t('manifesto.titles.easy') }}</h3>
                    <p>
                        {{ $t('manifesto.how.smooth_transition') }}
                    </p>
                    <p v-html="$t('manifesto.how.import_your_data')"></p>
                    <h3 id="fun">{{ $t('manifesto.titles.research') }}</h3>
                    <p>
                        {{ $t('manifesto.how.research_1') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.research_2') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.research_3') }}
                    </p>
                    <p>
                        {{ $t('manifesto.how.research_4') }}
                    </p>
                    <h3 id="revenue">
                        {{ $t('manifesto.titles.revenue') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.how.no_ads') }}
                    </p>
                    <p v-html=" $t('manifesto.how.okuna_gold')">
                    </p>
                    <p>
                        {{ $t('manifesto.how.digital_currency') }}
                    </p>
                    <p v-html="$t('manifesto.how.currency_article')">
                    </p>
                    <span class="is-size-7">
                        {{ $t('manifesto.gdpr_footnote') }}
                    </span>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                {{ $t('manifesto.still_have_questions') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-rainbow is-rounded is-medium">
                                {{ $t('manifesto.visit_faq') }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

    $generic-social-media-color: #4f6398;
    $generic-social-media-color-invert: white;
    $open-book-primary-color: #690ddc;
    $open-book-primary-color-invert: white;

    .manifesto-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .manifesto-gif {
        @media(max-width: 768px) {
            margin-top: 1rem;
        }
    }

    .is-generic-social-media {
        border: none !important;
        color: $generic-social-media-color-invert !important;

        background-color: $generic-social-media-color !important;

        &:hover, &:focus {
            background-color: $generic-social-media-color !important;
            color: $generic-social-media-color-invert;
        }
    }

    .is-primary-background {
        background-color: $open-book-primary-color !important;
    }

    .is-primary-color {
        color: $open-book-primary-color !important;
    }

    .is-generic-social-media-background {
        background-color: $generic-social-media-color !important;
    }

    // Bookshelf courtesy to the amazing Ryan
    // https://codepen.io/ryanmclaughlin/pen/XJopVe
    @keyframes book-bounce {
        0% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes shelf-lift {
        0% {
            transform: translateY(0) rotate(0);
        }
        20% {
            transform: translateY(-4px) rotate(10deg);
        }
        40% {
            transform: translateY(-4px) rotate(0);
        }
        40% {
            transform: translateY(-4px) rotate(-10deg);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    .book-shelf:hover {
        cursor: pointer;

        .book-shelf__book {
            animation: book-bounce 0.4s ease;
            animation-iteration-count: 1;
        }

        .book-shelf__book--two {
            animation-delay: 0.04s;
        }

        .book-shelf__book--three {
            animation-delay: 0.08s;
        }

        .book-shelf__shelf {
            animation: shelf-lift 0.4s ease;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
        }
    }


</style>

<script>
    import obGenericDataSharing from './components/generic-data-sharing.vue';
    import obOpenbookDataSharing from './components/data-sharing';
    import memeImg from './assets/meme.jpg';

    export default {
        name: 'ob-en-manifesto',
        components: {
            obGenericDataSharing,
            obOpenbookDataSharing
        },
        data() {
            return {
                memeImg
            }
        }
    }
</script>

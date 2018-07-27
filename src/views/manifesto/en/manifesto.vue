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
                                        {{ $t('manifesto.Manifesto') }}
                                    </h1>
                                    <h2 class="title is-size-2 manifesto-text has-text-centered-mobile">
                                        {{ $t('manifesto.The_proble') }}
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
                        <span class="tag is-rainbow"> {{ $t('manifesto.Reading_ti') }}</span> &nbsp;&nbsp; 6 minutes
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.Table_of_c') }}</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#why" v-scroll-to="'#why'">
                                {{ $t('manifesto.Why__') }}
                            </a>
                        </li>
                        <li>
                            <a href="#how" v-scroll-to="'#how'">
                                {{ $t('manifesto.How__') }}
                            </a>
                            <ul>
                                <li>
                                    <a href="#honest" v-scroll-to="'#honest'">
                                        {{ $t('manifesto._Honest') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#personal" v-scroll-to="'#personal'">
                                        {{ $t('manifesto._Persona') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyfriendly" v-scroll-to="'#privacyfriendly'">
                                        {{ $t('manifesto._Privacy') }}
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#explicitconsent" v-scroll-to="'#explicitconsent'">
                                                {{ $t('manifesto.Explicit_a') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#safeapps" v-scroll-to="'#safeapps'">
                                                {{ $t('manifesto.Safe_Appli') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacydefault" v-scroll-to="'#privacydefault'">
                                                {{ $t('manifesto.Privacy_by') }}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#easy" v-scroll-to="'#easy'">
                                     {{ $t('manifesto._Easy') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#fun" v-scroll-to="'#fun'">
                                      {{ $t('manifesto._Fun') }}
                                    </a>
                                </li>
                                <li>
                                    <a href="#revenue" v-scroll-to="'#revenue'">
                                        {{ $t('manifesto._Our_Rev') }}
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
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.Why__') }} </h2>
                        <h4 class="subtitle is-5"> {{ $t('manifesto.The_reason') }}</h4>
                    </div>
                    <br/>
                    <p>
                        <strong> {{ $t('manifesto.Social_net') }}</strong>
                    </p>
                    <p>
                        {{ $t('manifesto.They_conne') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Sadly_now') }}
                    </p>
                    <p>
                        {{ $t('manifesto.We_want_to') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Openbook_will_have') }} <strong class="has-text-primary"> {{ $t('manifesto.honest_pe') }}</strong>.
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
                        <h2 class="title is-3 is-spaced is-margin-top-small">{{ $t('manifesto.How__') }}</h2>
                        <h4 class="subtitle is-5">{{ $t('manifesto.How_will_w') }}</h4>
                    </div>
                    <h3 id="honest">{{ $t('manifesto._Honest') }}</h3>
                    <p>
                        {{ $t('manifesto.all_of_our_code') }} <strong> {{ $t('manifesto.open_sourc') }}</strong> {{ $t('manifesto.this_means_') }}

                    </p>
                    <p>
                        {{ $t('manifesto.additionally') }}  <strong> {{ $t('manifesto._of_our') }}</strong>
                        {{ $t('manifesto.for_example') }}

                    </p>
                    <h3 id="personal">
                        {{ $t('manifesto._Persona') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.Were_all_') }}
                    </p>
                    <p>
                        {{ $t('manifesto.On_Openboo') }}
                    </p>
                    <p>
                        {{ $t('manifesto.And_if_the') }}
                    </p>
                    <h3 id="privacyfriendly">
                        {{ $t('manifesto._Privacy') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.this_is_what_drove') }}
                    </p>
                    <p>
                        {{ $t('manifesto.How_does_t') }}
                    </p>
                    <h5> {{ $t('manifesto.Example') }}</h5>
                    <p>
                        {{ $t('manifesto.This_is_wh') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Lets_say_') }}

                    </p>
                    <p>
                        {{ $t('manifesto.The_box_be') }}

                    </p>
                    <p>
                        <i>{{ $t('manifesto.Go_ahead') }}</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        {{ $t('manifesto.Congrats') }}

                    </p>
                    <h5> {{ $t('manifesto.Do_you_kno') }}</h5>
                    <p>
                        {{ $t('manifesto.If_you_hov') }}
                    </p>
                    <p>
                        {{ $t('manifesto.your_public_profile') }} <i> <strong>{{ $t('manifesto.other_pub') }}</strong>"</i>
                    </p>
                    <p>
                        {{ $t('manifesto.what_qualifies') }} <i> {{ $t('manifesto.other_public_info') }}</i>  {{ $t('manifesto.and_why_wifi') }}
                    </p>
                    <p>
                        {{ $t('manifesto.People_sha') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Heres_how') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Lets_say_2') }}

                    </p>
                    <p>
                        <i>{{ $t('manifesto.Go_ahead') }}</i>
                    </p>
                    <ob-openbook-data-sharing></ob-openbook-data-sharing>
                    <p>
                        {{ $t('manifesto.Did_you_sp') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Here_are_t') }}


                    </p>
                    <h5 id="explicitconsent">{{ $t('manifesto.explicit_n_informd') }}</h5>
                    <p>
                        {{ $t('manifesto.We_make_su') }}
                    </p>
                    <h5 id="safeapps"> {{ $t('manifesto.Safe_appli') }}</h5>
                    <p>
                        {{ $t('manifesto.All_applic') }}

                    </p>
                    <ul>
                        <li v-html="$t('manifesto.only_request_the')">
                        </li>
                        <li v-html="$t('manifesto.have_the_exact')">
                        </li>
                        <li v-html="$t('manifesto.delete_all_your')">
                        </li>
                        <li v-html="$t('manifesto.have_an_emergency')">
                        </li>
                    </ul>
                    <p>
                        {{ $t('manifesto.Once_they_') }}
                    </p>
                    <h5 id="privacydefault">{{ $t('manifesto.Privacy_by') }}</h5>
                    <p>
                        {{ $t('manifesto.All_option') }}
                    </p>
                    <p>
                        {{ $t('manifesto.We_will_co') }}
                    </p>
                    <p>
                        {{ $t('manifesto.Some_examp') }}
                    </p>
                    <ul>
                        <li>
                            {{ $t('manifesto.Cryptograp') }}
                        </li>
                        <li>
                            {{ $t('manifesto.End_to_end') }}
                        </li>
                        <li>
                            {{ $t('manifesto.Public_key') }}
                        </li>
                        <li>
                            {{ $t('manifesto.Post_quant') }}
                        </li>
                    </ul>
                    <p>
                        <strong>{{ $t('manifesto.Generally_') }}</strong>
                    </p>
                    <h3 id="easy">  {{ $t('manifesto._Easy') }}</h3>
                    <p>
                        {{ $t('manifesto.Youve_pro') }}
                    </p>
                    <p v-html="$t('manifesto.migrating_to_ob')"></p>
                    <h3 id="fun">{{ $t('manifesto._Fun') }}</h3>
                    <p>
                        {{ $t('manifesto.Lets_not_') }}

                    </p>
                    <h3 id="revenue">
                        {{ $t('manifesto._Our_Rev') }}
                    </h3>
                    <p>
                        {{ $t('manifesto.Our_busine') }}
                    </p>
                    <p v-html=" $t('manifesto.instead_our_revenue')">
                    </p>
                    <p>
                        {{ $t('manifesto.for_every_transaction') }}
                    </p>
                    <p v-html="$t('manifesto.you_can_read_it')">
                    </p>
                    <span class="is-size-7">
                        {{ $t('manifesto._With_t') }}
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
                                {{ $t('manifesto.Still_have') }}
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-rainbow is-rounded is-medium">
                                {{ $t('manifesto.Visit_our_') }}
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
    import obOpenbookDataSharing from './components/openbook-data-sharing.vue';
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

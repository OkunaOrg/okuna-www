<template>
    <header>
        <nav class="navbar is-fixed-top is-transparent has-border-bottom-gray-light animated fadeInDown"
             role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="home" class="navbar-item is-size-4 has-text-primary">
                        <a href="#" class="header-logo"></a>
                        <span class="header-logo-separator"></span>
                        <span v-html="$t('global.okuna')"
                              class="has-text-logo is-size-5" style="padding-top: 5px"></span>
                    </router-link>
                    <ob-hamburger></ob-hamburger>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end header-links">
                        <router-link :to="'home'" class="navbar-item" active-class="is-active is-active--home">{{
                            $t('header.home') }}
                        </router-link>
                        <router-link :to="'about-us'" class="navbar-item" active-class="is-active is-active--about-us">
                            {{ $t('header.about_us') }}
                        </router-link>
                        <router-link :to="'manifesto'" class="navbar-item"
                                     active-class="is-active is-active--manifesto">{{ $t('header.manifesto') }}
                        </router-link>
                        <router-link :to="'contact-us'" class="navbar-item"
                                     active-class="is-active is-active--contact-us">{{ $t('header.contact_us') }}
                        </router-link>
                        <router-link :to="'faq'" class="navbar-item" active-class="is-active is-active--faq">{{
                            $t('header.faq') }}
                        </router-link>
                        <router-link :to="'angel'" class="navbar-item" active-class="is-active is-active--angel">{{
                            $t('header.angel') }}
                        </router-link>
                        <a href="https://medium.com/okuna" rel="noopener noreferrer" class="navbar-item"
                           target="_blank"
                        >{{ $t('header.blog') }}</a>
                        <a href="https://shwca.se/okuna" rel="noopener noreferrer" class="navbar-item"
                           target="_blank"
                        >{{ $t('header.press') }}</a>
                    </div>
                </div>
                <div class="navbar-item select-language is-hidden-mobile">
                    <b-dropdown class="is-right">
                        <div class="current-language" slot="trigger">
                            <span >{{getCurrentLang($i18n.locale)}} <i class="fas fa-angle-down"></i></span>
                        </div>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'en' }" v-on:click="changeLocale('en')">English <i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'de' }" v-on:click="changeLocale('de')">Deutsch<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'es' }" v-on:click="changeLocale('es')">Español<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'fr' }" v-on:click="changeLocale('fr')">Français<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'hu' }" v-on:click="changeLocale('hu')">Magyar<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'it' }" v-on:click="changeLocale('it')">Italiano<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'pt-br' }" v-on:click="changeLocale('pt-br')">Português (Brasil)<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'sv' }" v-on:click="changeLocale('sv')">Svenska<i class="fas fa-check"></i></b-dropdown-item>
                        <b-dropdown-item v-bind:class="{ active: $i18n.locale === 'tr' }" v-on:click="changeLocale('tr')">Türkçe<i class="fas fa-check"></i></b-dropdown-item>
                    </b-dropdown>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    .header-logo {
        background-image: url('../assets/logo.png');
        background-size: 30px 30px;
        background-repeat: no-repeat;
        background-position: center center;
        width: 40px;
        height: 40px;
    }

    .header-logo-separator {
        width: 1px;
        height: 25px;
        background: #fafafa;
        margin-right: 8px;
    }

    .header-links {
        .is-active {
            font-weight: bold;
            color: #690ddc !important;

            &--home {
                color: #6bd509 !important;
            }

            &--about-us {
                color: #379eff !important;
            }

            &--manifesto {
                color: #f6006f !important;
            }

            &--contact-us {
                color: #980df9 !important;
            }

            &--angel {
                color: #6ace8f !important;
            }

            &--faq {
                color: #ff9400 !important;
            }

            &--press {
                color: #ff251e !important;
            }
        }
    }

    .select-language {
        margin-left: 0.75em;

        .current-language {
            cursor: pointer;
        }

        .fa-angle-down {
            margin-left: 0.5em;
        }

        .fa-check {
            margin-left: 1em;
            display: none;
        }

        .active {
            .fa-check {
                display: inline-block;
            }
        }
    }

</style>

<script>
    import obHamburger from './components/hamburger.vue';

    export default {
        components: {
            obHamburger
        },
        methods: {
            getCurrentLang(locale) {
                switch (locale) {
                    case 'en':
                        return 'English';
                    case 'nl':
                        return 'Nederlands';
                    case 'gr':
                        return 'Ελληνικά';
                    case 'es':
                        return 'Español';
                    case 'hu':
                        return 'Magyar';
                    case 'fr':
                        return 'Français';
                    case 'de':
                        return 'Deutsch';
                    case 'no':
                        return 'Norsk';
                    case 'pt-br':
                        return 'Português (Brasil)';
                    case 'sv':
                        return 'Svenska';
                    case 'it':
                        return 'Italiano';
                    case 'tr':
                        return 'Türkçe';
                    default :
                        return 'English';
                }
            },
            changeLocale(locale) {
                const path = this.$router.currentRoute.path.split('/')[2];
                this.$router.push(`/${locale}/${path}`);
            }
        }
    }
</script>

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
                        >Press</a>
                    </div>
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
                    default :
                        return 'English'
                }
            },
            changeLocale(locale) {
                const path = this.$router.currentRoute.path.split('/')[2];
                // Temporal fix, $router.go doesn't work for some reason.
                window.location.href = `/${locale}/${path}`;
            }
        }
    }
</script>

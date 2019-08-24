<template>
    <div class="mobile-menu" v-bind:class="{ 'mobile-menu--open': isOpen }">
        <section class="hero is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item is-size-4" href="https://www.okuna.io">
                                <a href="#" class="header-logo"></a>
                                <span class="header-logo-separator"></span><span v-html="$t('common:global.okuna')"
                                                                                 class="has-text-circular"></span>
                            </a>
                            <div class="navbar-close navbar-item">
                                <button class="button is-outlined is-borderless navbar-close__button has-text-primary"
                                        @click="closeMenu()">
                                    <span class="icon is-size-3">
                                        <i class="fas fa-times"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

            <!-- Hero content: will be in the middle -->
            <div class="hero-body is-paddingless hero-body--mobile-menu">
                <div class="container">
                    <div class="columns is-mobile is-multiline">
                        <router-link :to="'home'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-border-top-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-home"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.home') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link :to="'about-us'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-info"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.about_us') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link :to="'manifesto'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-book-open"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.manifesto') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link :to="'contact-us'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.contact_us') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link :to="'angel'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.angel') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link :to="'faq'" active-class="mobile-menu-item--active"
                                     class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-question-circle"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.faq') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </router-link>
                        <a href="https://medium.com/okuna" rel="noopener noreferrer" target="_blank"
                           class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-newspaper"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.blog') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="https://shwca.se/okuna" rel="noopener noreferrer" target="_blank"
                           class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item">
                            <div class="columns is-mobile">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-newspaper"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.press') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right mobile-menu-item__chevron"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <b-collapse
                            :open="!isOpen"
                            class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-grey-dark mobile-menu-item mobile-language-selection">
                            <div class="columns is-mobile" slot="trigger" slot-scope="props">
                                <div class="column is-3">
                                    <div class="columns is-mobile is-centered is-vcentered">
                                        <div class="column is-narrow">
                                            <span class="icon">
                                                <i class="fas fa-language"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span>{{ $t('common:header.language') }}</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <span v-show="props.open === false"><i class="fas fa-chevron-right mobile-menu-item__chevron"></i></span>
                                                    <span v-show="props.open === true"><i class="fas fa-chevron-down mobile-menu-item__chevron"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-content">
                                <ul class="content">
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'en' }" v-on:click="changeLocale('en')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">English <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'de' }" v-on:click="changeLocale('de')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Deutsch <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'es' }" v-on:click="changeLocale('es')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Español <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'fr' }" v-on:click="changeLocale('fr')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Français <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'hu' }" v-on:click="changeLocale('hu')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Magyar <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'it' }" v-on:click="changeLocale('it')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Italiano <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'pt-br' }" v-on:click="changeLocale('pt-br')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Português (Brasil) <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'sv' }" v-on:click="changeLocale('sv')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Svenska <i class="fas fa-check"></i></div>
                                    </li>
                                    <li class="columns is-mobile" v-bind:class="{ active: currentLocale === 'tr' }" v-on:click="changeLocale('tr')">
                                        <div class="column"></div>
                                        <div class="column is-two-thirds">Türkçe <i class="fas fa-check"></i></div>
                                    </li>
                                </ul>
                            </div>
                        </b-collapse>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="hero is-small is-white">
                    <div class="hero-body">
                        <div class="columns is-mobile is-multiline">
                            <div class="column is-12">
                                <div class="columns is-mobile is-vcentered">
                                    <div class="column">
                                        <a href="https://twitter.com/OkunaSocial" class="is-flex is-vcentered"
                                           target="_blank" rel="noopener noreferrer">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column">
                                        <a href="https://github.com/OkunaOrg" class="is-flex is-vcentered"
                                           target="_blank" rel="noopener noreferrer">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-github"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column">
                                        <a href="https://www.producthunt.com/posts/okuna/"
                                           class="is-flex is-vcentered"
                                           target="_blank" rel="noopener noreferrer">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                                    <span class="icon"><i class="fab fa-product-hunt"></i></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column">
                                        <a href="https://www.linkedin.com/okuna/" class="is-flex is-vcentered"
                                           target="_blank" rel="noopener noreferrer">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                                    <span class="icon"><i class="fab fa-linkedin-in"></i></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column">
                                        <a href="https://www.facebook.com/okunasocial/" class="is-flex is-vcentered"
                                           target="_blank" rel="noopener noreferrer">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                                    <span class="icon"><i class="fab fa-facebook-f"></i></span>
                                                </div>
                                            </div>
                                        </a>
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
    .html-overflow-hidden {
        overflow: hidden;
    }

    .mobile-menu {
        overflow: hidden;
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-height: 100%;
        height: auto;
        background: #fafafa;
        display: none;

        &--open {
            display: block;
        }

        .column {
            padding: 0.65rem;
        }

        .hero-body {
            .container {
                height: 400px;
            }
        }

        @media (min-width: 1090px) {
            display: none !important;
        }
    }

    .mobile-menu-item {
        &--active {
            background: #eaeaea !important;
            font-weight: bold;

            .mobile-menu-item__chevron {
                display: none !important;
            }
        }
    }

    .hero-body--mobile-menu {
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .navbar-close {
        cursor: pointer;
        display: block;
        height: 4.25rem;
        position: relative;
        width: 4.25rem;
        margin-left: auto;

        &__button {
            background: none !important;
            border-radius: 0 !important;
            height: 100% !important;
            width: 100% !important;
        }
    }

    .mobile-language-selection {
        .card-content {
            padding: 0.5rem;

            .columns {
                margin: 0;
            }
        }

        .active {
            .fa-check {
                display: inline-block;
            }
        }

        .fa-check {
            margin-left: 1em;
            display: none;
        }
    }

</style>

<script>
    import events from './../events';

    export default {
        name: 'ob-mobile-menu',
        data() {
            return {
                isOpen: false
            }
        },
        mounted() {
            const eventRemovers = [
                events.onWantsToOpenMenu(this.onWantsToOpenMenu),
                events.onWantsToCloseMenu(this.onWantsToCloseMenu),
            ];

            this.removeAllEvents = () => {
                eventRemovers.forEach(eventRemover => eventRemover());
            }
        },
        destroyed() {
            this.removeAllEvents();
        },
        watch: {
            $route() {
                this.closeMenu();
            }
        },
        computed: {
            currentLocale() {
                return this.$i18n.i18next.language || window.localStorage.i18nextLng
            }
        },
        methods: {
            onWantsToOpenMenu() {
                document.getElementsByTagName('html')[0].className += ' html-overflow-hidden';
                this.openMenu();
            },
            onWantsToCloseMenu() {
                this.closeMenu();
            },
            openMenu() {
                this.isOpen = true;
            },
            closeMenu() {
                document.getElementsByTagName('html')[0].className = 'fontawesome-i2svg-active fontawesome-i2svg-complete';
                this.isOpen = false;
            },
            changeLocale(locale) {
                const path = this.$router.currentRoute.path.split('/')[2];
                this.$router.push(`/${locale}/${path}`);
            }
        }
    }
</script>

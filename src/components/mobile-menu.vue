<template>
    <div class="mobile-menu" v-bind:class="{ 'mobile-menu--open': isOpen }">
        <section class="hero is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <header class="navbar">
                    <div class="container">
                        <div class="navbar-brand">
                            <a class="navbar-item is-size-4 has-text-primary" href="https://open-book.org">
                                <strong>Open</strong>book.
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
                    <div class="columns">
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                        <router-link to="home" class="column is-12 is-size-5 has-border-bottom-gray-lighter has-text-black-bis mobile-menu__item">
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
                                            <span>Home</span>
                                        </div>
                                        <div class="column is-4">
                                            <div class="columns is-mobile is-centered is-vcentered">
                                                <div class="column is-narrow">
                                                    <i class="fas fa-chevron-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="hero is-small is-primary">
                    <div class="hero-body">
                        <div class="columns is-mobile is-multiline">
                            <div class="column is-12">
                                Follow us on
                            </div>
                            <div class="column is-12">
                                <div class="columns is-mobile">
                                    <div class="column is-2">
                                        <a href="https://twitter.com/Openbook_org" class="is-flex is-vcentered"
                                           target="_blank">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column is-2">
                                        <a href="https://github.com/OpenBookOrg" class="is-flex is-vcentered"
                                           target="_blank">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-github"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column is-2">
                                        <a href="https://www.reddit.com/user/openbook_org" class="is-flex is-vcentered"
                                           target="_blank">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-reddit-alien"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column is-2">
                                        <a href="https://gitter.im/openbook-org/Lobby" class="is-flex is-vcentered"
                                           target="_blank">
                                            <div class="columns is-mobile">
                                                <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-gitter"></i>
                                            </span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div class="column is-2">
                                        <a href="https://www.facebook.com/openbookorg/" class="is-flex is-vcentered"
                                           target="_blank">
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
    .mobile-menu {
        z-index: 999;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #fafafa;
        display: none;

        &--open {
            display: block;
        }

        @media (min-width: 1090px) {
            display: none !important;
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

    .menu-list {
        &-item {
            &__link {
                padding: 1rem !important;
                display: flex !important;
                align-items: center;
                justify-content: center;
                height: 60px;

                span {
                    margin: 0 0.5rem;
                }
            }
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
                events.onWantsToCloseMenu(this.onWantsToCloseMenu)
            ];

            this.removeAllEvents = () => {
                eventRemovers.forEach(eventRemover => eventRemover());
            }
        },
        destroyed() {
            this.removeAllEvents();
        },
        methods: {
            onWantsToOpenMenu() {
                this.openMenu();
            },
            onWantsToCloseMenu() {
                this.closeMenu();
            },
            openMenu() {
                this.isOpen = true;
            },
            closeMenu() {
                this.isOpen = false;
            }
        }
    }
</script>

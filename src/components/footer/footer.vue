<template>
    <footer class="hero is-small is-primary" id="footer">
        <div class="hero-head">
            <div class="hero is-small">
                <div class="hero-body">
                    <div class="navbar is-transparent is-primary">
                        <div class="container">
                            <div class="navbar-brand">
                                <div class="navbar-item">
                                    <router-link :to="'home'" class="navbar-item is-size-3">
                                        <span v-html="$t('global.openbook')"></span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-body">
            <div class="container">
                <div class="level">
                    <div class="level-left">
                        <div class="columns">
                            <div class="column is-narrow">
                                <ul>
                                    <li>
                                        <router-link :to="'home'" class="navbar-item" active-class="is-active">{{ $t('header.home') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'about-us'" class="navbar-item" active-class="is-active">{{ $t('header.about_us') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'manifesto'" class="navbar-item" active-class="is-active">{{ $t('header.manifesto') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'contact-us'" class="navbar-item" active-class="is-active">{{ $t('header.contact_us') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'jobs'" class="navbar-item" active-class="is-active">{{ $t('header.jobs') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'faq'" class="navbar-item" active-class="is-active">{{ $t('header.faq') }}</router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="column is-narrow">
                                <ul>
                                    <li>
                                        <router-link :to="'vulnerability-report'" class="navbar-item" active-class="is-active">{{ $t('footer.report_vulnerability') }}</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'press'" class="navbar-item" active-class="is-active">{{ $t('header.press') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="level-right">
                        <ul>
                            <li>
                                <a href="https://twitter.com/Openbook_org" class="is-flex is-vcentered" target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-twitter"></i>
                                            </span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.twitter') }}
                                        </div>
                                    </div>
                                </a>
                                <a href="https://github.com/OpenBookOrg" class="is-flex is-vcentered" target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-github"></i>
                                            </span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.github') }}
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.reddit.com/user/openbook_org" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-reddit-alien"></i>
                                            </span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.reddit') }}
                                        </div>
                                    </div>
                                </a>
                                <a href="https://gitter.im/openbook-org/Lobby" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-gitter"></i>
                                            </span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.gitter') }}
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/company/openbook-org/" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon">
                                                <i class="fab fa-linkedin-in"></i>
                                            </span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.linked_in') }}
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.producthunt.com/posts/openbook" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column is-narrow">
                                            <span class="icon"><i class="fab fa-product-hunt"></i></span>
                                        </div>
                                        <div class="column">
                                            <span>
                                                {{ $t('footer.product_hunt') }}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/openbookorg/" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
                                    <div class="columns is-mobile">
                                        <div class="column">
                                            <span class="icon"><i class="fab fa-facebook-f"></i></span>
                                        </div>
                                        <div class="column">
                                            {{ $t('footer.facebook') }}
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="hero-footer">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <div class="level has-padding-2x">
                            <div class="level-left">
                                <div class="content has-text-centered-mobile">
                                    ©  {{ $t('footer.the_ob_organization') }} | <a
                                    href="https://www.iubenda.com/privacy-policy/91224954"
                                    class="iubenda-white iubenda-embed " title="Privacy Policy" target="_blank" rel="noopener noreferrer">{{ $t('footer.privacy_policy') }} </a>
                                </div>
                            </div>
                            <div class="level-right">
                                <div class="content made-in-europe">
                            <span>
                                    {{ $t('footer.made_with') }}
                                </span>
                                    <span class="icon" style="color: #ff0000;">
                                    <i class="fas fa-heart"></i>
                                </span>
                                    <span>
                                     {{ $t('footer.in_europe') }}
                                    </span>
                                    <span class="icon is-medium" v-twemoji>🇪🇺</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
    .made-in-europe {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

<script>
    export default{
    }
</script>

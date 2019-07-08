<template>
    <footer class="hero is-small is-white has-border-top-gray-light" id="footer">
        <div class="hero-head">
            <div class="hero is-small">
                <div class="hero-body">
                    <div class="navbar is-transparent">
                        <div class="container">
                            <div class="navbar-brand">
                                <div class="navbar-item">
                                    <router-link :to="'home'" class="navbar-item is-size-3">
                                        <a href="#" class="footer-logo"></a><span class="footer-logo-separator"></span>
                                        <h3 v-html="$t('global.okuna')"></h3>
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
                                        <router-link :to="'home'" class="navbar-item" active-class="is-active">{{
                                            $t('header.home') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'about-us'" class="navbar-item" active-class="is-active">{{
                                            $t('header.about_us') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'manifesto'" class="navbar-item" active-class="is-active">{{
                                            $t('header.manifesto') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'contact-us'" class="navbar-item" active-class="is-active">{{
                                            $t('header.contact_us') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link :to="'faq'" class="navbar-item" active-class="is-active">{{
                                            $t('header.faq') }}
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                            <div class="column is-narrow">
                                <ul>
                                    <li>
                                        <router-link :to="'vulnerability-report'" class="navbar-item"
                                                     active-class="is-active">{{ $t('footer.report_vulnerability') }}
                                        </router-link>
                                    </li>
                                    <li>
                                        <a href="https://shwca.se/openbooksocial" rel="noopener noreferrer"
                                           class="navbar-item" target="_blank"
                                        >Press</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="level-right">
                        <ul>
                            <li>
                                <a href="https://twitter.com/OpenbookSocial" class="is-flex is-vcentered"
                                   target="_blank" rel="noopener noreferrer">
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
                                <a href="https://github.com/OpenbookOrg" class="is-flex is-vcentered" target="_blank"
                                   rel="noopener noreferrer">
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
                                    {{ $t('footer.the_ob_organization') }} ™️ | <a
                                    href="https://www.iubenda.com/privacy-policy/91224954"
                                    class="iubenda-white iubenda-embed " title="Privacy Policy" target="_blank"
                                    rel="noopener noreferrer">{{ $t('footer.privacy_policy') }} </a>
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
                                    &nbsp;
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

    .footer-logo {
        background-image: url('../assets/logo.png');
        background-size: 40px 40px;
        background-repeat: no-repeat;
        background-position: center center;
        width: 40px;
        height: 40px;
    }

    .footer-logo-separator {
        width: 1px;
        height: 25px;
        background: #fafafa;
        margin-right: 8px;
    }

</style>

<script>
    export default {}
</script>

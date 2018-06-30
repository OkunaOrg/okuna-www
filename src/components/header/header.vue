<template>
    <header>
        <nav class="navbar is-fixed-top is-transparent has-border-bottom-gray-light animated fadeInDown" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="home" class="navbar-item is-size-4">
                        <strong>Open</strong>book
                    </router-link>
                    <ob-hamburger></ob-hamburger>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end header-links">
                        <router-link to="home" class="navbar-item" active-class="is-active is-active--home">Home</router-link>
                        <router-link to="about-us" class="navbar-item" active-class="is-active is-active--about-us">About us</router-link>
                        <router-link to="manifesto" class="navbar-item" active-class="is-active is-active--manifesto">Manifesto</router-link>
                        <router-link to="contact-us" class="navbar-item" active-class="is-active is-active--contact-us">Contact us</router-link>
                        <router-link to="jobs" class="navbar-item" active-class="is-active is-active--jobs">Jobs</router-link>
                        <router-link to="faq" class="navbar-item" active-class="is-active is-active--faq">FAQ</router-link>
                        <router-link to="press" class="navbar-item" active-class="is-active is-active--press">Press</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
    .header-links{
        .is-active{
            font-weight: bold;

            &--home{
                color: #6bd509 !important;
            }

            &--about-us{
                color: #379eff !important;
            }

            &--manifesto{
                color: #f6006f !important;
            }

            &--contact-us{
                color: #980df9 !important;
            }

            &--jobs{
                color: #6ace8f !important;
            }

            &--faq{
                color: #ff9400 !important;
            }

            &--press{
                color: #ff251e !important;
            }
        }
    }

</style>

<script>
    import obHamburger from './components/hamburger.vue';

    export default{
        components: {
            obHamburger
        }
    }
</script>

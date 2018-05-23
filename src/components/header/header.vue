<template>
    <header>
        <nav class="navbar is-fixed-top is-transparent has-border-bottom-gray-light animated fadeInDown" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <router-link to="home" class="navbar-item is-size-4 has-text-primary">
                        <strong>Open</strong>book.
                    </router-link>
                    <ob-hamburger></ob-hamburger>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end header-links">
                        <router-link to="home" class="navbar-item" active-class="is-active">Home</router-link>
                        <router-link to="about-us" class="navbar-item" active-class="is-active">About us</router-link>
                        <router-link to="manifesto" class="navbar-item" active-class="is-active">Manifesto</router-link>
                        <router-link to="contact-us" class="navbar-item" active-class="is-active">Contact us</router-link>
                        <router-link to="jobs" class="navbar-item" active-class="is-active">Jobs</router-link>
                        <router-link to="faq" class="navbar-item" active-class="is-active">FAQ</router-link>
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
            color: #690ddc !important;
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

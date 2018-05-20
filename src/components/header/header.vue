<template>
    <header>
        <nav class="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item is-size-4 has-text-primary" href="https://open-book.org">
                        <strong>Open</strong>book.
                    </a>
                    <ob-hamburger></ob-hamburger>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-end">
                        <router-link to="home" class="navbar-item">Home</router-link>
                        <router-link to="about-us" class="navbar-item">About us</router-link>
                        <router-link to="manifesto" class="navbar-item">Manifesto</router-link>
                        <router-link to="contact-us" class="navbar-item">Contact us</router-link>
                        <router-link to="jobs" class="navbar-item">Jobs</router-link>
                        <router-link to="faq" class="navbar-item">FAQ</router-link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
    import obHamburger from './components/hamburger.vue';

    export default{
        components: {
            obHamburger
        }
    }
</script>

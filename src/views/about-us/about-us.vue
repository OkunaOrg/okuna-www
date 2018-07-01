<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column about-us-header-text">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        About us
                                    </h1>
                                    <h2 class="title is-size-2 trust-text has-text-centered-mobile">
                                        We want to build a tool for <span class="has-text-primary">good</span>.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column about-us-header-gif">
                            <div class="columns is-centered is-vcentered is-mobile padding-bottom-2x-mobile">
                                <div class="column is-narrow">
                                    <figure class="image trust-gif">
                                        <img class="is-rounded is-square trust-gif__img" :src="spinningWorldImg">
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div>
                <div class="columns is-centered">
                    <div class="column intro-text content">
                        <p class="is-size-4 has-text-centered small-container padding-bottom-1x">
                            <span class="has-text-primary"><strong
                                class="has-text-primary">Open</strong>book</span> is an open-source, zero tracking, zero spying, zero advertisement, secure social network that gives 30% of it's revenue towards making the world a better place, now and forever.
                        </p>
                    </div>
                </div>
                <div class="columns">
                    <div class="column intro-text content small-container">
                        <p class="is-size-5 small-container">
                            Founded in April 2018 in the international city of peace and justice, The Hague, Openbook is a project to make things right.
                        </p>
                        <p class="is-size-5 small-container">
                            A project to redefine social networks, a project to rethink the "free" internet, a project to bring transparency to the internet, a project to claim back our privacy.
                        </p>
                        <p class="is-size-5 small-container">
                            <strong>Openbook is a project to make the world a better place</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                How will we accomplish this?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="manifesto" class="button is-rainbow is-rounded is-medium">
                                Read our manifesto
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-3 padding-bottom-3x">
                        The humans behind <strong>Open</strong>book
                    </p>
                </div>
                <ob-team-members/>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to work with us?
                            </h3>
                        </div>
                        <div class="column">
                            <a href="#" class="button is-rainbow is-rounded is-medium">
                                Visit our jobs page
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-3 padding-bottom-1x">
                        Our ambassadors
                    </p>
                    <p class="is-size-6 is-marginless is-paddingless">
                        People that help us spread the word around and stand for everything we do.
                    </p>
                </div>
                <ob-ambassadors></ob-ambassadors>
            </div>
        </section>
        <section class="hero is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to become an ambassador?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="contact-us" class="button is-rainbow is-rounded is-medium">
                                Contact us
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style lang="scss">

    .about-us-header-text{
        @media(max-width: 768px){
            margin-top: 1rem;
        }
    }

    .about-us-header-gif{
        @media(max-width: 768px){
            margin-top: 1rem;
        }
    }

    .trust-text{
        @media (min-width: 768px){
            max-width:400px;
        }
    }

    .trust-gif{
        position: relative;
        display: flex !important;
        align-items: center;
        justify-content: center;

        &__img{
            max-width: 50%;
            height: auto;
        }
    }

    .intro-text{
        max-width: 900px;
    }

</style>


<script>
    import ObTeamMembers from "./components/team-members/team-members";
    import ObAmbassadors from "./components/ambassadors/ambassadors.vue";
    import spinningWorldImg from './assets/spinningworld.gif';

    export default{
        components: {
            ObAmbassadors,
            ObTeamMembers
        },
        data(){
            return {
                spinningWorldImg
            }
        }
    }
</script>

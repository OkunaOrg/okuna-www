<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container is-fluid">
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
                                        <img class="is-rounded is-square trust-gif__img" src="https://orig00.deviantart.net/b64a/f/2015/196/4/6/earth_3_0__animated__by_shaddow24-d91hqbn.gif">
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="small-container">
                <div class="columns is-centered">
                    <div class="column has-text-centered intro-text content is-medium">
                        <p>
                            Founded in 2018, <span class="has-text-primary"><strong
                            class="has-text-primary">Open</strong>book</span> is a project to make things right, a project to redefine how social networks operate, a project to re-think the "free" internet, a project to bring transparency in an era of closed walls, a project to break the digital chambers that separate us, a project to claim back our privacy, <strong>a project to make the world a better place</strong>.
                        </p>
                        <p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                How will we do this?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="manifesto" class="button is-white is-outlined is-rounded is-medium">
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
                        The humans behind Openbook
                    </p>
                </div>
                <ob-team-members/>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">
                    <p class="is-size-3 padding-bottom-3x">
                        Our ambassadors
                    </p>
                </div>
                <ob-team-members/>
            </div>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to work with us?
                            </h3>
                        </div>
                        <div class="column">
                            <a href="#" class="button is-white is-outlined is-rounded is-medium">
                                Visit our jobs page
                            </a>
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

    export default{
        components: {ObTeamMembers}
    }
</script>

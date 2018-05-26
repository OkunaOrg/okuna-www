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
                        <p class="title is-size-4">
                            <strong>In the year 2018, social networks are a destructive force in our society.</strong>
                        </p>
                        <br/>
                        <p>
                            Meant to connect us, they divide us by feeding us information that reinforce our personal beliefs, discouraging dialogue.
                        </p>
                        <br/>
                        <p>
                            Meant to help us share our treasured moments with our loved ones,  they share our information with third parties, working under economical, political or disruptive agendas.
                        </p>
                        <br/>
                        <p>
                            Meant to be a tool for good, they contribute to the development of a global mass surveillance network, threatening all of our civil liberties.
                        </p>
                        <br/>
                        <p>
                            Enough was enough.
                        </p>
                        <br/>
                        <p>
                            We set out to gather a team of extraordinary individuals to make things right, to build a tool for <strong class="has-text-primary">good</strong>.
                        </p>
                        <br/>
                        <p>
                            We set out to build <span class="has-text-primary"><strong class="has-text-primary">Open</strong>book</span>.
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
                                Want to know how will we do this?
                            </h3>
                        </div>
                        <div class="column">
                            <a href="#" class="button is-white is-outlined is-rounded is-medium">
                                Read our manifesto
                            </a>
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

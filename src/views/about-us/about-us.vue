<template>
    <div>
        <section class="hero is-fullheight hero--about-us">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light">
                                        About us
                                    </h1>
                                    <h2 class="title is-size-2 trust-text">
                                        We want to build a tool for <span class="has-text-primary">good</span>.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered is-mobile padding-bottom-2x">
                                <div class="column is-narrow">
                                    <figure class="image">
                                        <img class="is-rounded trust-gif" src="https://orig00.deviantart.net/b64a/f/2015/196/4/6/earth_3_0__animated__by_shaddow24-d91hqbn.gif">
                                    </figure>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column has-text-centered">
                                    <p>The home of the people we want to benefit with our tool.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column has-text-centered intro-text is-size-4">
                        <p class="title is-size-3">
                            <strong>In the year 2018, social networks are a destructive force in our society.</strong>
                        </p>
                        <br/>
                        <p>
                            Meant to connect us, they divide us by feeding us information that reinforce our personal beliefs and discourage dialogue.
                        </p>
                        <br/>
                        <p>
                            Meant to help us share our treasured moments with our loved ones,  they share our information with third parties guided by political, economical or disruptive agendas.
                        </p>
                        <br/>
                        <p>
                            Meant to be a tool for good, they contribute to the development of a global mass surveillance network, threatening all civil liberties.
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
        <section class="section">
            <ob-team-members/>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Want to know more?
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
    </div>
</template>


<style lang="scss">
    .hero--about-us{
        border-bottom: solid 1px #fafafa;
    }

    .trust-text{
        max-width:400px;
    }

    .trust-gif{
        max-width: 300px;
        height: auto;
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

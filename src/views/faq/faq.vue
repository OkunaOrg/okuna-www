<template>
    <div class="animated fadeIn">
        <section class="hero is-large has-border-bottom-gray">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns">
                        <div class="column">
                            <div class="columns is-centered padding-top-1x-mobile">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        FAQ
                                    </h1>
                                    <h2 class="title is-size-2 faq-text has-text-centered-mobile">
                                        The frequently asked questions.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow padding-top-1x-mobile">
                                    <ob-pets/>
                                    <div class="has-text-centered is-size-7">
                                        Our office dog hard at work.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="faq">
            <div class="small-container">
                <div class="content is-medium">
                    <h3>
                        Why now?
                    </h3>
                    <p>
                        After years of using and seeing existing platforms make questionable choices when it comes to the
                        privacy
                        and security of its users, we decided enough was enough.
                    </p>
                    <p>
                        We had hoped someone else would take on the challenge. That someone, somewhere would realize how
                        much of a difference this could make,
                        not only in the context of social networks, but in the context of the security and privacy of the
                        internet.
                    </p>
                    <p>
                        There were several attempts, and some of them still exist to this day. Sadly sooner or later, they
                        all gave up to
                        pursue other markets like micro-communities and business solutions. Perhaps they thought going after
                        the social network giants was too big of a challenge.
                    </p>
                    <p>
                        Well, it sure is. Luckily, we believe the greatest accomplishments of mankind are often the ones
                        that
                        posed the greatest challenges.
                    </p>
                    <p>
                        That being said, we are taking on the challenge.
                    </p>
                    <h3>
                        How does Openbook differ from other established alternative social networks like Diaspora, Mastodon,
                        Friendica, etc.?
                    </h3>
                    <p>
                        Briefly put, we are a privacy and security first social network.
                    </p>
                    <p>
                        Practically, this means we aim to have the functionality that MySpace, Facebook and other similar
                        networks have, but designed to be secure and privacy aware right from the start.
                    </p>
                    <p>
                        Some examples of this are
                    </p>
                    <ul>
                        <li>
                            No tracking, within or outside the network.
                        </li>
                        <li>
                            No deep learning algorithms analyzing your personal information together with your usage of the
                            platform to determine the content you are served (which are the source of <a href="https://en.wikipedia.org/wiki/Echo_chamber_(media)" target="_blank">echo chambers</a>).
                        </li>
                        <li>
                            End to end encryption as the default way to communicate (even on the browser).
                        </li>
                        <li>
                            Absolute control of your data (decentralised platforms cant do this). Our data sharing policy is is strict and transparent. You will always know where all your data is physically located and be able to delete it. Even with third party applications.
                        </li>
                    </ul>
                    <p>
                        Overall, other alternative social networks are too hard to use for normal people (like our grandpas and grandmas), try to fill in other market niches, or are making the same mistakes social media companies have made for the past few years in concern to the privacy and security of their users.
                    </p>
                    <h3>
                        How will you make money?
                    </h3>
                    <p>
                        Call us crazy but <strong>our business model is not and will never be advertisement</strong> (also
                        known as
                        your personal data).
                    </p>
                    <p>
                        We will build Openbook to be a platform for peer-to-peer services such as
                        marketplaces.
                    </p>
                    <p>
                        For example, you could sell your beloved Star Wars collection on the network in the same way you
                        could hire someone to walk your dog.
                    </p>
                    <p>
                        Applications built within the platform will benefit from the privacy and security of the ecosystem.
                    </p>
                    <p>
                        Apart from this, we are also looking into offering business services.
                    </p>
                    <p>
                        We would offer them help setting up their own private internal Openbook networks with extra business
                        features such as event planning, team work planning, payslips management and identity management.
                    </p>
                    <h3>
                        What if you don't meet your funding goals?
                    </h3>
                    <p>
                        If we don't meet our funding goals, we hope to serve as an inspiration for existing and upcoming
                        social
                        networks.
                    </p>
                    <p>
                        We hope they take note of our ideas and implement them. We hope they put their users privacy and
                        security
                        first.
                    </p>
                    <p>
                        And finally, we hope they realise new ways of making money can be thought of that don't involve
                        monetizing the
                        personal information of their users.
                    </p>
                </div>
            </div>
        </section>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Have another question?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="contact-us" class="button is-white is-outlined is-rounded is-medium">Send us a message</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .faq-text{
        @media (min-width: 768px){
            max-width:400px;
        }
    }

</style>

<script>
    import ObPets from "./components/pets";

    export default{
        components: {ObPets},
        name: 'ob-faq'
    }
</script>

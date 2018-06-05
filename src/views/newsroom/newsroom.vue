<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column">
                            <div class="columns is-centered has-padding-top-2x-mobile">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        Press
                                    </h1>
                                    <h2 class="title is-size-2 manifesto-text has-text-centered-mobile">
                                        Newsroom
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered contact-us-header-mailbox is-mobile">
                                <div class="column is-narrow">
                                    <ob-newspaper/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <h3>
                        Press release: Openbook; Social Network 2.0
                    </h3>
                    <h5 class="has-text-weight-normal">
                        Tuesday, 5th of June, 2018
                    </h5>

                    <p>
                        Press Release Openbook. Website Open / Countdown to Kickstarter Campaign 15th of July
                    </p>


                    <h4>
                        Context:
                    </h4>
                    <p>
                        Openbook will launch Tuesday 5th of June it’s new website including in depth information about
                        the
                        project, a revised manifesto, team members and its countdown to its crowdfunding campaign.
                        Preliminary screenshots and media resources are available on the press kit at
                        https://bit.ly/2L9kZwj.
                    </p>


                    <h4>
                        Quoted individuals
                    </h4>
                    <ul class="padding-bottom-3x">
                        <li>
                            Joel Hernández, Founder of Openbook.
                        </li>
                    </ul>
                    <h4 class="padding-top-2x">
                        Openbook; Social Network 2.0
                    </h4>
                    <p>
                        A social network start-up based in The Netherlands, soon to start its crowdfunding campaign on
                        the
                        15thof July on the platform Kickstarter, claims to be the answer to the rising concerns of
                        social
                        media.
                    </p>

                    <blockquote>
                        “Openbook is a step forward in the evolution of social networks. Day by day we find ourselves
                        struggling and failing to deal with the shortcomings of the first generation of social networks.
                        Complete lack of privacy, unethical business models based on personal information, the
                        increasing
                        social divide fuelled by digital echo chambers, user experiences designed to keep us attached to
                        our
                        screens. We are fixing all of that and more.”
                    </blockquote>

                    <p>
                        The source code for the social network is also said to be open-source, meaning free for anyone
                        to
                        download, inspect and reproduce.
                    </p>

                    <blockquote>
                        “Social networks play such an important role in our lives. We need to be able to trust that they
                        are
                        doing the right things. By making everything open source we make that trust verifiable.”
                    </blockquote>

                    <p>
                        As for what features to expect, it’s said it will include all the features you would expect from
                        a
                        social network like timelines, posts and messaging. Furthermore, it’s said users will be able to
                        migrate from other social networks seamlessly.
                    </p>

                    <blockquote>
                        “We like you, have put a tremendous amount of our time and data into current social networks. It
                        would be a shame to start all over. That is why we are building data migrators. Moving into
                        Openbook
                        will be seamless.”
                    </blockquote>

                    <blockquote>
                        “Another core component of Openbook is that its revenue model is sustainable and ethical. We do
                        not
                        do ads nor will we ever. Ads are the reason social networks started to collect increasingly more
                        information about their users in order to serve them personalized ads and increase revenue. This
                        combined with the social network’s little interest to protect the collected information is what
                        gave
                        rise to the loss of privacy and the inability to fix the problem. The revenue model of current
                        social networks is the problem itself.”
                    </blockquote>

                    <p>
                        The revenue model of Openbook is a mixture between helping the enterprise set their own private
                        social network for their employees and an open marketplace, initially for products and then
                        services.
                    </p>


                    <blockquote>
                        “The world is a marketplace, so is Openbook. Where other marketplaces have been for physical
                        products only, we will bring peer to peer services into the platform. For example, you could
                        sell
                        your beloved Star Wars collection on the network in the same way you could hire someone to walk
                        your
                        dog or be the DJ at your party.”
                    </blockquote>


                    <p>
                        And Joel is not alone in this journey. In a diverse team ranging from cyber-security experts
                        like
                        Jaya Baloo to internet hall of fame member and cryptography pioneer Phil Zimmermann, Openbook
                        has a
                        talented team ready to take on the challenge.
                    </p>


                    <blockquote>
                        “It won't be an easy task and we will need all the help we can get. Currently, we are completely
                        self-funded and most of us work part-time on the project. If we were to continue this way, it
                        would
                        take us years to build Openbook. We decided to go for crowdfunding because we want this to be a
                        project driven by people not by capital. It makes such a big difference on the decisions taken.”
                    </blockquote>

                    <p>
                        The crowdfunding campaign for Openbook will take place in the Kickstarter platform, on the
                        15thof
                        July, 2018.
                    </p>

                    <p>
                        If you want to learn more about it or keep up with the developments of Openbook, you can find them
                        online at https://open-book.orgor at Twitter @Openbook_org.
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="inquiries">
            <div class="small-container">
                <div class="content is-medium">
                    <p>
                        Missing something? Contact <a
                        href="mailto:lambrecht@open-book.org?subject=Press%20inquiry&body=">Lambrecht Wessels</a>.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .hero--press {
        position: relative;
        display: flex;
    }

    .press-separator {
        width: 100%;
        height: 1px;
        border: solid 1px black;
    }
</style>

<script>
    import ObNewspaper from "./components/newspaper.vue";
    import ObPressAsset from "./components/press-asset.vue";
    import ObPressKits from "./components/press-kits/press-kits";
    import ObPressPeople from "./components/press-people/press-people.vue";
    import ObLogos from "./components/logos/logos.vue";

    export default {
        components: {
            ObLogos,
            ObPressPeople,
            ObPressKits,
            ObNewspaper,
            ObPressAsset
        }
    }
</script>

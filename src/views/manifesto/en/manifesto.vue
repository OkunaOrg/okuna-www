<template>
    <div class="animated fadeIn">
        <section class="hero is-medium has-border-bottom-gray">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column has-padding-top-2x-mobile">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light has-text-centered-mobile">
                                        Manifesto
                                    </h1>
                                    <h2 class="title is-size-2 manifesto-text has-text-centered-mobile">
                                        The problem, the solution, the next steps.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column manifesto-gif">
                            <div class="columns is-centered is-vcentered is-mobile">
                                <div class="column is-narrow">
                                    <svg class="book-shelf" xmlns="http://www.w3.org/2000/svg"
                                         preserveAspectRatio="xMidYMid" viewBox="0 0 84 94" height="200" width="420">
                                        <path fill="none"
                                              d="M37.612 92.805L4.487 73.71c-2.75-1.587-4.45-4.52-4.45-7.687L.008 27.877c-.003-3.154 1.676-6.063 4.405-7.634L37.558 1.167c2.73-1.57 6.096-1.566 8.835.013l33.124 19.096c2.75 1.586 4.45 4.518 4.45 7.686l.028 38.146c.002 3.154-1.677 6.063-4.406 7.634L46.445 92.818c-2.73 1.57-6.096 1.566-8.834-.013z"/>
                                        <g class="book-shelf__book book-shelf__book--one" fill-rule="evenodd">
                                            <path fill="#5199fc"
                                                  d="M31 29h4c1.105 0 2 .895 2 2v29c0 1.105-.895 2-2 2h-4c-1.105 0-2-.895-2-2V31c0-1.105.895-2 2-2z"/>
                                            <path fill="#afd7fb"
                                                  d="M34 36h-2c-.552 0-1-.448-1-1s.448-1 1-1h2c.552 0 1 .448 1 1s-.448 1-1 1zm-2 1h2c.552 0 1 .448 1 1s-.448 1-1 1h-2c-.552 0-1-.448-1-1s.448-1 1-1z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--two" fill-rule="evenodd">
                                            <path fill="#ff9868"
                                                  d="M39 34h6c1.105 0 2 .895 2 2v24c0 1.105-.895 2-2 2h-6c-1.105 0-2-.895-2-2V36c0-1.105.895-2 2-2z"/>
                                            <path fill="#d06061"
                                                  d="M42 38c1.105 0 2 .895 2 2s-.895 2-2 2-2-.895-2-2 .895-2 2-2z"/>
                                        </g>
                                        <g class="book-shelf__book book-shelf__book--three" fill-rule="evenodd">
                                            <path fill="#ff5068"
                                                  d="M49 32h2c1.105 0 2 .86 2 1.92v25.906c0 1.06-.895 1.92-2 1.92h-2c-1.105 0-2-.86-2-1.92V33.92c0-1.06.895-1.92 2-1.92z"/>
                                            <path fill="#d93368"
                                                  d="M50 35c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1s-1-.448-1-1v-2c0-.552.448-1 1-1z"/>
                                        </g>
                                        <g fill-rule="evenodd">
                                            <path class="book-shelf__shelf" fill="#ae8280"
                                                  d="M21 60h40c1.105 0 2 .895 2 2s-.895 2-2 2H21c-1.105 0-2-.895-2-2s.895-2 2-2z"/>
                                            <path fill="#855f6d"
                                                  d="M51.5 67c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5zm-21 0c-.828 0-1.5-.672-1.5-1.5V64h3v1.5c0 .828-.672 1.5-1.5 1.5z"/>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hero-footer">
                <div class="box is-shadowless">
                    <p class="has-text-centered">
                        <span class="tag is-rainbow">Reading time</span> &nbsp;&nbsp; 6 minutes
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small">Table of contents</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#why" v-scroll-to="'#why'">
                                Why?
                            </a>
                        </li>
                        <li>
                            <a href="#how" v-scroll-to="'#how'">
                                How?
                            </a>
                            <ul>
                                <li>
                                    <a href="#honest" v-scroll-to="'#honest'">
                                        1. Honest.
                                    </a>
                                </li>
                                <li>
                                    <a href="#personal" v-scroll-to="'#personal'">
                                        2. Personal.
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyfriendly" v-scroll-to="'#privacyfriendly'">
                                        3. Privacy-friendly and secure.
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#explicitconsent" v-scroll-to="'#explicitconsent'">
                                                Explicit and Informed Consent
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#safeapps" v-scroll-to="'#safeapps'">
                                                Safe Applications
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacydefault" v-scroll-to="'#privacydefault'">
                                                Privacy by Default
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#easy" v-scroll-to="'#easy'">
                                        4. Easy.
                                    </a>
                                </li>
                                <li>
                                    <a href="#fun" v-scroll-to="'#fun'">
                                        5. Fun.
                                    </a>
                                </li>
                                <li>
                                    <a href="#revenue" v-scroll-to="'#revenue'">
                                        6. Our Revenue.
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section" id="why">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>🤔</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">Why?</h2>
                        <h4 class="subtitle is-5">The reason we're building yet another social network.</h4>
                    </div>
                    <br/>
                    <p>
                        <strong>Social networks are awesome.</strong>
                    </p>
                    <p>
                        They connect us, help us share treasured moments with our loved ones and provide us with funny cat videos.

                    </p>
                    <p>
                        Sadly, nowadays social networks aren’t so much about connecting people, instead they are all about making as much money
                        as possible out of people, no matter the consequences. For example the loss of privacy.
                    </p>
                    <p>
                        We want to do better, which is exactly why at Openbook we’re doing things differently.
                    </p>
                    <p>
                        Openbook will have the great things you’d expect from a social network: chats, posts, groups and events to name a few.
                        Plus, it will be <strong class="has-text-primary">honest, personal, privacy-friendly, secure and fun ;-)</strong>.
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="how">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>💡</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">How?</h2>
                        <h4 class="subtitle is-5">How will we create a tool for good?</h4>
                    </div>
                    <h3 id="honest">1. Honest.</h3>
                    <p>
                        All of our code is <strong>open-source.</strong> This means it’s free for everyone to see, reproduce and contribute to.
                        We’re transparent about how the social network works.

                    </p>
                    <p>
                        Additionally, in partnership with FoundersPledge, we’ll be giving <strong>30% of our revenue towards making the world a
                        better place.</strong> For example, education, climate-change prevention, mental-health and sanitisation.
                        It’s about time tech-companies benefit everyone.

                    </p>
                    <h3 id="personal">
                        2. Personal.
                    </h3>
                    <p>
                        We’re all different and that makes each of us unique and beautiful! We embrace this!
                    </p>
                    <p>
                        On Openbook you will not only be able to personalise your profile, but the entire network itself!
                        From changing the color of your homepage to adding plugins, you can make it as unique as yourself.
                    </p>
                    <p>
                        And if there’s anything you’re missing on Openbook, let us know. We want to build Openbook together.
                        We will create a special group where we encourage you to help us decide what we build next or what we should improve.
                        Let’s build the best social network ever!

                    </p>
                    <h3 id="privacyfriendly">
                        3. Privacy-friendly and secure

                    </h3>
                    <p>
                        This is what drove us to build Openbook. The privacy and security of our users will always be at the core of
                        everything we do. We don’t track anything you do, neither monetize your information nor share it without your
                        explicit and informed consent.
                    </p>
                    <p>
                        How does this translate to a real-life scenario?
                    </p>
                    <h5>Example</h5>
                    <p>
                        This is what data sharing normally looks like.
                    </p>
                    <p>
                        Let’s say you want to connect to a public WiFi hotspot ,
                        traditionally a window like the one below appears in your computer with the following:
                    </p>
                    <p>
                        The box below appears on your screen.
                    </p>
                    <p>
                        <i>(Go ahead, click around as you would normally)</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        Congrats! You just shared your personal information with a Wi-fi hotspot!
                    </p>
                    <h5> Do you know what data you just shared with the application?</h5>
                    <p>
                        If you hovered over the “i” icon for example, you may have noticed it says:
                    </p>
                    <p>
                        <i>"Your public profile includes name, profile picture, age range, gender, language, country <strong>and other public info.</strong>"</i>
                    </p>
                    <p>
                        What qualifies as <i>"other public info"?</i> And why would a WiFi hotspot want all this information from you?
                        Will it serve you faster Wi-Fi based on your gender or your age? And what’s going to happen with your data once they have it?
                    </p>
                    <p>
                        People share more of their information that they’re initially aware of and once the data has been shared, there’s no going back.
                    </p>
                    <p>
                        Here’s how we’re doing it:
                    </p>
                    <p>
                        Let's say now you downloaded the awesome music app everyone has been recommending to you. As
                        soon as you open the app, the box below shows up.
                    </p>
                    <p>
                        <i>(Go ahead, click around as you would normally)</i>
                    </p>
                    <ob-openbook-data-sharing></ob-openbook-data-sharing>
                    <p>
                        Did you spot the differences?
                    </p>
                    <p>
                        Here are the most important ones.
                    </p>
                    <h5 id="explicitconsent">Explicit and informed consent</h5>
                    <p>
                        We make sure it's always crystal clear what is being shared, so no pop-ups or vague descriptions.
                        You can also inspect it yourself, just to be sure.
                    </p>
                    <h5 id="safeapps">Safe applications</h5>
                    <p>
                        All applications will be reviewed by us. We will make sure they:
                    </p>
                    <ul>
                        <li>
                            only request the <strong>needed</strong> information
                        </li>
                        <li>
                            have the <strong>exact</strong> location of your data available for you, <strong>at all times</strong>
                        </li>
                        <li>
                            delete <strong>all</strong> your information if you’d revoke the permission
                        </li>
                        <li>
                            have an <strong>emergency plan</strong> in case of a data leak, and will <strong>notify us/you</strong>
                            immediately if that were to happen
                        </li>
                    </ul>
                    <p>
                        Once they meet these strict guidelines they will have a badge below their logo. On your personal dashboard you can pinpoint the exact locations of your shared data,
                        revoke application’s access and best of all, request deletion.
                    </p>
                    <h5 id="privacydefault">Privacy by default</h5>
                    <p>
                        All optional data sharing will be disabled by default, and it is up to you if you want to
                        give that application more of your data instead of the other way around.
                    </p>
                    <p>
                        We will continuously research and develop new ways to improve your privacy and security.
                    </p>
                    <p>
                        Some examples of the technology we'll be researching and developing:
                    </p>
                    <ul>
                        <li>
                            Cryptographically enforced data sharing policies
                        </li>
                        <li>
                            End to end encryption, even on the browser
                        </li>
                        <li>
                            Public key cryptography on the browser
                        </li>
                        <li>
                            Post-quantum cryptography algorithms and protocols
                        </li>
                    </ul>
                    <p>
                        <strong>Generally speaking, the less we know about you and the more you know about us, the better.</strong>
                    </p>
                    <h3 id="easy">4. Easy.</h3>
                    <p>
                        You’ve probably put a tremendous amount of time (and data) into your existing social networks already. We get that.
                        We wouldn’t want you to lose any friends, cherishable memories or miss out on parties over this.
                    </p>
                    <p>
                        Migrating to Openbook will be easy-peasy, with our simple drag-and-drop system.
                        Just download your data from your old social network<sup>1</sup> and transfer them to Openbook. Shazam!
                    </p>
                    <h3 id="fun">5. Fun.</h3>
                    <p>Let’s not leave this one out! We’re bringing back social by giving interactions with your friends more meaning.
                        Think about having levels of adoration and being able to show your enthusiasm more than once on a single post.
                        And since we don’t track your data, you not only will be free of ads, but we won’t fill in what we think you’d want to see for yourself.
                        No abracadabra-algorithms!
                    </p>
                    <h3 id="revenue">
                        6. Our revenue
                    </h3>
                    <p>
                        Our revenue model is not and will never be advertisements.
                    </p>
                    <p>
                        Instead, our revenue model will be based on a digital currency called <strong>Tip</strong>. It will be used to buy and sell goods and services, support content creators, subscribe to publishers, buy jacuzzis and more!
                    </p>
                    <p>
                        For every Tips transaction made in the network, we will take a small cut. Donations are the exception to this rule, we take nothing then.
                    </p>
                    <p>
                        You can read all about it in <a class="has-text-underlined" href="https://medium.com/openbook-org/so-how-will-openbook-make-money-daf99589643d" rel="noreferrer noopener" target="_blank">this article (6 mins approx. reading time)</a>
                    </p>
                    <span class="is-size-7">
                        [1] With the new GDPR regulation, social networks must allow it’s users to do so now.
                    </span>
                </div>
            </div>
        </section>
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Still have questions?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-rainbow is-rounded is-medium">
                                Visit our FAQ
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style lang="scss">

    $generic-social-media-color: #4f6398;
    $generic-social-media-color-invert: white;
    $open-book-primary-color: #690ddc;
    $open-book-primary-color-invert: white;

    .manifesto-text {
        @media (min-width: 768px) {
            max-width: 400px;
        }
    }

    .manifesto-gif {
        @media(max-width: 768px) {
            margin-top: 1rem;
        }
    }

    .is-generic-social-media {
        border: none !important;
        color: $generic-social-media-color-invert !important;

        background-color: $generic-social-media-color !important;

        &:hover, &:focus {
            background-color: $generic-social-media-color !important;
            color: $generic-social-media-color-invert;
        }
    }

    .is-primary-background {
        background-color: $open-book-primary-color !important;
    }

    .is-primary-color {
        color: $open-book-primary-color !important;
    }

    .is-generic-social-media-background {
        background-color: $generic-social-media-color !important;
    }

    // Bookshelf courtesy to the amazing Ryan
    // https://codepen.io/ryanmclaughlin/pen/XJopVe
    @keyframes book-bounce {
        0% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-10px);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    @keyframes shelf-lift {
        0% {
            transform: translateY(0) rotate(0);
        }
        20% {
            transform: translateY(-4px) rotate(10deg);
        }
        40% {
            transform: translateY(-4px) rotate(0);
        }
        40% {
            transform: translateY(-4px) rotate(-10deg);
        }
        80% {
            transform: translateY(0);
        }
        100% {
            transform: translateY(0);
        }
    }

    .book-shelf:hover {
        cursor: pointer;

        .book-shelf__book {
            animation: book-bounce 0.4s ease;
            animation-iteration-count: 1;
        }

        .book-shelf__book--two {
            animation-delay: 0.04s;
        }

        .book-shelf__book--three {
            animation-delay: 0.08s;
        }

        .book-shelf__shelf {
            animation: shelf-lift 0.4s ease;
            animation-iteration-count: 1;
            transform-origin: 50% 50%;
        }
    }


</style>

<script>
    import obGenericDataSharing from './components/generic-data-sharing.vue';
    import obOpenbookDataSharing from './components/openbook-data-sharing.vue';
    import memeImg from './assets/meme.jpg';

    export default {
        name: 'ob-en-manifesto',
        components: {
            obGenericDataSharing,
            obOpenbookDataSharing
        },
        data() {
            return {
                memeImg
            }
        }
    }
</script>

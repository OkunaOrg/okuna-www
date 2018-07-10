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
                                        Manifesto Espanyol
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
                        <span class="tag is-primary">Reading time</span> &nbsp;&nbsp; 6 minutes
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
                                    <a href="#openness" v-scroll-to="'#openness'">
                                        1. Openess.
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyandsecurity" v-scroll-to="'#privacyandsecurity'">
                                        2. Privacy and security.
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#datasharing" v-scroll-to="'#datasharing'">
                                                2.1 Better data sharing with applications.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacyfirst" v-scroll-to="'#privacyfirst'">
                                                2.2 Privacy as default.
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacyasajourney" v-scroll-to="'#privacyasajourney'">
                                                2.3 Privacy and security as a journey.
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#revenuemodel" v-scroll-to="'#revenuemodel'">
                                        3. A useful and sustainable revenue model.
                                    </a>
                                </li>
                                <li>
                                    <a href="#ethicaldesign" v-scroll-to="'#ethicaldesign'">
                                        4. Ethical design.
                                    </a>
                                </li>
                                <li>
                                    <a href="#givingback" v-scroll-to="'#givingback'">
                                        5. Giving back.
                                    </a>
                                </li>
                                <li>
                                    <a href="#migration" v-scroll-to="'#migration'">
                                        6. Seamless migration.
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#next" v-scroll-to="'#next'">
                                3. What's next
                            </a>
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
                        <strong>In the year 2018, social networks play a destructive role in our society.</strong>
                    </p>
                    <p>
                        Meant to connect us, they divide us by reinforcing our personal beliefs, isolating us from the
                        rest of the world.
                    </p>
                    <p>
                        Meant to help us share our treasured moments with our loved ones, they share our information
                        with questionable third parties which in turn, analyze us, classify us and manipulate us.
                    </p>
                    <p>
                        Meant to be a tool for good, they threaten our
                        freedom, our democracy, our peace, our society.
                    </p>
                    <p>
                        <strong>Enough is enough.</strong>
                    </p>
                    <p>
                        We gathered a team of extraordinary individuals to make things right, to build a tool for
                        <strong class="has-text-primary">good</strong>.
                    </p>
                    <p>
                        We set out to build the next generation social network, we set out to build <span
                        class="has-text-primary"><strong
                        class="has-text-primary">Open</strong>book</span>.
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
                    <h3 id="openness">1. Openness.</h3>
                    <p>
                        All of our code is and will continue being free and
                        open for everyone to see, reproduce and contribute to.
                    </p>
                    <p>
                        No tricks, no gimmicks, no unpleasant surprises.
                    </p>
                    <p>
                        By doing this we make sure we are bound to our mission.
                        If we were to ever deviate, we encourage the world to grab the source code and carry on with the
                        mission.
                    </p>
                    <h3 id="privacyandsecurity">
                        2. Privacy and security.
                    </h3>
                    <p>
                        Given our cyber security background, there is nothing we value more in a product than it's
                        privacy
                        and security.
                    </p>
                    <p>
                        We will embed privacy and security in the core of everything we do.
                    </p>
                    <h4 id="datasharing">
                        2.1 Better data sharing with applications
                    </h4>
                    <p>
                        One of the great benefits of having a social media account these days is being able to use it to
                        log
                        into other applications.
                    </p>
                    <p>
                        This is done through data sharing. The social network shares the information that the
                        application
                        <i>needs</i>
                        from you.
                    </p>
                    <h5>Example</h5>
                    <p>
                        This is what data sharing normally looks like.
                    </p>
                    <p>
                        Let's say you find yourself in a cafeteria. You notice there's an open WiFi network and you
                        connect
                        to it.
                    </p>
                    <p>
                        The box below appears on your screen.
                    </p>
                    <p>
                        <i>(Go ahead, click around as you would normally)</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        Did you spot the problems?
                    </p>
                    <h5> Problem #1: What data did you actually share with the application?</h5>
                    <p>
                        Can you name the exact data that was shared with the application?
                    </p>
                    <p>
                        You might say, <i>"well of course, it says clearly public profile, friend list, birthday, likes
                        and
                        email address"</i>.
                    </p>
                    <p>
                        But what is <i>"public profile"</i>? And did you click/hover the "<i
                        class="icon is-small fas fa-info-circle"></i>"
                        icon?
                    </p>
                    <p>
                        When you do, you'll get some more information.
                    </p>
                    <p><i>"Your public profile includes name, profile picture, age, range, gender, language, country
                        <strong>and other public info</strong>."</i></p>
                    <p>
                        Apart from wondering why in the world would a WiFi hotspot need any of these, what qualifies as
                        <i>"other
                            public info"</i>?
                    </p>
                    <p>
                        <strong>There is never a clear indication of the data being shared.</strong>
                    </p>
                    <p>
                        Unacceptable.
                    </p>
                    <h5> Problem #2: Who determines what information the application requires from you?</h5>
                    <p>
                        You might be thinking, <i>"what a silly question, the application of course"</i>, they are
                        providing
                        a service, they know best.
                    </p>
                    <p>
                        And as it turns out, this is the current case in every social media. Companies register an
                        application, configure what
                        information the application "needs" from it's users, and they're done.
                    </p>
                    <p>
                        In a perfect world where all humans are honest and have nothing but good intentions, this would
                        work.
                    </p>
                    <p>
                        In our world, companies more often than not, abuse this system.
                    </p>
                    <p>
                        And with no supervision whatsoever of the system, they go ahead and request all the information
                        they
                        can about you.
                    </p>
                    <p>
                        Be it to truly provide a service or to analyze and sell your data, we will never know. And
                        really,
                        it
                        shouldn't be our responsibility to find out.
                    </p>
                    <p>
                        <strong>Social media companies should be responsible for ensuring applications do not abuse
                            their
                            data
                            sharing systems.</strong>
                    </p>
                    <p>All applications requesting access to user data should be examined in depth, by real people, with
                        the
                        privacy and security of their users in mind.</p>
                    <h5> Problem #3: What happens to your information once it leaves the social network?</h5>
                    <p>
                        So, you went ahead and hit <i>Continue</i>. What now?
                    </p>
                    <p>
                        Where's the data?
                    </p>
                    <p>
                        What if you were to discover that these WiFi hotspots are owned by your local goverment which is
                        gathering this
                        information for mass-surveillance reasons?
                    </p>
                    <p>
                        Could you revoke the access to your data? But most importantly, could you make sure its deleted?
                    </p>
                    <p>
                        The answer is no. Once the data is shared, there's no going back. There are no procedures for
                        tracking it or deleting it.
                    </p>
                    <h5> Our solution</h5>
                    <p>
                        These are all clear and very serious problems that no social network as of today has been able
                        to
                        address.
                    </p>
                    <p>
                        Perhaps the privacy and security of their users, is not part of their priorities.
                    </p>
                    <p>
                        They are part of ours.
                    </p>
                    <p>
                        Here's our prototype.
                    </p>
                    <p>
                        Let's say now you downloaded the awesome music app everyone has been recommending to you. As
                        soon as
                        you open the app, the box below shows up.
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
                    <p>
                        <strong>
                            Explicit and informed consent
                        </strong>
                    </p>
                    <p>
                        Sharing our information is sharing a bit of ourselves. That is why we want to make sure it's
                        always crystal clear what is being shared.
                    </p>
                    <p>We won't hide anything behind pop-ups or behind vague descriptions such as "public
                        information".</p>
                    <p>We will be explicit about what information is to be shared and we will give you a way to inspect
                        it
                        yourself.
                    </p>
                    <p>
                        We have an inspect shared data button. When activated, it displays the exact data that will be
                        shared with the application.
                    </p>
                    <p>
                        Information is power!
                    </p>
                    <p>
                        <strong>
                            Safe applications
                        </strong>
                    </p>
                    <p>
                        We will introduce the concept of safe applications.
                    </p>
                    <p>
                        These applications will be examined in depth by us.
                    </p>
                    <p>
                        To name a few items, we will make sure that these applications:
                    </p>
                    <ul>
                        <li>
                            Only request the information they need to provide the service.
                        </li>
                        <li>
                            Know at all times where your data is stored physically and have this information available
                            to
                            you.
                        </li>
                        <li>
                            Have provable procedures in place to delete your information from ALL of their systems if
                            you
                            were to
                            revoke the permission.
                        </li>
                        <li>
                            Will notify us (so we can then notify you) in case of a data breach that might involve your
                            data and have a contingency plan in place.
                        </li>
                    </ul>
                    <p>
                        If an application meets these and our other privacy and security guidelines, a badge will be
                        shown below their logo.
                    </p>
                    <p>
                        We will then create an Applications Overview dashboard where you will be able to pinpoint the
                        exact
                        location of your shared data, revoke it's access and best of all, request it's deletion.
                    </p>
                    <p>
                        <strong>Goodbye data sharing abuse! Hello control of your data!</strong>
                    </p>
                    <p class="is-size-7">
                        P.D. You will recognize some of these items as <a href="https://www.eugdpr.org/">EU General Data
                        Protection Regulation (GDPR)</a> policies. We embrace the regulation and aim to be compliant
                        from
                        day one.
                    </p>
                    <h4 id="privacyfirst"> 2.2 Privacy as default</h4>
                    <p>
                        Although we're fans of the <a href="https://en.wikipedia.org/wiki/Do_Not_Track">Do Not Track
                        initiative</a>, we firmly believe no <i>"Opt-out"</i>
                        should be necessary for people not to be monitored across the internet.
                    </p>
                    <p><strong>Privacy should be a default everywhere.</strong></p>
                    <p>
                        That is why, apart from not tracking you anywhere, by default, we will also only share the data
                        applications must have in order to provide a service.
                    </p>
                    <p>
                        All optional data sharing will be disabled by default <sup class="is-size-7">1</sup>.
                    </p>
                    <p>
                        For example, if an application does not require your friends list to provide a service but would
                        like to have it, this will be disabled by default.
                    </p>
                    <p>
                        If you want the application to have this information, you can allow this with the flick of a
                        switch.
                    </p>
                    <p>
                        Your data, your decision.
                    </p>
                    <p class="is-size-7">
                    <span>
                        [1] Currently, social networks enable all optional shared data by default.
                    </span>
                    </p>
                    <h4 id="privacyasajourney"> 2.3 Privacy and security as a journey.</h4>
                    <p>
                        We will continuously research and develop new ways to improve your privacy and security.
                    </p>
                    <p>
                        Some examples of the technology we'll be researching and developing
                    </p>
                    <ul>
                        <li>
                            Cryptographically enforced data sharing policies
                        </li>
                        <li>
                            End to end encrypted conversations on the browser
                        </li>
                        <li>
                            Public key cryptography on the browser
                        </li>
                        <li>
                            Post-quantum cryptography algorithms and protocols
                        </li>
                    </ul>
                    <p>
                        <strong>The less we know about you, the better.</strong>
                    </p>
                    <p>
                        <strong>The more you know about us, the better.</strong>
                    </p>
                    <p class="is-size-7">
                        Hello there goverment agencies!
                    </p>
                    <h4 id="revenuemodel">3. A useful and sustainable revenue model.</h4>
                    <p>
                        The world is a marketplace, so will <span class="has-text-primary"><strong
                        class="has-text-primary">Open</strong>book</span>.
                    </p>
                    <p>
                        Our business model is not and will never be advertisement (also known as your personal data).
                    </p>
                    <p>
                        <strong><span class="has-text-primary"><strong class="has-text-primary">Open</strong>book</span>
                            will be a marketplace for peer to peer transactions of products, services and more.</strong>
                    </p>
                    <p>
                        For example, you could sell your beloved Star Wars collection on the network in the same way you
                        could hire someone to walk your dog or djay at your party.
                    </p>
                    <p>
                        Transactions made within the platform will benefit from the privacy and security of the
                        ecosystem.
                    </p>
                    <p>
                        Apart from this, we will also help enterprise customers set up their own internal, self-hosted and secure social
                        networks with extra functionality such as project, identity and access management.
                    </p>
                    <h4 id="ethicaldesign">4. Ethical design.</h4>
                    <p>
                        The more time we spend in social networks, the more ads are shown to us, the more money
                        social networks make.
                    </p>
                    <p>
                        Therefore, these networks are designed and optimized to keep us the longest time possible
                        attached
                        to our screens, pulling us from living the precious moments we were meant to share in the
                        network.
                        Oh,the irony.
                    </p>
                    <p>
                        When we finally manage to break away, we get spammed with endless notifications and alerts
                        trying to pull us back in.
                    </p>
                    <blockquote>
                        "In case you missed this.", "You haven't posted for a while", "See what you were doing 10
                        years ago", "Old sneakers have been posted for sale near you", X and Y liked this recently", "X
                        and Y followed Z".
                    </blockquote>
                    <p>
                        Some of them may seem quite innocent, they are not.
                    </p>
                    <p>
                        For example, the "Old sneakers have been posted for sale near you" notification. You might
                        think, well that's just
                        a feature of the application. It lets you know when someone is selling something nearby.
                    </p>
                    <p>
                        Have you noticed how many people post items for sale near you? Dozens, perhaps even hundreds.
                        You don't get notified of every single one of these items.
                    </p>
                    <p>
                        You only receive one of these notifications when these social networks have run out of pretexts
                        to bring you back to the network.
                    </p>
                    <img class="padding-bottom-2x padding-top-2x" :src="memeImg"/>
                    <p>
                        This is called <strong class="has-text-evilcorp">unethical design</strong>.
                    </p>
                    <p>
                        It's intrusive, it brings a constant burden to it's users, it's deceitful, it's disrespectful,
                        it's horrible.
                    </p>
                    <p>
                        In contrast,
                        <span class="has-text-primary"><strong
                            class="has-text-primary">Open</strong>book</span> will be ethically designed. Meaning as
                        useful
                        as possible and as less
                        intrusive as possible.
                    </p>
                    <p>
                        Our revenue model does not depend on the time you spend in the network; therefore, we can
                        freely design towards helping you spend more time in the things that matter, away from the
                        screen.
                    </p>
                    <h4 id="givingback">5. Giving back.</h4>
                    <p>
                        Social networks have an incredible economic potential.
                    </p>
                    <p>
                        Facebook itself, made <strong>40.65 billion dollars of revenue</strong> in 2017<sup
                        class="is-size-7">1</sup>, and the numbers
                        keep getting higher and higher.
                    </p>
                    <p>
                        What's the use of generating so much revenue if it's not for good?
                    </p>
                    <p class="is-size-5">
                        <strong>At <span class="has-text-primary"><strong
                            class="has-text-primary">Open</strong>book</span>,
                            we will give 30% of our revenue towards making the world a better place, now and
                            forever.</strong>
                    </p>
                    <p>
                        Think about it, let's say we make the same 40 billion dollars, that's 12 billion dollars towards
                        education, sanitization, treatment of diseases, medical treatment and more.
                    </p>
                    <p>
                        As a reference, UNICEF total global expenses for the year 2016 were $1.8 billion billion dollars
                        <sup class="is-size-7">2</sup>.
                    </p>
                    <p>
                        <strong>We could change the world.</strong>
                    </p>
                    <p class="is-size-7">
                        We will do this in partnership with <a href="https://founderspledge.com/" target="_blank"
                                                               rel="noopener noreferrer">FoundersPledge</a>.
                    </p>
                    <p class="is-size-7">
                                  <span>
                        [1] <a href="http://variety.com/2018/digital/news/facebook-q4-2017-earnings-1202683184/"
                               target="_blank" rel="noopener noreferrer">Source</a>
                        [2] <a href="https://www.unicef.org/publicpartnerships/files/2016arr_humanitarianaction(1).pdf"
                               target="_blank" rel="noopener noreferrer">Source</a>
                    </span>
                    </p>
                    <h4 id="migration">
                        6. Seamless migration.
                    </h4>
                    <p>
                        Finally, we, like you, have put a tremendous amount of our time and data into existing social
                        networks.
                    </p>
                    <p>
                        Hundreds of conversations, friendships, photos, videos, check-ins and more.
                    </p>
                    <p>
                        It would be a shame to start all over again.
                    </p>
                    <p>
                        That is why, we will make sure that, <strong>if the social network you are coming from provides
                        a
                        way to
                        download your data, we will help you migrate it
                        all to our network, in a couple of steps, painlessly</strong><sup class="is-size-7">1</sup>.
                    </p>
                    <p class="is-size-7">
                    <span>
                        [1] Most major social networks allow this, and is now part of the GDPR regulation, therefore .
                    </span>
                    </p>
                </div>
            </div>
        </section>
        <div class="section" id="next">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <div>
                            <span class="icon is-large" v-twemoji>➡</span>
                        </div>
                        <h2 class="title is-3 is-spaced is-margin-top-small">What's next</h2>
                        <h4 class="subtitle is-5">Where do we go from here?</h4>
                    </div>
                    <p>
                        We are eager to bring <span class="has-text-primary"><strong
                        class="has-text-primary">Open</strong>book</span> to life. To re-invent the way social media
                        companies
                        operate, to claim back our privacy, to build a tool for good, to change the world.
                    </p>
                    <p>
                        It won't be an easy task. Apart from the technical challenges, being the underdogs trying to
                        redefine a billion dollars industry, we will be fought against in every way possible.
                    </p>
                    <p>
                        We will need all the help we can get.
                    </p>
                    <p>
                        That is why we are currently working on a Kickstarter campaign where everyone will be able to
                        help us bring the project to life.
                    </p>
                    <p class="is-size-5">
                        <strong>
                            Awesome perks + helping build something good for society = win.
                        </strong>
                    </p>
                    <h5>
                        Stay tuned!
                    </h5>
                    <div class="columns is-mobile is-multiline padding-top-2x">
                        <div class="column is-narrow">
                            <a target="_blank" rel="noopener noreferrer" href="http://eepurl.com/dvRRmD"
                               class="button is-primary is-rounded">
                            <span class="icon">
                                <i class="fas fa-bell"></i>
                            </span>
                                <span>
                                Subscribe for updates
                            </span>
                            </a>
                        </div>
                        <div class="column is-narrow">
                            <a href="https://twitter.com/OpenBook_org" target="_blank" rel="noopener noreferrer"
                               class="button is-info is-rounded">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                                <span>
                                <span>
                                    Follow us on Twitter for updates
                                </span>
                        </span>
                            </a>
                        </div>
                        <div class="column is-narrow">
                            <a href="https://twitter.com/intent/tweet?url=https://open-book.org&hastags=openbook,openbookorg&via=OpenBook_org&text=The open and secure social network coming soon to @kickstarter"
                               target="_blank" rel="noopener noreferrer" class="button is-info is-outlined is-rounded">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                                <span>
                            Tweet about us
                            </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="hero is-primary is-bold">
            <div class="hero-body has-text-centered">
                <div class="container">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                                Still have questions?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-white is-outlined is-rounded is-medium">
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

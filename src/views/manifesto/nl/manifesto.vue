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
                                        Het probleem, de oplossing, de volgende stappen.
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
                        <span class="tag is-rainbow">Leestijd</span> &nbsp;&nbsp; 6 minuten
                    </p>
                </div>
            </div>
        </section>
        <section class="section" id="TOC">
            <div class="small-container">
                <div class="content is-medium">
                    <div class="has-text-centered">
                        <h2 class="title is-3 is-spaced is-margin-top-small">Inhoudsopgave</h2>
                    </div>
                    <br/>
                    <ul>
                        <li>
                            <a href="#why" v-scroll-to="'#why'">
                                Waarom?
                            </a>
                        </li>
                        <li>
                            <a href="#how" v-scroll-to="'#how'">
                                Hoe?
                            </a>
                            <ul>
                                <li>
                                    <a href="#honest" v-scroll-to="'#honest'">
                                        1. Eerlijk.
                                    </a>
                                </li>
                                <li>
                                    <a href="#personal" v-scroll-to="'#personal'">
                                        2. Persoonlijk.
                                    </a>
                                </li>
                                <li>
                                    <a href="#privacyfriendly" v-scroll-to="'#privacyfriendly'">
                                        3. Privacy-vriendelijk en veilig.
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="#explicitconsent" v-scroll-to="'#explicitconsent'">
                                                Expliciete toestemming
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#safeapps" v-scroll-to="'#safeapps'">
                                                Veilige applicaties
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#privacydefault" v-scroll-to="'#privacydefault'">
                                                Privacy als standaard
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#easy" v-scroll-to="'#easy'">
                                        4. Makkelijk.
                                    </a>
                                </li>
                                <li>
                                    <a href="#fun" v-scroll-to="'#fun'">
                                        5. Leuk.
                                    </a>
                                </li>
                                <li>
                                    <a href="#revenue" v-scroll-to="'#revenue'">
                                        6. Onze omzet.
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
                        <h2 class="title is-3 is-spaced is-margin-top-small">Waarom?</h2>
                        <h4 class="subtitle is-5">De reden dat we nog een ander sociaal netwerk aan het bouwen zijn.</h4>
                    </div>
                    <br/>
                    <p>
                        <strong>Sociale netwerken zijn geweldig.</strong>
                    </p>
                    <p>
                        Ze brengen ons bij elkaar, helpen ons waardevolle momenten te delen met onze favoriete vrienden en zorgen ervoor dat we kattenfilmpjes kunnen kijken.

                    </p>
                    <p>
                        Helaas zijn sociale netwerken er steeds minder voor het bij elkaar brengen van mensen, maar meer voor het zo veel
                        mogelijk geld verdienen door hun gebruikers. Ongeacht de consequenties, zoals het verlies van privacy.
                    </p>
                    <p>
                        Wij willen dit beter doen en daarom doen we het bij Openbook anders.
                    </p>
                    <p>
                        Openbook heeft precies de dingen die je van een sociaal netwerk zou verwachten: chats, posts, groepen en evenementen om er een paar te noemen.
                        Daarnaast is het <strong class="has-text-primary">eerlijk, persoonlijk, privacy-vriendelijk, veilig en leuk ;-)</strong>.
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
                        <h2 class="title is-3 is-spaced is-margin-top-small">Hoe?</h2>
                        <h4 class="subtitle is-5">Dit is hoe we dat doen:</h4>
                    </div>
                    <h3 id="honest">1. Eerlijk.</h3>
                    <p>
                        Al onze code is  <strong>open-source.</strong> Dit betekent dat iedereen het kan zien, reproduceren en er aan kan bijdragen.
                        Wij zijn transparant over hoe ons sociale netwerk werkt.

                    </p>
                    <p>
                        Daarnaast doneren we, in samenwerking met FoundersPledge, <strong>30% van onze winst aan doelen die de wereld een stukje beter maken.</strong>
                        Bijvoorbeeld voor educatie, geestelijke gezondheid, het bestrijden van klimaatverandering en
                        sanitisatie. Het wordt tijd dat iedereen baat heeft bij techbedrijven.

                    </p>
                    <h3 id="personal">
                        2. Persoonlijk.
                    </h3>
                    <p>
                        We zijn allemaal anders, en dat maakt ons juist zo mooi! Wij steunen dit volledig.
                    </p>
                    <p>
                        Op Openbook kun je niet alleen je eigen profiel personaliseren, maar het gehele netwerk.
                        Van de kleur van je homepage tot het toevoegen van plugins, je kunt het zo uniek maken als jezelf.

                    </p>
                    <p>
                        En mocht je iets missen op Openbook, laat het ons dan weten. We willen Openbook samen bouwen.
                        We zullen een speciale groep maken waar we je aanmoedigen ons te helpen beslissen wat we kunnen
                        maken of wat we zouden moeten verbeteren. Laten we, samen, het beste sociale netwerk ooit maken!
                    </p>
                    <h3 id="privacyfriendly">
                        3. Privacy-vriendelijk en veilig.

                    </h3>
                    <p>
                        Dit is wat ons dreef Openbook te bouwen. De privacy en veiligheid van onze gebruikers zullen altijd de kern zijn
                        van alles wat we doen. We zullen je nooit tracken, geen gebruikersinformatie verkopen en dit nooit delen
                        zonder jouw expliciete en geïnformeerde toestemming.
                    </p>
                    <p>
                        Hoe zit dit er uit?
                    </p>
                    <h5>Voorbeeld</h5>
                    <p>
                        Stel je voor dat je verbinding wilt maken met een publieke Wi-Fi hotspot, waar je gewoonlijk een venster zoals hieronder op je computerscherm krijgt:
                    </p>
                    <p>
                        <i>(Doe maar, klik zoals je normaal gesproken zou doen)</i>
                    </p>
                    <ob-generic-data-sharing></ob-generic-data-sharing>
                    <p>
                        Gefeliciteerd! Je hebt zojuist je persoonlijke informatie met een Wi-Fi netwerk gedeeld!
                    </p>
                    <h5> Weet je ook welke data je precies hebt gedeeld?</h5>
                    <p>
                        Als je bijvoorbeeld over het “i” icoontje gaat met je muis, heb je misschien gezien dat die het volgende zegt:
                    </p>
                    <p>
                        <i>“Je openbare profiel bevat je naam, profielfoto, leeftijd, geslacht, taal, nationaliteit <strong> en andere publieke informatie
                        </strong>"</i>
                    </p>
                    <p>
                        Wat wordt bedoeld met  <i> “andere publieke informatie”</i>? En waarom zou een Wi-Fi hotspot al deze informatie van jou willen?
                        Zouden je ze snellere Wi-Fi geven gebaseerd op je geslacht of leeftijd? En wat gebeurd er met jouw data als zij dit hebben ontvangen?
                    </p>
                    <p>
                        Mensen delen meer van hun informatie dan ze in eerste instantie door hebben, en zodra de data is gedeeld is er geen weg meer terug
                    </p>
                    <p>
                        Dit is hoe wij het doen:
                    </p>
                    <p>
                        <i>(Toe maar, klik zoals je normaal gesproken zou doen)
                        </i>
                    </p>
                    <ob-openbook-data-sharing></ob-openbook-data-sharing>
                    <p>
                        Zie je de verschillen?
                    </p>
                    <p>
                        Dit zijn de belangrijkste:
                    </p>
                    <h5 id="explicitconsent">Expliciete toestemming</h5>
                    <p>
                        Wij zorgen dat het altijd kraakhelder is wat er wordt gedeeld, dus geen pop-ups of vage beschrijvingen.
                        Je kan het ook zelf nog even nakijken, dan weet je het echt zeker.
                    </p>
                    <h5 id="safeapps">Veilige applicaties</h5>
                    <p>
                        Alle applicaties zullen worden beoordeeld door ons. Wij zullen zorgen dat de applicaties:
                    </p>
                    <ul>
                        <li>
                            De applicaties alleen de <strong>benodigde</strong> informatie aanvragen
                        </li>
                        <li>
                            De <strong>exacte</strong> locatie van jouw data beschikbaar hebben, <strong>ten alle tijden</strong>
                        </li>
                        <li>
                            <strong>Al</strong> jouw informatie deleten als je de toestemming zou intrekken
                        </li>
                        <li>
                            Een <strong>noodplan</strong> klaar hebben in geval van een datalek, en <strong>ons/jou direct op de hoogte brengen</strong> mocht dit gebeuren
                        </li>
                    </ul>
                    <p>
                        Wanneer deze applicaties al deze strikte richtlijnen volgen krijgen ze een badge onder hun logo.
                        Op jouw persoonlijke dashboard kun je precies de locatie vaststellen van jouw gedeelde data, toestemming intrekken en verzoeken de data te verwijderen.
                    </p>
                    <h5 id="privacydefault">Privacy als standaard</h5>
                    <p>
                        Alle optionele data gegevens zullen standaard uitgeschakeld zijn, en het is aan jou of je die
                        applicatie meer van jouw data wilt geven in plaats van andersom.
                    </p>
                    <p>
                        We zullen daarbij continu onderzoek doen en nieuwe manieren ontwikkelen om jouw privacy en veiligheid te verbeteren.
                    </p>
                    <p>
                        Een paar voorbeelden van de technologie die we onderzoeken en ontwikkelen:
                    </p>
                    <ul>
                        <li>
                            Cryptografisch afgedwongen beleid voor het delen van gegevens
                        </li>
                        <li>
                            End-to-end versleuteling, ook in de browser
                        </li>
                        <li>
                            Asymmetrische cryptografie in de browser
                        </li>
                        <li>
                            Post-quantum cryptografische algorithmen en protocollen
                        </li>
                    </ul>
                    <h3 id="easy">4. Makkelijk.</h3>
                    <p>
                        Je hebt waarschijnlijk heel veel tijd (en data) gestopt in je bestaande sociale netwerken.
                        Dat begrijpen we helemaal. We zouden niet willen dat je je vrienden, waardevolle herinneringen of feestjes zou moeten missen hierdoor.
                    </p>
                    <p>
                        Migreren naar Openbook zal daarom heel gemakkelijk zijn, met ons simpele drag-and-drop systeem.
                        Download je data vanuit je oude sociale netwerk<sup>1</sup> en verplaats het naar Openbook. BAM!
                    </p>
                    <h3 id="fun">5. Leuk.</h3>
                    <p>Laten we dit vooral niet weg laten! We’re bringing back social door interactie met je vrienden meer betekenis te geven.
                        Denk bijvoorbeeld aan verschillende niveaus van adoratie en de mogelijkheid je enthousiasme meerdere keren te tonen op
                        een bepaalde post. En omdat we jouw data niet tracken, zal je niet alleen nooit advertenties te zien krijgen,
                        maar zullen we ook niet voor je invullen wat wij denken dat je wilt zien. Geen abracadabra-algoritmen!
                    </p>
                    <h3 id="revenue">
                        6. Onze omzet
                    </h3>
                    <p>
                        Ons bedrijfsmodel is geen reclame en zal dit ook nooit zijn.
                    </p>
                    <p>
                        We zullen een transparant verdienmodel hebben, gebaseerd op een generieke manier voor mensen om veilig fysieke
                        en digitale goederen en diensten binnen het netwerk af te handelen. Dit zal door een atomaire digitale waarde-eenheid
                        mogelijk worden gemaakt. Hoewel dit initieel als een marktplaats tot uiting komt, strekken onze ambities verder dan dat.
                    </p>
                    <p>
                        Daarnaast willen we business klanten helpen hun eigen interne, zelf-gehoste en veilige social
                        netwerk op te zetten, met extra functionaliteiten zoals projecten, identiteits- en toegangsbeheer.
                    </p>
                    <span class="is-size-7">
                        [1] Met de nieuwe AVG wetgeving zijn sociale netwerken dit verplicht tegenover hun gebruikers.
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
                                Vragen?
                            </h3>
                        </div>
                        <div class="column">
                            <router-link to="faq" class="button is-rainbow is-rounded is-medium">
                                Bezoek onze veelgestelde vragen
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
        name: 'ob-nl-manifesto',
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

<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="teamMember of teamMembers">
            <ob-team-member :team-member="teamMember" :key="teamMember.name"/>
        </div>
    </div>
</template>

<script>
    import ObTeamMember from "./components/team-member";
    import joelPhoto from './assets/joel-min.jpg';
    import jayaPhoto from './assets/jaya-min.png';
    import martijnPhoto from './assets/martijn-min.jpg';
    import philPhoto from './assets/phil-min.jpg';
    import vincentPhoto from './assets/vincent-min.jpeg';
    import basPhoto from './assets/bas-min.jpg';
    import lambrechtPhoto from './assets/lambrecht-min.jpeg';
    import shantanuPhoto from './assets/shantanu-min.jpg';


    export default {
        components: {ObTeamMember},
        name: 'ob-team-members',
        data() {
            return {
                teamMembers: [
                    {
                        name: 'Joel Hernández',
                        position: 'Founder, Chief Executive Officer',
                        photo: joelPhoto,
                        links: {
                            website: 'https://www.lifenautjoe.com',
                            github: 'https://github.com/lifenautjoe',
                            instagram: 'https://instagram.com/lifenautjoe',
                            linkedin: 'https://www.linkedin.com/in/lifenautjoe',
                            twitter: 'https://twitter.com/lifenautjoe'
                        },
                        description: 'Privacy and security activist, software engineer, digital products designer, open sourcerer, The Next Web Top 500 young talent, human.'
                    },
                    {
                        name: 'Jaya Baloo',
                        position: 'Chief Operating Officer',
                        photo: jayaPhoto,
                        links: {
                            website: 'https://singularityuthenetherlands.org/people/jaya-baloo/',
                            linkedin: 'https://nl.linkedin.com/in/jaya-baloo-558492',
                            twitter: 'https://twitter.com/jayabaloo?lang=nl'
                        },
                        headline: 'Cyber-security expert',
                        description: 'Globally recognized cyber-security expert, speaker on lawful interception, quantum-computing, counter surveillance and cryptography.'
                    },
                    {
                        name: 'Phillip Zimmermann',
                        position: 'Chief Cryptographer',
                        photo: philPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Phil_Zimmermann'
                        },
                        headline: 'Cryptography pioneer',
                        description: 'Cryptography pioneer, creator of PGP, the most widely used email encryption software in the world, internet hall of fame member, privacy activist.'
                    },
                    {
                        name: 'Lambrecht Wessels',
                        photo: lambrechtPhoto,
                        position: 'Chief Marketing Officer',
                        description: 'Security and international relations expert, conflict analyst, peace-builder, media researcher & producer, human rights activist.',
                        links: {
                            linkedin: 'https://www.linkedin.com/in/lambrechtwessels/',
                            twitter: 'https://twitter.com/lambrechtw?lang=en'
                        }
                    },
                    {
                        name: 'Vincent Ruijter',
                        position: 'Security Engineer',
                        photo: vincentPhoto,
                        links: {
                            github: 'https://github.com/evict',
                            linkedin: 'https://www.linkedin.com/in/vincent-ruijter-97783215/',
                            twitter: 'https://twitter.com/_evict'
                        },
                        description: 'Ethical hacker, reverse-engineer, exploit developer, speaker, does not like the word cyber, cyber expert.'
                    },
                    {
                        name: 'Bas Roemburg',
                        position: 'UI/UX Ethical Designer',
                        photo: basPhoto,
                        links: {
                            github: 'https://github.com/roemburg'
                        },
                        description: ' Advocate of useful and meaningful products, user experience wizard, worked with numerous international brands, researcher, hardware hacker.'
                    },
                    {
                        name: 'Shantanu Tarey',
                        position: 'Software Engineer',
                        photo: shantanuPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/shantanutarey/',
                            twitter: 'https://twitter.com/shantanutarey'
                        },
                        description: 'Pragmatic software engineer, product guy, crypto-geek, bot-maker, simplicity advocate.'
                    },
                    {
                        name: 'Martijn Jansen',
                        position: 'Software Engineer',
                        photo: martijnPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/martijn-jansen-7b0218a/'
                        },
                        description: 'Practical software engineer, JavaScript guru, wearable tech geek, gamer, coolness officer in charge.'
                    },
                ]
            }
        }
    }
</script>

<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="teamMember of teamMembers">
            <ob-team-member :team-member="teamMember" :key="teamMember.name"/>
        </div>
    </div>
</template>

<script>
    import ObTeamMember from "./components/team-member";
    import joelPhoto from './assets/joel.jpg';
    import jayaPhoto from './assets/jaya.png';
    import larsPhoto from './assets/lars.jpeg';
    import philPhoto from './assets/phil.jpg';
    import vincentPhoto from './assets/vincent.jpeg';
    import basPhoto from './assets/bas.jpg';
    import plaholderPhoto from './assets/placeholder.png';


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
                        description: 'Entrepreneur, privacy and security advocate, software engineer, digital products designer, open sourcerer, The Next Web Top 500 young talent.'
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
                        description: 'Globally recognized cyber-security expert, speaker on lawful interception, quantum-computing mass surveillance, and cryptography.'
                    },
                    {
                        name: 'Lars Rosenquist',
                        position: 'Chief Technology Officer',
                        photo: larsPhoto,
                        links: {
                            github: 'https://github.com/NLxAROSA',
                            linkedin: 'https://www.linkedin.com/in/larsrosenquist/',
                            twitter: 'https://twitter.com/larsrosenquist'
                        },
                        description: 'Technologist, visionary, digital platforms architect, cloud engineer, software guru, coolness officer in charge.'
                    },
                    {
                        name: 'Phillip Zimmermann',
                        position: 'Chief Cryptographer',
                        photo: philPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Phil_Zimmermann'
                        },
                        headline: 'Cryptography pioneer',
                        description: 'Cryptography pioneer, creator of PGP, the most widely used email encryption software in the world, internet hall of fame member, privacy advocate.'
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
                        position: 'UI/UX Desginer',
                        photo: basPhoto,
                        links: {
                            github: 'https://github.com/roemburg'
                        },
                        description: ''
                    },
                    {
                        name: 'Martijn Jansen',
                        position: 'Software Engineer',
                        photo: plaholderPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/martijn-jansen-7b0218a/'
                        }
                    }
                ]
            }
        }
    }
</script>

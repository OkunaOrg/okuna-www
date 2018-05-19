<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-6-mobile is-4-tablet is-3-desktop" v-for="teamMember of teamMembers">
            <ob-team-member :team-member="teamMember" :key="teamMember.name"/>
        </div>
    </div>
</template>

<script>
    import ObTeamMember from "./components/team-member";
    import joelPhoto from './assets/joel.jpeg';
    import jayaPhoto from './assets/jaya.png';
    import larsPhoto from './assets/lars.jpeg';
    import philPhoto from './assets/phil.jpg';
    import vincentPhoto from './assets/vincent.jpeg';
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
                        talents: [
                            'Leadership',
                            'Entrepreneurship',
                            'Advocacy',
                            'Product Development',
                            'UI/UX Design',
                            'Systems Engineering',
                            'Strategy',
                            'Software Engineering',
                            'Development Operations',
                            'Open Source Software'
                        ],
                        links: {
                            website: 'https://www.lifenautjoe.com',
                            github: '',
                            instagram: 'https://instagram.com/lifenautjoe',
                            linkedin: 'https://www.linkedin.com/in/lifenautjoe',
                            twitter: 'https://twitter.com/lifenautjoe'
                        }
                    },
                    {
                        name: 'Jaya Baloo',
                        position: 'Chief Operating Officer',
                        photo: jayaPhoto,
                        talents: [
                            'Information Security',
                            'Network Security',
                            'Strategy',
                            'Cloud Computing',
                            'Leadership',
                            'Management',
                            'Business Continuity',
                            'Policy-making',
                            'Risk Management',
                            'Security Architecture Design'
                        ],
                        links: {
                            website: 'https://singularityuthenetherlands.org/people/jaya-baloo/',
                            linkedin: 'https://nl.linkedin.com/in/jaya-baloo-558492',
                            twitter: 'https://twitter.com/jayabaloo?lang=nl'
                        }
                    },
                    {
                        name: 'Lars Rosenquist',
                        position: 'Chief Technology Officer',
                        photo: larsPhoto,
                        talents: [
                            'Systems Engineering',
                            'Cloud Architecture',
                            'Leadership',
                            'Management',
                            'Development Operations',
                            'Software Engineering',
                            'Automation',
                            'Management'
                        ],
                        links: {
                            github: 'https://github.com/NLxAROSA',
                            linkedin: 'https://www.linkedin.com/in/larsrosenquist/',
                            twitter: 'https://twitter.com/larsrosenquist'
                        }
                    },
                    {
                        name: 'Phillip Zimmermann',
                        position: 'Chief Cryptographer',
                        photo: philPhoto,
                        talents: [
                            'Cryptography',
                            'Data security',
                            'Entrepreneurship',
                            'Society',
                            'Secure Systems',
                            'Innovation',
                            'Advocacy',
                            'Product Development',
                            'Leadership'
                        ],
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Phil_Zimmermann'
                        }
                    },
                    {
                        name: 'Vincent Ruijter',
                        position: 'Security Engineer',
                        photo: vincentPhoto,
                        talents: [
                            'Pentesting',
                            'Information Security',
                            'Application Security',
                            'Auditing',
                            'Exploit Development',
                            'Research',
                            'Network Security',
                            'Physical Security',
                            'Social Engineering'
                        ],
                        links: {
                            github: 'https://github.com/evict',
                            linkedin: 'https://www.linkedin.com/in/vincent-ruijter-97783215/',
                            twitter: 'https://twitter.com/_evict'
                        }
                    },
                    {
                        name: 'Bas Roemburg',
                        position: 'UI/UX Desginer',
                        photo: plaholderPhoto,
                        talents: [
                            'UI/UX Design',
                            'Prototyping',
                            'Interaction Design',
                            'Marketing',
                            'Multimedia',
                            'Usability',
                            'Web Development'
                        ],
                        links: {
                            github: 'https://github.com/roemburg'
                        }
                    },
                    {
                        name: 'Martijn Jansen',
                        position: 'Software Engineer',
                        photo: plaholderPhoto,
                        talents: [
                            'Software Engineering',
                            'Accessibility',
                            'Mobile Development',
                            'Web Development',
                            'Backend Development',
                            'Management'
                        ],
                        links: {
                            linkedin: 'https://www.linkedin.com/in/martijn-jansen-7b0218a/'
                        }
                    }
                ]
            }
        }
    }
</script>

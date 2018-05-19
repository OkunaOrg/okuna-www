<template>
    <div class="columns is-multiline is-mobile">
        <div class="column is-6-mobile is-4-tablet is-2-desktop" v-for="teamMember of teamMembers">
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
                        name: 'Joel',
                        position: 'Founder, Chief Executive Officer',
                        photo: joelPhoto,
                        talents: [
                            'Leadership',
                            'Product Development',
                            'Management',
                            'Software Engineering',
                            'Development Operations',
                            'UI/UX Design',
                            'Ping-pong'
                        ],
                        networks: {
                            website: 'https://www.lifenautjoe.com',
                            instagram: 'https://instagram.com/lifenautjoe',
                            linkedin: ''
                        }
                    },
                    {
                        name: 'Jaya Baloo',
                        position: 'Chief Operating Officer',
                        photo: jayaPhoto,
                        talents: [
                            'Information Security',
                            'Strategy',
                            'Management',
                            'Business Continuity',
                            'Policy',
                            'Auditing',
                            'Dancing like nobody\'s watching'
                        ]
                    },
                    {
                        name: 'Lars Rosenquist',
                        position: 'Chief Technology Officer',
                        photo: larsPhoto,
                        talents: [
                            'Systems Engineering',
                            'Cloud Architecture',
                            'Leadership',
                            'Development Operations',
                            'Software Engineering',
                            'Management',
                            'Kicking ass'
                        ]
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
                            'Policy',
                            'Innovation',
                            'Presenting without slides'
                        ]
                    },
                    {
                        name: 'Bas Roemburg',
                        position: 'UI/UX Desginer',
                        photo: plaholderPhoto,
                        talents: [
                            'UI/UX Design',
                            'Prototyping',
                            'Marketing',
                            'Multimedia',
                            'Usability',
                            'Beer-pong'
                        ]
                    },
                    {
                        name: 'Vincent Ruijter',
                        position: 'Security Engineer',
                        photo: vincentPhoto,
                        talents: [
                            'Pentesting',
                            'Information Security',
                            'Application Security',
                            'Exploit Development',
                            'Minecraft'
                        ]
                    },
                    {
                        name: 'Martijn Jansen',
                        position: 'Software Engineer',
                        photo: plaholderPhoto,
                        talents: [
                            'Frontend Development',
                            'Mobile Development',
                            'Backend Development',
                            'Management',
                            'Dad-jokes'
                        ]
                    }
                ]
            }
        }
    }
</script>

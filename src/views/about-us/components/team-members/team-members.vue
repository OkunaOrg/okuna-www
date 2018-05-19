<template>
    <div class="columns is-multiline">
        <div class="column" v-for="teamMember of teamMembers">
            <ob-team-member :team-member="teamMember" :key="teamMember.name"/>
        </div>
    </div>
</template>

<script>
    import ObTeamMember from "./components/team-member";

    export default {
        components: {ObTeamMember},
        name: 'ob-team-members',
        data() {
            return {
                teamMembers: [
                    {
                        name: 'Joel',
                        position: 'Founder, Chief Executive Officer',
                        photo: 'Tech Lead',
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
                        photo: 'Tech Lead',
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
                        photo: '',
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
                        photo: '',
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
                        photo: '',
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
                        photo: '',
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
                        photo: '',
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

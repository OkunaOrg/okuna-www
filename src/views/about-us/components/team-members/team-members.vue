<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="teamMember of teamMembers">
            <ob-team-member :team-member="teamMember" :key="teamMember.name"/>
        </div>
    </div>
</template>

<script>
    import ObTeamMember from "./components/team-member";
    import philPhoto from './assets/profile-picture-phil.jpg';
    import joelPhoto from './assets/profile-picture-joel.png';
    import jayaPhoto from './assets/profile-picture-jaya.png';
    import vincentPhoto from './assets/profile-picture-vincent.png';
    import lambrechtPhoto from './assets/profile-picture-lambrecht.png';
    import shantanuPhoto from './assets/profile-picture-shantanu.png';
    import nathaliePhoto from './assets/profile-picture-nathalie.png';
    import robinPhoto from './assets/profile-picture-robin.png';


    export default {
        components: {ObTeamMember},
        name: 'ob-team-members',
        data() {
            return {
                teamMembers: [
                    {
                        name: 'Joel Hernández',
                        position: this.$t('team_members.joel_title'),
                        photo: joelPhoto,
                        links: {
                            github: 'https://github.com/lifenautjoe',
                            instagram: 'https://instagram.com/lifenautjoe',
                            linkedin: 'https://www.linkedin.com/in/lifenautjoe',
                            twitter: 'https://twitter.com/lifenautjoe'
                        },
                        description: this.$t('team_members.joel_desc')
                    },
                    {
                        name: 'Jaya Baloo',
                        position: this.$t('team_members.jaya_title'),
                        photo: jayaPhoto,
                        links: {
                            website: 'https://singularityuthenetherlands.org/people/jaya-baloo/',
                            linkedin: 'https://nl.linkedin.com/in/jaya-baloo-558492',
                            twitter: 'https://twitter.com/jayabaloo?lang=nl'
                        },
                        headline: 'Cyber-security expert',
                        description: this.$t('team_members.jaya_desc')
                    },
                    {
                        name: 'Philip Zimmermann',
                        position: this.$t('team_members.phil_title'),
                        photo: philPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Phil_Zimmermann'
                        },
                        headline: 'Cryptography pioneer',
                        description: this.$t('team_members.phil_desc')
                    },
                    {
                        name: 'Shantanu Tarey',
                        position: this.$t('team_members.shantanu_title'),
                        photo: shantanuPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/shantanutarey/',
                            twitter: 'https://twitter.com/shantanutarey'
                        },
                        description: this.$t('team_members.shantanu_desc'),
                    },
                    {
                        name: 'Vincent Ruijter',
                        position: this.$t('team_members.vincent_title'),
                        photo: vincentPhoto,
                        links: {
                            github: 'https://github.com/evict',
                            linkedin: 'https://www.linkedin.com/in/vincent-ruijter-97783215/',
                            twitter: 'https://twitter.com/_evict'
                        },
                        description:  this.$t('team_members.vincent_desc'),
                    },
                    {
                        name: 'Nathalie Lokhorst',
                        position: this.$t('team_members.nathalie_title'),
                        photo: nathaliePhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/nathalie-lokhorst-1788069/'
                        },
                        description: this.$t('team_members.nathalie_desc')
                    },
                    {
                        name: 'Robin Roosdorp',
                        position: this.$t('team_members.robin_title'),
                        photo: robinPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/robin-roosdorp/'
                        },
                        description: this.$t('team_members.robin_desc')
                    },
                    {
                        name: 'Lambrecht Wessels',
                        photo: lambrechtPhoto,
                        position: this.$t('team_members.lambrecht_title'),
                        description: this.$t('team_members.lambrecht_desc'),
                        links: {
                            linkedin: 'https://www.linkedin.com/in/lambrechtwessels/',
                            twitter: 'https://twitter.com/lambrechtw?lang=en'
                        }
                    },
                ]
            }
        },
        methods: {
            refreshData: () => {
                console.log('exec');
                const teamData = this.teamMembers;
                this.teamMembers = [];
                setTimeout(() => {this.teamMembers = teamData}, 0);
            }
        },
        watch: {
            '$i18n.locale':  (n, o) => {
                console.log('aaa->',n,o);
            }
        }
    }
</script>

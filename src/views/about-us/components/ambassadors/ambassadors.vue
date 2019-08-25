<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="ambassador of ambassadors">
            <ob-ambassador :ambassador="ambassador" :key="ambassador.name"/>
        </div>
    </div>
</template>

<script>
    import isaacPhoto from './assets/isaac.jpg';
    import edwinPhoto from './assets/edwin.png';
    import chrisPhoto from './assets/chris.png';
    import ashwinPhoto from './assets/ashwin.png';
    import ObAmbassador from './components/ambassador.vue';


    export default {
        components: {ObAmbassador},
        name: 'ob-ambassadors',
        data() {
            return {
                ambassadors: [
                    {
                        name: this.$t('team:ambassadors.isaac_name'),
                        photo: isaacPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Isaac_Hern%C3%A1ndez',
                            twitter: 'https://twitter.com/isaachdezf?lang=en',
                            instagram: 'http://www.instagram.com/chapulo7',
                            facebook: 'https://www.facebook.com/IsaacHernandezOficial/'
                        },
                        description: this.$t('team:ambassadors.isaac_desc'),
                    },
                    {
                        name: this.$t('team:ambassadors.edwin_name'),
                        photo: edwinPhoto,
                        links: {
                            website: 'https://www.zerocopter.nl',
                            twitter: 'https://twitter.com/yafsec',
                            linkedin: 'https://www.linkedin.com/in/yafsec/'
                        },
                        description: this.$t('team:ambassadors.edwin_desc'),
                    },
                    {
                        name: this.$t('team:ambassadors.chris_name'),
                        photo: chrisPhoto,
                        links: {
                            website: 'https://www.chrisduke.tv',
                            twitter: 'https://twitter.com/chrisduketv',
                            instagram: 'https://www.instagram.com/chrisduketv',
                            facebook: 'https://www.facebook.com/chrisduketv/'
                        },
                        description: this.$t('team:ambassadors.chris_desc'),
                    },
                    {
                        name: this.$t('team:ambassadors.ashwin_name'),
                        photo: ashwinPhoto,
                        links: {
                            website: 'https://ashwinkrishnan.me/',
                            linkedin: 'https://www.linkedin.com/in/ashwinkrishnan/'
                        },
                        description: this.$t('team:ambassadors.ashwin_desc')
                    }
                ]
            }
        }
    }
</script>

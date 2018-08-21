<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="ambassador of ambassadors">
            <ob-ambassador :ambassador="ambassador" :key="ambassador.name"/>
        </div>
    </div>
</template>

<script>
    import isaacPhoto from './assets/isaac.jpg';
    import rubenPhoto from './assets/ruben.jpg';
    import edwinPhoto from './assets/edwin.png';
    import chrisPhoto from './assets/chris.png';
    import ObAmbassador from './components/ambassador.vue';


    export default {
        components: {ObAmbassador},
        name: 'ob-ambassadors',
        data() {
            return {
                ambassadors: [
                    {
                        name: this.$t('ambassadors.isaac_name'),
                        photo: isaacPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Isaac_Hern%C3%A1ndez',
                            twitter: 'https://twitter.com/isaachdezf?lang=en',
                            instagram: 'http://www.instagram.com/chapulo7',
                            facebook: 'https://www.facebook.com/IsaacHernandezOficial/'
                        },
                        description: this.$t('ambassadors.isaac_desc'),
                    },
                    {
                        name: this.$t('ambassadors.ruben_name'),
                        photo: rubenPhoto,
                        links: {
                            website: 'https://bitsensor.io',
                            twitter: 'https://twitter.com/EnableBitSensor',
                            linkedin: 'https://www.linkedin.com/in/rubenvanvreeland/'
                        },
                        description: this.$t('ambassadors.ruben_desc'),
                    },
                    {
                        name: this.$t('ambassadors.edwin_name'),
                        photo: edwinPhoto,
                        links: {
                            website: 'https://www.zerocopter.nl',
                            twitter: 'https://twitter.com/yafsec',
                            linkedin: 'https://www.linkedin.com/in/yafsec/'
                        },
                        description: this.$t('ambassadors.edwin_desc'),
                    },
                    {
                        name: this.$t('ambassadors.chris_name'),
                        photo: chrisPhoto,
                        links: {
                            website: 'https://www.chrisduke.tv',
                            twitter: 'https://twitter.com/chrisduketv',
                            instagram: 'https://www.instagram.com/chrisduketv',
                            facebook: 'https://www.facebook.com/chrisduketv/'
                        },
                        description: this.$t('ambassadors.chris_desc'),
                    }
                ]
            }
        }
    }
</script>

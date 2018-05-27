<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="ambassador of ambassadors">
            <ob-ambassador :ambassador="ambassador" :key="ambassador.name"/>
        </div>
    </div>
</template>

<script>
    import placeholderPhoto from './assets/placeholder.png';
    import isaacPhoto from './assets/isaac.jpg';
    import ObAmbassador from './components/ambassador.vue';

    export default {
        components: {ObAmbassador},
        name: 'ob-ambassadors',
        data() {
            return {
                ambassadors: [
                    {
                        name: 'Isaac Hernández',
                        photo: isaacPhoto,
                        links: {
                            website: 'https://en.wikipedia.org/wiki/Isaac_Hern%C3%A1ndez',
                            twitter: 'https://twitter.com/isaachdezf?lang=en',
                            instagram: 'http://www.instagram.com/chapulo7',
                            facebook: 'https://www.facebook.com/IsaacHernandezOficial/'
                        },
                        description: 'Artist, social entrepreneur.'
                    }
                ]
            }
        }
    }
</script>

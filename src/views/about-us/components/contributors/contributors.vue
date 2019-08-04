<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-4-mobile is-2-tablet is-2-desktop" v-for="contributor of contributors">
            <ob-contributor :contributor="contributor" :key="contributor.name"/>
        </div>
    </div>
</template>

<script>
    import alexPhoto from './assets/alex-min.jpg';
    import anastasijaPhoto from './assets/anastasija-min.jpg';
    import andrewPhoto from './assets/andrew-min.jpg';
    import caraPhoto from './assets/cara-min.jpg';
    import cyrillPhoto from './assets/cyrill-min.jpg';
    import jaapPhoto from './assets/jaap-min.jpg';
    import jakobPhoto from './assets/jakob-min.jpg';
    import joePhoto from './assets/joe-min.jpg';
    import mariusPhoto from './assets/marius-min.jpg';
    import patrickPhoto from './assets/patrick-min.jpg';
    import sophiePhoto from './assets/sophie-min.jpg';
    import thomasPhoto from './assets/thomas-min.jpg';
    import tomPhoto from './assets/tom-min.jpg';

    import ObContributor from './components/contributor.vue';


    export default {
        components: {ObContributor},
        name: 'ob-contributors',
        data() {
            return {
                contributors: [
                    {
                        name: 'Alexander Friedrich',
                        photo: alexPhoto,
                        links: {
                            github: 'https://github.com/johnendz',
                        },
                    },
                    {
                        name: 'Anastasija Marković',
                        photo: anastasijaPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/anastasija-markovi%C4%87-860777176/',
                        },
                    },
                    {
                        name: 'Andrew Y.',
                        photo: andrewPhoto,
                        links: {
                            website: 'https://andryou.com/',
                        },
                    },
                    {
                        name: 'Cara Reynolds',
                        photo: caraPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/reynoldscara/',
                        },
                    }, {
                        name: 'Cyrill Kunze',
                        photo: cyrillPhoto,
                        links: {},
                    }, {
                        name: 'Jaap Elzes',
                        photo: jaapPhoto,
                        links: {
                            github: 'http://mediaprofessional.online',
                        },
                    },
                    {
                        name: 'Jakob Hjelm',
                        photo: jakobPhoto,
                        links: {
                            github: 'https://github.com/komposten',
                            linkedin: 'https://www.linkedin.com/in/jakobhjelm/'
                        },
                    },
                    {
                        name: 'József Sallai',
                        photo: joePhoto,
                        links: {
                            github: 'https://github.com/jozsefsallai',
                            website: 'https://sallai.me',
                        },
                    },
                    {
                        name: 'Marius Großhans',
                        photo: mariusPhoto,
                        links: {
                            twitter: 'https://twitter.com/GrosshansMarius',
                            linkedin: 'https://www.linkedin.com/in/großhansmarius/',
                        },
                    },
                    {
                        name: 'Patrick Rios',
                        photo: patrickPhoto,
                        links: {},
                    },
                    {
                        name: 'Sophie Tauchert',
                        photo: sophiePhoto,
                        links: {
                            github: 'https://gitlab.com/999eagle',
                            website: 'https://999eagle.moe'
                        },
                    },
                    {
                        name: 'Alexander Friedrich',
                        photo: alexPhoto,
                        links: {
                            github: 'https://github.com/johnendz',
                        },
                    },
                    {
                        name: 'Thomas Galler',
                        photo: thomasPhoto,
                        links: {
                            website: 'https://thomas.galler.family/',
                        },
                    },
                    {
                        name: 'Tom Van Thiel',
                        photo: tomPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/tomvanthiel/',
                        },
                    },

                ]
            }
        }
    }
</script>

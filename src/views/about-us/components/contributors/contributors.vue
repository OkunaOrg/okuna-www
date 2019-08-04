<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="contributor of contributors">
            <ob-contributor :contributor="contributor" :key="contributor.name"/>
        </div>
    </div>
</template>

<script>
    import alexPhoto from './assets/alex.jpg';
    import anastasijaPhoto from './assets/anastasija.jpg';
    import andrewPhoto from './assets/andrew.jpg';
    import caraPhoto from './assets/cara.jpg';
    import cyrillPhoto from './assets/cyrill.jpg';
    import jaapPhoto from './assets/jaap.jpg';
    import jakobPhoto from './assets/jakob.jpg';
    import joePhoto from './assets/joe.jpg';
    import mariusPhoto from './assets/marius.jpg';
    import patrickPhoto from './assets/patrick.jpg';
    import sophiePhoto from './assets/sophie.jpg';
    import thomasPhoto from './assets/thomas.jpg';
    import tomPhoto from './assets/tom.jpg';

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

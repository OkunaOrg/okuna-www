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
    import dennisPhoto from './assets/dennis-min.jpg';
    import dejanPhoto from './assets/dejan-min.jpg';
    import ferdinandPhoto from './assets/ferdinand-min.jpg';
    import jaapPhoto from './assets/jaap-min.jpg';
    import jakobPhoto from './assets/jakob-min.jpg';
    import jeffPhoto from './assets/jeff-min.jpg';
    import joePhoto from './assets/joe-min.jpg';
    import mariusPhoto from './assets/marius-min.jpg';
    import patrickPhoto from './assets/patrick-min.jpg';
    import sophiePhoto from './assets/sophie-min.jpg';
    import thomasPhoto from './assets/thomas-min.jpg';
    import tomPhoto from './assets/tom-min.jpg';
    import andyPhoto from './assets/andy-min.jpg';
    import finnPhoto from './assets/finn-min.jpg';
    import ronaldPhoto from './assets/ronald-min.jpg';
    import andreasPhoto from './assets/andreas-min.jpg';
    import udoPhoto from './assets/udo-min.jpg';
    import williamPhoto from './assets/william-min.jpg';
    import richPhoto from './assets/rich-min.jpg';
    import bennyPhoto from './assets/benny-min.jpg';
    import vanessaPhoto from './assets/vanessa-min.jpg';

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
                        name: 'Andreas Hensel',
                        photo: andreasPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/andreas-h-2252b9140'
                        },
                    },
                    {
                        name: 'Andy Hofmann',
                        photo: andyPhoto,
                        links: {},
                    },
                    {
                        name: 'Benny',
                        photo: bennyPhoto,
                        links: {},
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
                    },
                    {
                        name: 'Dennis Melhede',
                        photo: dennisPhoto,
                        links: {},
                    },
                    {
                        name: 'Dejan Milosavljevic',
                        photo: dejanPhoto,
                        links: {},
                    },
                    {
                        name: 'Ferdinand Thommes',
                        photo: ferdinandPhoto,
                        links: {
                            website: 'https://linuxnews.de'
                        },
                    },
                    {
                        name: 'Finn Strand',
                        photo: finnPhoto,
                        links: {},
                    },
                    {
                        name: 'Jaap Elzes',
                        photo: jaapPhoto,
                        links: {
                            website: 'http://mediaprofessional.online',
                            linkedin: 'https://www.linkedin.com/in/jaapelzes/'
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
                        name: 'Jeff Connary',
                        photo: jeffPhoto,
                        links: {},
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
                        name: 'Ronald Smeets',
                        photo: ronaldPhoto,
                        links: {
                            website: 'http://ronaldsmeets.info/',
                            linkedin: 'https://www.linkedin.com/in/ronaldsmeets/'
                        },
                    },
                    {
                        name: 'Rich Quaal',
                        photo: richPhoto,
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
                    {
                        name: 'Vanessa Condori',
                        photo: vanessaPhoto,
                        links: {
                            twitter: 'https://twitter.com/vanevet15'
                        },
                    },
                    {
                        name: 'Udo Beckmann',
                        photo: udoPhoto,
                        links: {},
                    },
                    {
                        name: 'William T.S.',
                        photo: williamPhoto,
                        links: {
                            linkedin: 'https://www.linkedin.com/in/william-thanoothong-svendsen-70691a111/'
                        },
                    },
                ]
            }
        }
    }
</script>

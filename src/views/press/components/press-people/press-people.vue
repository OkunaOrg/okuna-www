<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-4-tablet is-4-desktop" v-for="pressPeople of pressPeople" :key="pressPeople.name">
            <ob-press-asset :name="pressPeople.name" :url="pressPeople.url" :size="pressPeople.size"
                            :preview-img="pressPeople.previewImg" :filename="pressPeople.filename"></ob-press-asset>
        </div>
    </div>
</template>

<script>

    import joelPreview from './assets/joel-min.jpg';
    import jayaPreview from './assets/jaya-min.png';
    import martijnPreview from './assets/martijn-min.jpg';
    import philPreview from './assets/phil-min.jpg';
    import lambrechtPreview from './assets/lambrecht-min.jpeg';
    import vincentPreview from './assets/vincent-min.jpeg';
    import basPreview from './assets/bas-min.jpg';
    import shantanuPreview from './assets/shantanu-min.jpg';
    import ObPressAsset from './../press-asset.vue';

    export default {
        components: {ObPressAsset},
        name: 'ob-press-people',
        data() {
            return {
                pressPeople: [
                    {
                        name: 'Joel Hernandez, Founder & CEO',
                        url: 'https://www.dropbox.com/s/4se5dyxprb0oupi/joel-hernandez-founder-ceo.jpg?dl=1',
                        size: '~ 14 MB',
                        previewImg: joelPreview,
                        filename: 'joel-hernandez-founder.jpg'
                    },
                    {
                        name: 'Jaya Baloo, COO',
                        url: 'https://www.dropbox.com/s/hkb3mer64cn0t4g/jaya-baloo-coo.png?dl=1',
                        size: '~ 79 KB',
                        previewImg: jayaPreview,
                        filename: 'jaya-baloo-coo.png'
                    },
                    {
                        name: 'Phil Zimmermann, Cryptographer',
                        url: 'https://www.dropbox.com/s/05stb5btwuziq25/phillip-zimermann-chief-cryptographer.jpg?dl=1',
                        size: '~ 102 KB',
                        previewImg: philPreview,
                        filename: 'phil-chief-cryptographer.png'
                    },
                    {
                        name: 'Lambrecht Wessels, CMO',
                        url: 'https://www.dropbox.com/s/6jyp1qng4dnuq1o/lambrecht-wessels-cmo.jpeg?dl=1',
                        size: '~ 247 KB',
                        previewImg: lambrechtPreview,
                        filename: 'lambrecht-wessels-cmo.jpeg'
                    },
                    {
                        name: 'Vincent Ruijter, Security Engineer',
                        url: 'https://www.dropbox.com/s/m7em5moz1rsznns/vincent-ruijter-security-engineer.jpeg?dl=1',
                        size: '~ 308 KB',
                        previewImg: vincentPreview,
                        filename: 'vincent-ruijter.jpeg'
                    },
                    {
                        name: 'Bas Roemburg, Designer',
                        url: 'https://www.dropbox.com/s/500bwt5zunigtjp/bas-roemburg-designer.jpg?dl=1',
                        size: '~ 11.6 MB',
                        previewImg: basPreview,
                        filename: 'bas-roemburg.jpeg'
                    },
                    {
                        name: 'Shantanu Tarey, Engineer',
                        url: 'https://www.dropbox.com/s/kbwkr6vpchzwqsv/shantanu-tarey-engineer.jpg?dl=1',
                        size: '~ 23 KB',
                        previewImg: shantanuPreview,
                        filename: 'shantanu-tarey.jpg'
                    },
                    {
                        name: 'Martijn Jansen, Engineer',
                        url: 'https://www.dropbox.com/s/ly23ohabuqrlw54/martijn-software-engineer.jpg?dl=1',
                        size: '~ 183 KB',
                        previewImg: martijnPreview,
                        filename: 'martijn.jpg'
                    }
                ]
            }
        }
    }
</script>

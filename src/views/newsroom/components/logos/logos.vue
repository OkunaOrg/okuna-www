<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-4-tablet is-4-desktop" v-for="logo of logos" :key="logo.name">
            <ob-press-asset :name="logo.name" :url="logo.url" :size="logo.size" :filename="logo.filename"></ob-press-asset>
        </div>
    </div>
</template>

<script>

    import ObPressAsset from "../press-asset";

    export default{
        components: {ObPressAsset},
        name: 'ob-logos',
        data(){
            return {
                logos: [
                    {
                        name: 'Logo black w/background',
                        url: 'https://image.ibb.co/hYcmCd/logo_black_bg_2x.png',
                        size: '~ 4 KB',
                        filename: 'logo.png'
                    },
                    {
                        name: 'Logo black',
                        url: 'https://image.ibb.co/mRitsd/logo_black_transparent_bg_2x.png',
                        size: '~ 4 KB',
                        filename: 'logo.png'
                    },
                    {
                        name: 'Logo white w/background',
                        url: 'https://image.ibb.co/kS4Nky/logo_boxed_2x.png',
                        size: '~ 4 KB',
                        filename: 'logo.png'
                    },
                    {
                        name: 'Logo purple',
                        url: 'https://image.ibb.co/kS4Nky/logo_boxed_2x.png',
                        size: '~ 4 KB',
                        filename: 'logo.png'
                    },
                    {
                        name: 'Logo purple w/background',
                        url: 'https://image.ibb.co/jUHmCd/logo_2x.png',
                        size: '~ 4 KB',
                        filename: 'logo.png'
                    },
                ]
            }
        }
    }
</script>

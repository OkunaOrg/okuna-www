<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-4-tablet is-4-desktop" v-for="pressKit of pressKits" :key="pressKit.name">
            <ob-press-asset :name="pressKit.name" :url="pressKit.url" :size="pressKit.size" :preview-img="pressKit.previewImg" :filename="pressKit.filename"></ob-press-asset>
        </div>
    </div>
</template>

<script>

    import zipPreview from './assets/file-zip-icon.jpg';
    import ObPressAsset from "../press-asset";

    export default{
        components: {ObPressAsset},
        name: 'ob-press-kits',
        data(){
            return {
                pressKits: [
                    {
                        name: 'Press-kit.zip',
                        url: 'https://git.open-book.org/Openbook/other/press-kit/-/archive/master/press-kit-master.zip',
                        size: '~ 40 MB',
                        previewImg: zipPreview,
                        filename: 'Press-kit.zip'
                    }
                ]
            }
        }
    }
</script>

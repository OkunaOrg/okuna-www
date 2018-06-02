<template>
    <div class="columns is-multiline is-mobile is-variable is-5">
        <div class="column is-6-mobile is-3-tablet is-3-desktop" v-for="pressKit of pressKits" :key="pressKit.name">
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
                        name: 'Press kit',
                        url: 'https://showcase.dropbox.com/collection/items/download?padId=pmx9lNzdy1vAJff2RfNdH&collectionItemId=yhF8C3QkOt1mCrhs0B4o',
                        size: '~ 40 MB',
                        previewImg: zipPreview,
                        filename: 'presskit.zip'
                    }
                ]
            }
        }
    }
</script>

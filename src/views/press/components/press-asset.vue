<template>
    <a :href="url" rel="noopener noreferrer" @click="downloadAsset($event)" ref="anchor" :download="filename">
        <div class="columns is-multiline is-mobile has-text-centered">
            <div class="column is-12">
                <figure class="image is-square">
                    <img class="is-shadowed is-semi-rounded" :src="previewImg" v-bind:alt="name">
                </figure>
            </div>
            <div class="column is-12">
                <strong class="is-size-6">{{ name }}</strong>
            </div>
            <div class="column is-12 is-paddingless is-size-7">
                {{size}}
            </div>
        </div>
    </a>
</template>

<style lang="scss"></style>

<script>
    export default {
        name: 'ob-press-asset',
        props: {
            previewImg: {
                type: String
            },
            name: {
                type: String
            },
            url: {
                type: String
            },
            size: {
                type: String
            },
            filename:{
                type: String
            }
        },
        methods: {
            downloadAsset($event){
                //$event.preventDefault();
                //document.body.appendChild(a);
                //a.click();
            }
        }
    }
</script>

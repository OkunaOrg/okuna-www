<template>
    <div>
        <ob-es-manifesto v-if="locale==='es'"></ob-es-manifesto>
        <ob-nl-manifesto v-else-if="locale==='nl'"></ob-nl-manifesto>
        <ob-en-manifesto v-else></ob-en-manifesto>
    </div>
</template>

<script>
    import ObEsManifesto from "./es/manifesto";
    import ObEnManifesto from "./en/manifesto";
    import ObNlManifesto from "./nl/manifesto";

    export default {
        components: {
            ObEnManifesto,
            ObEsManifesto,
            ObNlManifesto
        },
        watch: {
            '$route.params.locale': function (locale) {
                if (this) this.locale = locale;
            }
        },
        data() {
            const locale = this.$route.params.locale;
            return {
                locale
            }
        }
    }
</script>

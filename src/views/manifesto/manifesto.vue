<template>
    <div>
        <ob-es-manifesto v-if="locale==='es'"></ob-es-manifesto>
        <ob-en-manifesto v-else="locale==='en'"></ob-en-manifesto>
    </div>
</template>

<script>
    import ObEsManifesto from "./es/manifesto";
    import ObEnManifesto from "./en/manifesto";

    export default {
        components: {
            ObEnManifesto,
            ObEsManifesto
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

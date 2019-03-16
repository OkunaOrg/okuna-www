<template>
    <div class="animated fadeIn">
        <section class="hero is-white">
            <div class="hero-body has-text-centered">
                <div class="container has-padding-top-2x-mobile">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <h3 class="title is-size-4">
                               App Link not working ?
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <form novalidate>
            <section class="section">
                <div class="columns is-centered">
                    <p class="is-size-5 has-text-centered has-padding-bottom-1x-mobile">
                        Paste it in the box below. Make sure it starts with https://openbook.social...
                    </p>
                </div>
                <div class="columns has-padding-1x is-centered">
                    <input class="input is-medium"
                           type="text"
                           id="link"
                           name="link"
                           v-model="link"/>
                </div>
                <div class="container has-padding-2x">
                    <div class="columns is-centered is-vcentered">
                        <button class="button is-fullwidth is-warning is-large is-rounded is-center" @click="generateLink()" type="button">
                            Generate App Link
                        </button>
                    </div>
                </div>
                <div class="container has-padding-2x">
                    <div class="columns is-centered is-vcentered" v-show="generatedLink">
                        <a target="_blank" v-bind:href="generatedLink" class="button is-success is-large is-fullwidth is-rounded is-rainbow is-center">
                            Open App
                        </a>
                    </div>
                </div>
            </section>
        </form>
        <section class="section">
            <div class="container">
                <div class="content has-text-centered padding-bottom-2x">

                </div>

            </div>
        </section>
    </div>
</template>

<style lang="scss">
    .home-team{
        display: flex;
        position: relative;
        &-figure{
            margin-right: -20px;
        }
    }
</style>

<script>
    function initialState() {
        return {
            link: '',
            generatedLink: ''
        }
    }

    export default {
        name:'ob-getapp',
        data: initialState,
        methods: {
            generateLink() {
                this.generatedLink = this.link;
                console.log(this.generatedLink);
            }
        }
    }
</script>

<template>
    <div class="columns">
        <div class="column">
            <div class="box quote-box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img class="is-rounded"
                                 :src="joelPhoto"
                                 alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Joel Hernández</strong>
                                <br>
                                <small class="quote-box-occupation">Founder of Openbook</small>
                                <br>
                                <span class="quote-box-content">
                                    Openbook is not only an evolutionary step for social networks in every regard, it's also a humanitarian project at world scale.
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="column">
            <div class="box quote-box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img class="is-rounded"
                                 :src="vincentPhoto"
                                 alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Vincent Ruijter</strong>
                                <br>
                                <small class="quote-box-occupation">Ethical Hacker</small>
                                <br>
                                <span class="quote-box-content">
                                With current networks growing bigger and bigger every day, Openbook might be the last real chance to build something different, something ethical, something better.
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="column">
            <div class="box quote-box">
                <article class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img class="is-rounded"
                                 :src="philPhoto"
                                 alt="Image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <div class="content">
                            <p>
                                <strong>Phil Zimmermann</strong>
                                <br>
                                <small class="quote-box-occupation">
                                    Privacy expert / Creator of PGP
                                </small>
                                <br>
                                <span class="quote-box-content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                                </span>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .quote-box {
        min-height: 250px;
    }

    .quote-box-occupation {
        font-weight: lighter;
    }

    .quote-box-content{
        display: inline-block;
        padding-top: 0.5rem;
    }
</style>

<script>
    import philPhoto from './assets/phil-min.jpg';
    import vincentPhoto from './assets/vincent-min.jpeg';
    import joelPhoto from './assets/joel-min.jpg';

    export default {
        name: 'ob-quotes',
        data() {
            return {
                philPhoto: philPhoto,
                vincentPhoto: vincentPhoto,
                joelPhoto: joelPhoto
            }
        }
    }
</script>

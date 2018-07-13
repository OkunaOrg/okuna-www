<template>
    <div>
        <div ref="screenshots" class="customization-screenshots">
            <figure class="image customization-screenshot" v-for="sc in screnshots">
                <img :src="sc">
            </figure>
        </div>
    </div>
</template>

<style lang="scss">
    .customization-screenshots{
        pointer-events: none;

        .slick-center{
        }

        .slick-slide{
        }

        .slick-list{
            overflow: visible;
        }
    }

    .customization-screenshot{
        padding: 0 1.5rem;

        img{
            box-shadow: 0 12px 15px rgba(0, 0, 0, 0.1), 0 17px 50px rgba(0, 0, 0, 0.1);
            border-radius: 3px;
        }
    }
</style>

<script>
    import blackScreenshot from './assets/black-min.png';
    import blueScreenshot from './assets/blue-min.png';
    import pinkScreenshot from './assets/pink-min.png';
    import purpleScreenshot from './assets/purple-min.png';
    import yellowScreenshot from './assets/yellow-min.png';
    import whiteScreenshot from './assets/white-min.png';
    import jquery from 'jquery';

    export default {
        name: 'ob-customization-screenshots',
        data(){
            return {
                screnshots: [
                    blackScreenshot,
                    blueScreenshot,
                    pinkScreenshot,
                    purpleScreenshot,
                    yellowScreenshot,
                    whiteScreenshot
                ]
            }
        },
        mounted(){
            const screenshotsContainer = this.$refs['screenshots'];

            jquery(screenshotsContainer).slick({
                accessibility: false,
                centerMode: true,
                centerPadding: '5%',
                slidesToShow: 3,
                autoplay: true,
                autoplaySpeed: 2500,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '5%',
                            slidesToShow: 2,
                            draggable: false,
                            pauseOnFocus: false,
                            pauseOnHover: false
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            arrows: false,
                            centerMode: true,
                            centerPadding: '5%',
                            slidesToShow: 1,
                            draggable: false,
                            pauseOnFocus: false,
                            pauseOnHover: false
                        }
                    }
                ]
            });
        },
        destroyed(){
            $(this.$refs.screenshots).slick('unslick');
        }

    }
</script>

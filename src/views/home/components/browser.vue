<template>
    <div class="browser-window-container">
        <div class='browser-window'>
            <div class='top-bar'>
                <div class='circles'>
                    <div class="circle circle-red"></div>
                    <div class="circle circle-yellow"></div>
                    <div class="circle circle-green"></div>
                </div>
            </div>
            <div class='browser-content'>
                <div class="open-book-header">
                    <div class="open-book-container">
                        <div class="open-book-header-logo">
                            <div class="open-book-header-logo__icon"></div>
                        </div>
                        <div class="open-book-header-actions">
                            <div class="open-book-header-actions__search">

                            </div>
                            <div class="open-book-header-actions-buttons">
                                <div class="open-book-header-actions-button"></div>
                                <div class="open-book-header-actions-button"></div>
                                <div class="open-book-header-actions-button"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="open-book-body">
                    <div class="open-book-body-timeline" ref="timeline">
                        <div class="open-book-post" v-for="post in posts">
                            <div class="open-book-post-content">
                                <span class="icon is-medium" v-twemoji>{{post.content}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="open-book-body-chats">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

    // Browser window based on work by the awesome John Otander
    // https://codepen.io/johnotander/pen/pfLhy

    $bottomColor: #E2E2E1;
    $topColor: lighten($bottomColor, 2%);

    $border: $bottomColor;

    $height: 500px;

    .browser-window-container {
        padding: 0 1rem;
    }

    .browser-window {
        text-align: left;
        width: 100%;
        height: $height;
        display: inline-block;
        border-radius: 5px;
        background-color: #fff;
    }

    .browser-window .top-bar {
        height: 30px;
        border-radius: 5px 5px 0 0;
        border-top: thin solid lighten($topColor, 1%);
        border-bottom: thin solid darken($bottomColor, 1%);
        background: linear-gradient($topColor, $bottomColor);
    }

    .browser-window .circle {
        height: 8px;
        width: 8px;
        display: inline-block;
        border-radius: 50%;
        background-color: lighten($topColor, 10%);
    }

    .browser-window .circles {
        margin: 5px 11px;
    }

    .browser-window .browser-content {
        width: 100%;
        height: 100%;
        display: block;
        border-radius: 0 0 5px 5px;
        background-color: #fafafa;
    }

    .clear {
        clear: both;
    }

    .open-book-container {
        display: flex;
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
    }

    .open-book-header {
        width: 100%;
        background-color: #690ddc;
        height: 30px;
        display: flex;

        &-logo {
            width: 55px;
            display: flex;
            justify-content: center;
            align-items: center;

            &__icon {
                height: 10px;
                width: 10px;
                border-radius: 50%;
                background: white;
            }
        }

        &-actions {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &__search {
                border-radius: 5px;
                background: white;
                width: 40%;
                height: 10px;
            }

            &-buttons {
                width: 100px;
                display: flex;
                justify-content: space-around;
                align-items: center;
            }

            &-button {
                height: 10px;
                width: 20px;
                border-radius: 10%;
                background: rgba(0, 0, 0, 0.25);
            }
        }
    }

    .open-book-body {
        @extend .open-book-container;
        justify-content: space-between;
        width: 100%;
        height: 100%;
        margin-top: 10px;

        &-timeline {
            margin: 10px;
            width: 70%;
            height: 100%;
            background: rgba(128, 128, 128, 0.3);
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            overflow: hidden;
        }

        &-chats {
            margin: 10px;
            width: 20%;
            height: 100%;
            background: rgba(128, 128, 128, 0.3);
            border-radius: 5px;
        }
    }

    .open-book-post {
        display: flex;
        color: black;
        margin-bottom: 20px;
        background: #ffffff;
        width: 100%;
        height: 70px;
        border-radius: 5px;
        pointer-events: none;
        outline: none;

        &-content{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }
    }

</style>

<script>
    const jQuery = require('jquery');

    export default {
        data(){
            return {
                posts: [
                    {
                      content: '🎉'
                    },
                    {
                        content: '🙈'
                    },
                    {
                        content: '🤔'
                    },
                    {
                        content: '🙊'
                    },
                    {
                        content: '😎'
                    },
                    {
                        content: '😮'
                    },
                    {
                        content: '😘'
                    }
                ]
            }
        },
        mounted() {
            const timelineComponent = this.$refs.timeline;
            const slider = jQuery(timelineComponent).slick({
                accessibility: false,
                infite: true,
                vertical: true,
                autoplay: false,
                autoplaySpeed: 1500,
                pauseOnFocus: false,
                pauseOnHover: false,
                draggable: false,
                arrows: false,
            });

            this.intervalHandle = setInterval(() => {
                jQuery(timelineComponent).slick('slickPrev');
            }, 1500);
        },
        destroyed() {
            if (this.intervalHandle) clearInterval(this.intervalHandle);
        }
    }
</script>

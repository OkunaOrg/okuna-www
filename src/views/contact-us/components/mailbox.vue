<template>
    <div class="letter-image" ref="letterImageElement">
        <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                </div>
            </div>
            <div class="top-fold"></div>
            <div class="mail-body"></div>
            <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
    </div>
</template>

<style lang="scss">

    // Awesomeness courtesy of the awesome Jakes Giles Phillips
    // https://codepen.io/jakegilesphillips

    .letter-image {
        position: relative;
        width: 200px;
        height: 200px;
    }

    .animated-mail {
        position: absolute;
        height: 150px;
        width: 200px;
        -webkit-transition: .4s;
        -moz-transition: .4s;
        transition: .4s;

        .mail-body {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 0 100px 200px;
            border-color: transparent transparent #690de7 transparent;
            z-index: 2;
        }

        .top-fold {
            position: absolute;
            top: 50px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 50px 100px 0 100px;
            -webkit-transform-origin: 50% 0%;
            -webkit-transition: transform .4s .4s, z-index .2s .4s;
            -moz-transform-origin: 50% 0%;
            -moz-transition: transform .4s .4s, z-index .2s .4s;
            transform-origin: 50% 0%;
            transition: transform .4s .4s, z-index .2s .4s;
            border-color: #660cb5 transparent transparent transparent;
            z-index: 2;
        }

        .back-fold {
            position: absolute;
            bottom: 0;
            width: 200px;
            height: 100px;
            background: #500ca3;
            z-index: 0;
        }

        .left-fold {
            position: absolute;
            bottom: 0;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 50px 0 50px 100px;
            border-color: transparent transparent transparent #660DCF;
            z-index: 2;
        }

        .letter {
            left: 20px;
            bottom: 0px;
            position: absolute;
            width: 160px;
            height: 60px;
            background: white;
            z-index: 1;
            overflow: hidden;
            -webkit-transition: .4s .2s;
            -moz-transition: .4s .2s;
            transition: .4s .2s;

            .letter-border {
                height: 10px;
                width: 100%;
                background: repeating-linear-gradient(
                        -45deg,
                        #690ddc,
                        #690ddc 8px,
                        transparent 8px,
                        transparent 18px
                );
            }

            .letter-title {
                margin-top: 10px;
                margin-left: 5px;
                height: 10px;
                width: 40%;
                background: #690ddc;
            }
            .letter-context {
                margin-top: 10px;
                margin-left: 5px;
                height: 10px;
                width: 20%;
                background: #690ddc;
            }

            .letter-stamp {
                margin-top: 30px;
                margin-left: 120px;
                border-radius: 100%;
                height: 30px;
                width: 30px;
                background: #690ddc;
                opacity: 0.3;
            }
        }
    }

    .opened {
        .animated-mail {
            transform: translateY(50px);
            -webkit-transform: translateY(50px);
            -moz-transform: translateY(50px);
        }

        .animated-mail .top-fold {
            transition: transform .4s, z-index .2s;
            transform: rotateX(180deg);
            -webkit-transition: transform .4s, z-index .2s;
            -webkit-transform: rotateX(180deg);
            -moz-transition: transform .4s, z-index .2s;
            -moz-transform: rotateX(180deg);
            z-index: 0;
        }

        .animated-mail .letter {
            height: 180px;
        }

        .shadow {
            width: 250px;
        }
    }
</style>

<script>
    export default {
        name: 'ob-mailbox',
        mounted() {
            setTimeout(() => {
                if(this.$refs.letterImageElement){
                    this.$refs.letterImageElement.classList.add('opened');
                }
            }, 500);
        }
    }
</script>

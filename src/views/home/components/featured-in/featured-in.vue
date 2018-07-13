<template>
    <div class="columns is-centered is-mobile featured-in">
        <!--<div class="column">-->
            <!--<a href="https://www.ft.com/" target="_blank" rel="noopener noreferrer">-->
                <!--<figure class="image featured-in-img position-top">-->
                    <!--<img class="is-grayscale" src="./assets/ft-logo.png">-->
                <!--</figure>-->
            <!--</a>-->
        <!--</div>-->
        <div class="column">
            <a href="https://www.greennetproject.org/" target="_blank" rel="noopener noreferrer">
                <figure class="image featured-in-img">
                    <img class="is-grayscale" src="./assets/greennet-logo.png">
                </figure>
            </a>
        </div>
        <div class="column">
            <a href="https://www.cbronline.com/" target="_blank" rel="noopener noreferrer">
                <figure class="image featured-in-img position-top">
                    <img class="is-grayscale" src="./assets/cbr-logo.png">
                </figure>
            </a>
        </div>
        <div class="column">
            <a href="https://www.computeridee.nl/" target="_blank" rel="noopener noreferrer">
                <figure class="image featured-in-img">
                    <img class="is-grayscale" src="./assets/computer_idee-logo.png">
                </figure>
            </a>
        </div>
    </div>
</template>

<style lang="scss">
    .featured-in {
        .column {
            display: flex;
            justify-content: center;
        }
    }

    .featured-in-img {
        max-width: 128px;
        height: auto;

        &.position-top {
            top: -1em;
        }

        .is-grayscale {

            &:hover {
                filter: none;
            }
        }
    }
</style>


<script>
    export default {
        name: 'ob-featured-on'
    }
</script>

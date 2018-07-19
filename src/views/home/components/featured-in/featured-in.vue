<template>
    <div>
        <div class="columns is-centered featured-in">
            <div class="column">
                <a href="https://www.telegraph.co.uk/technology/2018/07/16/privacy-activists-launch-tracking-free-rival-facebook/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image">
                        <img class="is-grayscale" src="./assets/telegraph-logo.svg">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.greennetproject.org/" target="_blank"
                   class="featured-in__logo-wrapper"
                   rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/greennet-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.cbronline.com/feature/openbook-opensource-socialmedia"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img position-top">
                        <img class="is-grayscale" src="./assets/cbr-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://uk.news.yahoo.com/privacy-activists-launch-tracking-free-110409830.html?guccounter=1"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/yahoo-logo.svg">
                    </figure>
                </a>
            </div>
        </div>
        <div class="columns is-centered featured-in">
            <div class="column">
                <a href="https://www.neowin.net/news/pgp-creator-backs-openbook-a-kickstarter-privacy-first-alternative-to-facebook"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/neowin-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.presse-citron.net/openbook-un-anti-facebook-open-source-et-sans-pistage-des-utilisateurs/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image">
                        <img class="is-grayscale" src="./assets/presse-citron-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.wizekat.eu/2018/07/openbook-un-anti-facebook-open-source-et-sans-pistage-des-utilisateurs/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/wizekat-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.computeridee.nl/"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/computer_idee-logo.png">
                    </figure>
                </a>
            </div>
            <div class="column">
                <a href="https://www.lesechos.fr/tech-medias/hightech/0301984319323-openbook-le-nouveau-reseau-social-qui-veut-proteger-la-vie-privee-des-utilisateurs-2192484.php"
                   class="featured-in__logo-wrapper"
                   target="_blank" rel="noopener noreferrer">
                    <figure class="image featured-in-img">
                        <img class="is-grayscale" src="./assets/logo-lesechos-logo.svg">
                    </figure>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .featured-in {

        .column {
            display: flex;
            justify-content: center;
            min-width: 20%;

            @media screen and (max-width: 769px) {
                min-height: 6em;
            }
        }

        .is-grayscale {

            &:hover {
                filter: none;
            }
        }
    }

    .featured-in__logo-wrapper {
        display: flex;
        align-items: center;
    }

    .featured-in-img {
        max-width: 128px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }

    .featured-in-img-2 {
        max-width: 200px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }

    .featured-in-img-3 {
        max-width: 110px;
        height: auto;

        &.position-top {
            top: -1em;
        }
    }
</style>


<script>
    export default {
        name: 'ob-featured-on'
    }
</script>

<template>
    <div class="columns">
        <div class="column">
            <div class="content has-text-centered padding-bottom-3x">
                <p class="is-size-3">
                    Why Openbook?
                </p>
                <p>
                    Some of the key things that set us apart from other social networks.
                </p>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--privacy">
                            <i class="fas fa-eye-slash"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                Respect for your privacy
                            </h4>
                            <p class="is-size-5 home-why-content">
                                We will never track you, inside or outside of the network.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--honesty">
                            <i class="far fa-handshake"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                Honest
                            </h4>
                            <p class="is-size-5 home-why-content">
                                All of our code free and open for everyone to inspect, reproduce and contribute to.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--migration">
                            <i class="fas fa-exchange-alt"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                Seamless migration
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                We will provide importers to migrate all of your existing data to our network.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--secure">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                Secure
                            </h4>
                            <p class="is-size-5 home-why-content">
                                Third party applications that wish to access your data will have to meet our strict security policy.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--future">
                            <i class="fas fa-hourglass-start"></i>
                        </div>
                        <div class="column content is-12 has-text-centered">
                            <h4 class="is-size-4">
                                Future-proof
                            </h4>
                            <p class="is-size-5 home-why-content">
                                With a solid and useful revenue model based on peer-to-peer transactions, we are in for the long run.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                            <i class="far fa-star"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                Modern & beautiful
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                Built on the latest technologies and designed with simplicity in mind, you won't find anything like it elsewhere.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns">
                <div class="column home-why-container">
                    <div class="columns is-centered is-mobile is-multiline has-text-centered home-why">
                        <div class="is-size-3 home-why-icon home-why-icon--beautiful">
                            <i class="fas fa-leaf"></i>
                        </div>
                        <div class="column content is-12">
                            <h4 class="is-size-4">
                                Good for the planet
                            </h4>
                            <p class="is-size-5 has-text-centered home-why-content">
                                In partnership with <a href="https://founderspledge.com/" target="_blank">Founders Pledge</a>
                                we will give 30% of our revenue towards making the world a better place, now and
                                forever.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .home-why-container {
        display: flex !important;
        justify-content: center !important;
        margin-bottom: 3rem;
    }

    .home-why {
        max-width: 400px;
    }

    $home-why-icon-size: 5rem;

    .home-why-icon {
        margin-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: $home-why-icon-size;
        width: $home-why-icon-size;
        border-radius: 50%;
        background: #690ddc;
        color: white;
    }

    .home-why-content {
        display: flex !important;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media(min-width: 770px) {
            min-height: 8rem;
        }
    }
</style>

<script>
    export default {
        name: 'ob-why-openbook'
    }
</script>

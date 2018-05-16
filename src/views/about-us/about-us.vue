<template>
    <div>
        <section class="hero is-fullheight hero--about-us">
            <div class="hero-body">
                <div class="container is-fluid">
                    <div class="columns is-centered is-vcentered">
                        <div class="column">
                            <div class="columns is-centered">
                                <div class="column is-narrow">
                                    <h1 class="subtitle is-size-3 has-text-grey-light">
                                        About us
                                    </h1>
                                    <h2 class="title is-size-2 trust-text">
                                        We want to build a social network we all can <span class="has-text-primary">trust</span>.
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div class="column">
                            <div class="columns is-centered is-vcentered is-mobile padding-bottom-2x">
                                <div class="column is-narrow">
                                    <figure class="image">
                                        <img class="is-rounded trust-gif" src="https://orig00.deviantart.net/b64a/f/2015/196/4/6/earth_3_0__animated__by_shaddow24-d91hqbn.gif">
                                    </figure>
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column has-text-centered">
                                    <p>The place we all call home.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column has-text-centered intro-text">
                        <h3 class="is-size-4">
                            In the year 2018, data scandal after data scandal, tracking tools improving their efficiency thanks to the development of artificial intelligence,
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>


<style lang="scss">

    .hero--about-us{
        border-bottom: solid 1px #fafafa;
    }

    .trust-text{
        max-width:500px;
    }

    .trust-gif{
        max-width: 300px;
        height: auto;
    }

    .intro-text{
        max-width: 600px;
    }

</style>

<template>
    <section class="hero is-primary is-bold">
        <div class="hero-body has-text-centered">
            <div class="container">
                <div class="columns is-centered is-vcentered">
                    <div class="column">
                        <a href="#" class="button is-white is-outlined is-rounded is-medium">
                            Meet the team
                        </a>
                    </div>
                    <div class="column">
                        <div class="columns is-centered is-mobile">
                            <div class="column is-narrow" style="margin-left: -10px;">
                                <div class="home-team">
                                    <figure class="image is-64x64 home-team-figure" v-for="teamImage in teamImages">
                                        <img class="is-rounded" :src="teamImage" alt="Image">
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import teamImage1 from './assets/joel.jpeg';
    import teamImage2 from './assets/jaya.png';
    import teamImage3 from './assets/phil.jpg';
    import teamImage4 from './assets/vincent.jpeg';
    import teamImage5 from './assets/lars.jpeg';

    export default{
        name: 'ob-meet-the-team',
        data(){
            return {
                teamImages:[
                    teamImage5,
                    teamImage4,
                    teamImage2,
                    teamImage3,
                    teamImage1
                ]
            }
        }
    }
</script>

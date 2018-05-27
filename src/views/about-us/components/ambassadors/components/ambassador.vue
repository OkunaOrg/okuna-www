<template>
    <div class="columns is-mobile is-multiline">
        <div class="column is-12">
            <figure class="image is-4by5">
                <img class="is-semi-rounded is-shadowed" :src="ambassador.photo" v-bind:alt="ambassador.photo">
            </figure>
        </div>
        <div class="column is-12">
            <div class="columns is-multiline is-mobile">
                <div class="column">
                    <strong class="is-size-6-mobile">{{ambassador.name}}</strong>
                    <br/>
                    <span class="is-size-7-mobile">{{ambassador.description}}</span>
                    <div class="member-links">
                        <a :href="ambassador.links.website" v-if="ambassador.links.website" class="member-links-link member-links-link--website" target="_blank">
                            <span class="icon">
                                <i class="fas fa-globe"></i>
                            </span>
                        </a>
                        <a :href="ambassador.links.instagram" v-if="ambassador.links.instagram" class="member-links-link member-links-link--instagram" target="_blank">
                            <span class="icon">
                                <i class="fab fa-instagram"></i>
                            </span>
                        </a>
                        <a :href="ambassador.links.facebook" v-if="ambassador.links.facebook" class="member-links-link member-links-link--facebook" target="_blank">
                            <span class="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                        </a>
                        <a :href="ambassador.links.twitter" v-if="ambassador.links.twitter" class="member-links-link member-links-link--twitter" target="_blank">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                        <a :href="ambassador.links.linkedin" v-if="ambassador.links.linkedin" class="member-links-link member-links-link--linkedin" target="_blank">
                            <span class="icon">
                                <i class="fab fa-linkedin"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">

    .member-links{

        padding: 0.5rem 0;

        &-link{
            &--twitter{
                color: #1DA1F2;
            }

            &--linkedin{
                color: #0077B5;
            }

            &--facebook{
                color: #3b5998;
            }

            &--instagram{
                color: black;
            }

            &--website{
                color: gray;
            }
        }
    }



    .member-description {
        padding-top: 0.5rem;
    }

    .member-talent {
        @media (max-width: 768px){
            font-size: 0.6rem !important;
        }

        margin-right: 0.2rem;
        margin-bottom: 0.5rem;
    }
</style>

<script>
    export default {
        name: 'ob-ambassador',
        props: {
            ambassador: {
                type: Object
            }
        },
        methods: {}
    }
</script>

<template>
    <div class="columns is-mobile is-multiline">
        <div class="column is-12">
            <figure class="image is-4by5">
                <img class="is-semi-rounded is-shadowed" :src="contributor.photo" v-bind:alt="contributor.photo">
            </figure>
        </div>
        <div class="column is-12">
            <div class="columns is-multiline is-mobile">
                <div class="column">
                    <strong class="is-size-6-mobile">{{contributor.name}}</strong>
                    <br/>
                    <div class="member-links">
                        <a :href="contributor.links.website" v-if="contributor.links.website" class="member-links-link member-links-link--website" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fas fa-globe"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.github" v-if="contributor.links.github" class="member-links-link member-links-link--github" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.gitlab" v-if="contributor.links.gitlab" class="member-links-link member-links-link--gitlab" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fab fa-gitlab"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.instagram" v-if="contributor.links.instagram" class="member-links-link member-links-link--instagram" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fab fa-instagram"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.facebook" v-if="contributor.links.facebook" class="member-links-link member-links-link--facebook" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fab fa-facebook"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.twitter" v-if="contributor.links.twitter" class="member-links-link member-links-link--twitter" target="_blank" rel="noopener noreferrer">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                        <a :href="contributor.links.linkedin" v-if="contributor.links.linkedin" class="member-links-link member-links-link--linkedin" target="_blank" rel="noopener noreferrer">
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

            &--gitlab{
                color: #b5512b;
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
</style>

<script>
    export default {
        name: 'ob-contributor',
        props: {
            contributor: {
                type: Object
            }
        },
        methods: {}
    }
</script>

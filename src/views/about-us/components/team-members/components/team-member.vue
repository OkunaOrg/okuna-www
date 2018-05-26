<template>
    <div class="columns is-mobile is-multiline">
        <div class="column is-12">
            <figure class="image is-4by5">
                <img class="is-semi-rounded is-shadowed" :src="teamMember.photo" v-bind:alt="teamMember.photo">
            </figure>
        </div>
        <div class="column is-12">
            <div class="columns is-multiline is-mobile">
                <div class="column">
                    <strong class="is-size-6-mobile">{{teamMember.name}}</strong>
                    <br/>
                    <span class="is-size-7-mobile">{{teamMember.position}}</span>
                    <div class="member-links">
                        <a :href="teamMember.links.website" v-if="teamMember.links.website" class="member-links-link member-links-link--website" target="_blank">
                            <span class="icon">
                                <i class="fas fa-globe"></i>
                            </span>
                        </a>
                        <a :href="teamMember.links.github" v-if="teamMember.links.github" class="member-links-link member-links-link--github" target="_blank">
                            <span class="icon">
                                <i class="fab fa-github"></i>
                            </span>
                        </a>
                        <a :href="teamMember.links.twitter" v-if="teamMember.links.twitter" class="member-links-link member-links-link--twitter" target="_blank">
                            <span class="icon">
                                <i class="fab fa-twitter"></i>
                            </span>
                        </a>
                        <a :href="teamMember.links.linkedin" v-if="teamMember.links.linkedin" class="member-links-link member-links-link--linkedin" target="_blank">
                            <span class="icon">
                                <i class="fab fa-linkedin"></i>
                            </span>
                        </a>
                    </div>
                    <div class="member-description">
                        <span>
                            {{teamMember.description}}
                        </span>
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

            &--github{
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
        name: 'ob-team-member',
        props: {
            teamMember: {
                type: Object
            }
        },
        methods: {}
    }
</script>

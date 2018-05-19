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
                    <strong>{{teamMember.name}}</strong>
                    <br/>
                    <span>{{teamMember.position}}</span>
                    <div class="member-talents">
                        <span class="tag member-talent" v-for="talent in teamMember.talents">
                            {{talent}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss">

    .member-talents{
        padding-top: 1rem;
    }

    .member-talent{
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

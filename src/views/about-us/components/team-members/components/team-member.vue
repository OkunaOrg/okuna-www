<template>
    <div class="columns is-mobile is-multiline">
        <div class="column is-12">
            <figure class="image">
                <img :src="teamMember.photo" v-bind:alt="teamMember.photo">
            </figure>
        </div>
        <div class="column is-12">
            <div class="columns is-multiline is-mobile">
                <div class="column">
                    <span>{{teamMember.name}}</span>
                    <span>{{teamMember.position}}</span>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'ob-team-member',
        props: {
            teamMember: {
                type: Object
            }
        },
        methods: {
        }
    }
</script>

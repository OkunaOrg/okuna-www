<template>
    <div>
        {{teamMember.name}}
    </div>
</template>


<script>
    export default {
        name: 'ob-team-member',
        props: {
            teamMember: {
                type: Object
            }
        }
    }
</script>

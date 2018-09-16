<template>
    <section class="hero is-medium hero--subscribe">

        <p>
            <span class="input">
                <input type="text" placeholder="Email">
                <span class="shadow"></span>
            </span>
        </p>
    </section>
</template>


<style lang="scss">

    .hero--subscribe {
        padding: 2em 0;
        align-items: center;
        justify-content: center;
    }

    .input {
        position:relative;
        font-size: 1.5em;
        background: linear-gradient(21deg, #10abff, #1beabd);
        padding: 3px;
        display: inline-block;
        border-radius: 9999em;

        *:not(span) {
            position: relative;
            display: inherit;
            border-radius: inherit;
            margin: 0;
            border: none;
            outline: none;
            padding: 0.2em .525em;
            z-index: 1;
            &:focus + span {
                opacity: 1;
                transform: scale(1);
            }
        }

        span {

            transform: scale(.993, .94);
            transition: transform .5s, opacity .25s;
            opacity: 0; // is hidden by default

            position:absolute;
            z-index: 0;
            margin:4px;
            left:0;
            top:0;
            right:0;
            bottom:0;
            border-radius: inherit;
            pointer-events: none;
            box-shadow: inset 0 0 0 3px #fff,
            0 0 0 4px #fff,
            3px -3px 30px #1beabd,
            -3px 3px 30px #10abff;
        }

    }

    input {
        font-family: inherit;
        line-height:inherit;
        color:#2e3750;
        min-width:12em;
    }

    ::placeholder {
        color:#cbd0d5;
    }
</style>


<script>

    export default {
        name: 'ob-subscribe',
        mounted() {
        },
        methods: {
        }
    }
</script>

<template>
    <div id="user-icon-wrapper">
        <img v-bind:class="{ border: hasBorder, img: !hasBorder }" :src="imageSrc" />
        <div id="text">{{ username }}</div>
    </div>
</template>

<script>
export default {
    props: {
        username: String,
        imageSrc: String,
        hasBorder: Boolean
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    #user-icon-wrapper {
        display: flex;
        flex-direction: column;
    }

    .img {
        margin-left: 12.5%;
    }

    .border {
        width: 20%;
        border: 5px solid dodgerblue;
        box-sizing: border-box;
        border-radius: 100%;
    }

    #text {
        color: white;
        font-family: $font-main;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 10px;
    }
</style>
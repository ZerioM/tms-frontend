<template>
    <div id="user-icon-wrapper">
        <img :src="imageSrc" />
        <div id="text">{{ username }}</div>
    </div>
</template>

<script>
export default {
    props: {
        username: String,
        imageSrc: String,
    }
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    #user-icon-wrapper {
        display: flex;
        flex-direction: column;
    }

    img {
        margin-left: 12.5%;
    }

    #text {
        color: white;
        font-family: $font-main;
        font-style: normal;
        font-weight: 600;
        font-size: 9px;
        line-height: 10px;
    }
</style>
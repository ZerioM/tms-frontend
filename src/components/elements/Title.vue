<template>
  <h1>{{ text }}</h1>
</template>

<script>
export default {
props: {
    text: String
}
}
</script>

<style lang="scss" scoped>
@import '@/main.scss';

    h1 {
        font-family: $font-main;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 40px;
        color: white;
        margin-left: 23%;
    }
</style>
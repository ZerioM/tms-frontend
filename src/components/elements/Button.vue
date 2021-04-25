<template>
  <button class="button">
    <p class="einzelansicht">{{ text }}</p>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
      text: String
  }
};
</script>

<style lang="scss" scoped>
@import '@/main.scss';

.button {
  background-color: dodgerblue;
  padding: 8.86px 31px 7.97px 17px;
  width: 147px;
  height: 31px;
  display: flex;
  align-items: center;
}
.einzelansicht {
    height: 14.17px;
    width: 99px;
    color: white;
    display: flex;
    font-family: $font-main;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
}
</style>
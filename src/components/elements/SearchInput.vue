<template>
  <Input ref="input" id="input" />
  <img id="search-icon" @click="clickOnSearchIcon()" src="@/assets/icons/search.svg" />
</template>

<script>
import Input from './Input.vue'
export default {
  components: { Input },
  methods: {
      clickOnSearchIcon() {
        const input = this.$refs.input;
        input.$el.setFocus();
      }
  }
}
</script>

<style scoped>
    #input {
        margin-left: 15%;
        width: 70%;
    }

    #search-icon {
        position: absolute;
        margin-top: -7%;
        right: 15%;
        z-index: 1000;
        background-color: white;
        padding-left: 1%;
        padding-right: 2.5%;
    }
</style>
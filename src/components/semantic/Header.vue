<template>
  <div id="header">
      <img id="back-m" src="@/assets/icons/big_m.svg" />
      <NavBar />
      <Title :text="title" id="title" />
      <SearchInput />
  </div>
</template>

<script>
import NavBar from '../elements/NavBar.vue'
import SearchInput from '../elements/SearchInput.vue'
import Title from '../elements/Title.vue'
export default {
  components: { SearchInput, Title, NavBar },
  props: {
      title: String
  }
}
</script>

<style lang="scss" scoped>
#header {
    width: 100%;
    height: 220px;
    padding: 0%;
    background: dodgerblue;
}

#back-m {
    top: -30px;
    left: -10px;
    position: absolute;
    opacity: 0.3;
    max-width: 102%;
    width: 102%;
    height: auto;
}

#title {
    align-content: center;
}
</style>
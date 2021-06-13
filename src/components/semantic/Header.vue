<template>
  <div id="header" :class="sharedState.isMenuVisible ? 'resize-header' : 'header'">
      <img id="back-m" src="@/assets/icons/big_m.svg" />
      <div id="nav-bar">
        <UserIcon v-bind:class="{ hidden: sharedState.isMenuVisible }" imageSrc="/images/standard/user.svg" username="User_23456" id="user-icon" />
        <Title v-bind:class="{ hidden: sharedState.isMenuVisible }" :text="title" id="title" />
        <Menu id="menu" v-bind:class="{ displaynone: !sharedState.isMenuVisible }" />
        <MenuIcon id="menu-icon" @click="toggleMenu()"/>
      </div>
      
      <SearchInput v-if="searchable && !sharedState.isMenuVisible" />
  </div>
</template>

<script>
import SearchInput from '../elements/SearchInput.vue';
import Title from '../elements/Title.vue';
import Menu from './Menu.vue';
import UserIcon from '../elements/UserIcon.vue';
import MenuIcon from '../elements/MenuIcon.vue';
import { store } from '../../store/';

export default {
  components: { SearchInput, Title, Menu, UserIcon, MenuIcon },
  props: {
      title: String,
      searchable: Boolean
  },
  data () {
    return {
        sharedState: store.state
    }
  },
  methods: {
    toggleMenu() {
        store.changeMenuVisibleAction(!this.sharedState.isMenuVisible);
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 160px;
    padding: 0%;
    background: dodgerblue;
}

.resize-header {
    width: 100%;
    height: 300px;
    padding: 0%;
    background: dodgerblue;
}

#back-m {
    top: 0;
    left: -10px;
    position: absolute;
    opacity: 0.3;
    max-width: 102%;
    width: 102%;
    height: auto;
    pointer-events: none;
    max-height: 160px;
    overflow: hidden;
    object-fit: cover;
}

#title {
    margin-left: -5%;
}

.displaynone {
    display: none;
}

.hidden {
    visibility: hidden;
}

#nav-bar {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5%;
}

#logo {
    margin: 0;
    margin-top: 2.5%;
    margin-bottom: 5%;
    margin-left: -5%;
    z-index: 1;
}

#user-icon {
    margin-left: 3.86%;
    padding-top: 2%;
    z-index: 2 ;
}

#menu {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
}

#menu-icon {
    margin-top: 5%;
    margin-right: 3.86%;
    margin-left: 3%;
    z-index: 1000;
}
</style>
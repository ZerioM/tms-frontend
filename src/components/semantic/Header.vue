<template>
  <div id="header">
      <img id="back-m" src="@/assets/icons/big_m.svg" />
      <div id="nav-bar">
        <UserIcon v-bind:class="{ hidden: isMenuVisible }" imageSrc="/images/standard/user.svg" username="User_23456" id="user-icon" />
        <router-link v-bind:class="{ hidden: isMenuVisible }" id="logo" to="/">
            <img src="@/assets/icons/tms_white.svg" />
        </router-link>
        <Menu id="menu" v-bind:class="{ displaynone: !isMenuVisible }" />
        <MenuIcon id="menu-icon" @click="toggleMenu()"/>
      </div>
      <Title v-bind:class="{ hidden: isMenuVisible }" :text="title" id="title" />
      <SearchInput v-if="searchable && !isMenuVisible" />
  </div>
</template>

<script>
import SearchInput from '../elements/SearchInput.vue';
import Title from '../elements/Title.vue';
import Menu from './Menu.vue';
import UserIcon from '../elements/UserIcon.vue';
import MenuIcon from '../elements/MenuIcon.vue';

export default {
  components: { SearchInput, Title, Menu, UserIcon, MenuIcon },
  props: {
      title: String,
      searchable: Boolean
  },
  data () {
    return {
        isMenuVisible: false,
    }
  },
  methods: {
    toggleMenu() {
        this.isMenuVisible = !this.isMenuVisible;
    }
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
    pointer-events: none;
}

#title {
    align-content: center;
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
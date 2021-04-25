<template>
  <div id="nav-bar">
    <UserIcon imageSrc="/images/standard/user.svg" username="User_23456" id="user-icon" />
    <img id="logo" src="@/assets/icons/tms_white.svg" />
    <MenuIcon id="menu-icon" @click="toggleMenu()"/>
  </div>
</template>

<script>
import MenuIcon from './MenuIcon.vue'
import UserIcon from './UserIcon.vue'
export default {
  components: { UserIcon, MenuIcon },
  methods: {
      toggleMenu() {
          console.log("b");
      }
  }
}
</script>

<style lang="scss" scoped>
    
#nav-bar {
    display: flex;
    justify-content: space-between;
}

#logo {
    margin: 0;
    margin-top: 2.5%;
    margin-bottom: 5%;
}

#user-icon {
    margin-left: 3.86%;
    padding-top: 2%;
}

#menu-icon {
    margin-top: 5%;
    margin-right: 3.86%;
    margin-left: 3%;
    z-index: 1000;
}

</style>
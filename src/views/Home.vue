<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <div id="container">
        <img id="logo" src="@/assets/icons/colored_logo.svg" />
        <div id="blue-content">
          <img id="back-logo" src="@/assets/icons/big_m_leftward.svg" />
          <UserIcon imageSrc="/images/standard/user.svg" username="User_23456" hasBorder="true" id="user-icon" />
          <router-link class="router-button" to="fridges">
            Monitoring
          </router-link>
          <router-link class="router-button" to="information">
            Information
          </router-link>
          <img id="qr" src="@/assets/icons/qr.svg" />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';
import UserIcon from '../components/elements/UserIcon.vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonPage,
    UserIcon
  },
});
</script>

<style scoped lang="scss">
@import '@/main.scss';

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
}

#back-logo {
  position: absolute;
  width: 110%;
  margin-top: -10%;
  opacity: 0.3;
}

#qr {
  position: fixed;
  z-index: 1;
  width: 25%;
  bottom: 5%;
  left: 37.5%;
}

#logo {
  margin-top: 10%;
  margin-bottom: 15%;
  width: 70%;
  height: auto;
}

#blue-content {
  background: dodgerblue;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 100%;
  margin-bottom: 0;
}

.router-button {
  z-index: 1;
  padding: 10%;
  margin: 5% 10%;
  text-decoration: none;
  font-family: $font-main;
  font-size: 4vh;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0px;
  color: #000;
  background: white;
}

#user-icon {
    margin-top: -10%;
}
</style>